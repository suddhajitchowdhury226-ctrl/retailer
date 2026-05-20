import jsPDF from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';

// Apply the autoTable plugin to jsPDF (required for jspdf-autotable v5+)
applyPlugin(jsPDF);

export const generateInvoice = (order, userData = {}, action = 'download') => {
  const doc = new jsPDF();
  
  // Get page dimensions for responsive layout
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  // Company Information
  const companyInfo = {
    name: "Ray's Healthy Living",
    address: "70 Solomons Island Rd S",
    city: "Prince Frederick, MD 20678",
    phone: "443-432-5295",
    email: "rayshealthyliving@gmail.com"
  };

  // Set fonts and colors
  doc.setFont('helvetica');
  
  // Header - Company Logo/Name (responsive)
  doc.setFontSize(Math.min(24, contentWidth / 8));
  doc.setTextColor(40, 116, 166);
  doc.text(companyInfo.name, margin, 25);
  
  // Invoice Title (responsive)
  doc.setFontSize(Math.min(20, contentWidth / 10));
  doc.setTextColor(0, 0, 0);
  doc.text('INVOICE', pageWidth - margin - 40, 25);
  
  // Company Details (responsive)
  doc.setFontSize(Math.min(10, contentWidth / 20));
  doc.setTextColor(100, 100, 100);
  doc.text(companyInfo.address, margin, 35);
  doc.text(companyInfo.city, margin, 42);
  doc.text(`Phone: ${companyInfo.phone}`, margin, 49);
  doc.text(`Email: ${companyInfo.email}`, margin, 56);
  
  // Invoice Details (responsive)
  doc.setFontSize(Math.min(12, contentWidth / 16));
  doc.setTextColor(0, 0, 0);
  const invoiceNumber = order.paymentIntentId || `INV-${order._id.slice(-8).toUpperCase()}`;
  const invoiceDate = new Date(order.createdAt).toLocaleDateString();
  
  const invoiceDetailsX = pageWidth - margin - 80;
  doc.text(`Invoice: ${invoiceNumber}`, invoiceDetailsX, 40);
  doc.text(`Date: ${invoiceDate}`, invoiceDetailsX, 50);
  
  // Bill To Section (responsive)
  doc.setFontSize(Math.min(14, contentWidth / 14));
  doc.setTextColor(40, 116, 166);
  doc.text('BILL TO:', margin, 75);
  
  // Ship To Section (responsive)
  const shipToX = Math.max(pageWidth / 2, margin + 100);
  doc.text('SHIP TO:', shipToX, 75);
  
  doc.setFontSize(Math.min(12, contentWidth / 16));
  doc.setTextColor(0, 0, 0);
  let billToY = 85;
  let shipToY = 85;
  
  if (order.address && !order.address.message) {
    // Bill To section
    doc.text(order.address.name || 'Customer', margin, billToY);
    billToY += 7;
    doc.text(order.address.addressLine1, margin, billToY);
    billToY += 7;
    if (order.address.addressLine2) {
      doc.text(order.address.addressLine2, margin, billToY);
      billToY += 7;
    }
    doc.text(`${order.address.city}, ${order.address.state} ${order.address.zipcode}`, margin, billToY);
    billToY += 7;
    doc.text(order.address.country, margin, billToY);
    billToY += 7;
    doc.text(`Phone: ${order.address.contactNumber}`, margin, billToY);
    if (order.address.email) {
      billToY += 7;
      doc.text(`Email: ${order.address.email}`, margin, billToY);
    }
    
    // Ship To section (same as bill to)
    doc.text(order.address.name || 'Customer', shipToX, shipToY);
    shipToY += 7;
    doc.text(order.address.addressLine1, shipToX, shipToY);
    shipToY += 7;
    if (order.address.addressLine2) {
      doc.text(order.address.addressLine2, shipToX, shipToY);
      shipToY += 7;
    }
    doc.text(`${order.address.city}, ${order.address.state} ${order.address.zipcode}`, shipToX, shipToY);
    shipToY += 7;
    doc.text(order.address.country, shipToX, shipToY);
  } else {
    // Bill To section with user data
    doc.text(userData.name || 'Customer', margin, billToY);
    billToY += 7;
    doc.text(userData.email || '', margin, billToY);
    billToY += 7;
    doc.text(userData.phone || '', margin, billToY);
    
    // Ship To section
    doc.text('Same as billing address', shipToX, shipToY);
  }
  
  // Items Table
  const tableStartY = Math.max(billToY, shipToY) + 20;
  
  // Prepare table data
  const tableData = order.items.map((item, index) => [
    (index + 1).toString(),
    item.displayName || item.product?.displayName || item.product?.name || item.name || 'Product',
    item.sku || item.variantSku || item.product?.sku || 'N/A',
    item.quantity.toString(),
    `$${(item.price || 0).toFixed(2)}`,
    `$${((item.price || 0) * item.quantity).toFixed(2)}`
  ]);
  
  // Add responsive table
  const tableColumnWidths = {
    0: Math.max(15, contentWidth * 0.08), // #
    1: Math.max(50, contentWidth * 0.35), // Description
    2: Math.max(25, contentWidth * 0.15), // SKU
    3: Math.max(15, contentWidth * 0.08), // Qty
    4: Math.max(25, contentWidth * 0.17), // Unit Price
    5: Math.max(25, contentWidth * 0.17)  // Amount
  };
  
  doc.autoTable({
    startY: tableStartY,
    head: [['#', 'Description', 'SKU', 'Qty', 'Unit Price', 'Amount']],
    body: tableData,
    theme: 'grid',
    margin: { left: margin, right: margin },
    headStyles: {
      fillColor: [40, 116, 166],
      textColor: 255,
      fontSize: Math.min(10, contentWidth / 20),
      fontStyle: 'bold'
    },
    bodyStyles: {
      fontSize: Math.min(9, contentWidth / 22),
      cellPadding: 3
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: tableColumnWidths[0], halign: 'center' },
      1: { cellWidth: tableColumnWidths[1] },
      2: { cellWidth: tableColumnWidths[2] },
      3: { cellWidth: tableColumnWidths[3], halign: 'center' },
      4: { cellWidth: tableColumnWidths[4], halign: 'right' },
      5: { cellWidth: tableColumnWidths[5], halign: 'right' }
    }
  });
  
  // Calculate totals
  const subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = order.tax || 0;
  const shipping = order.shippingCost || 0;
  const total = order.total || subtotal + tax + shipping;
  
  // Responsive totals section - get position after table
  const finalY = doc.lastAutoTable.finalY + 10;
  const totalsX = pageWidth - margin - 80; // Right aligned
  const valuesX = pageWidth - margin - 10; // Values aligned to right margin
  
  doc.setFontSize(Math.min(10, contentWidth / 20));
  doc.text('Subtotal:', totalsX, finalY);
  doc.text(`$${subtotal.toFixed(2)}`, valuesX, finalY, { align: 'right' });
  
  if (tax > 0) {
    doc.text('Tax:', totalsX, finalY + 8);
    doc.text(`$${tax.toFixed(2)}`, valuesX, finalY + 8, { align: 'right' });
  }
  
  if (shipping > 0) {
    doc.text('Shipping:', totalsX, finalY + 16);
    doc.text(`$${shipping.toFixed(2)}`, valuesX, finalY + 16, { align: 'right' });
  }
  
  // Total line (responsive)
  doc.setFontSize(Math.min(12, contentWidth / 17));
  doc.setFont('helvetica', 'bold');
  const totalY = finalY + (tax > 0 ? 24 : 16) + (shipping > 0 ? 8 : 0);
  doc.line(totalsX, totalY - 2, valuesX, totalY - 2);
  doc.text('Total:', totalsX, totalY + 5);
  doc.text(`$${total.toFixed(2)}`, valuesX, totalY + 5, { align: 'right' });
  
  // Payment Information (responsive)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(Math.min(10, contentWidth / 20));
  const paymentY = totalY + 20;
  doc.text('Payment Method:', margin, paymentY);
  doc.text(order.paymentMethod || 'Online Payment', margin + 70, paymentY);
  
  doc.text('Payment Status:', margin, paymentY + 8);
  doc.text(order.status === 'completed' ? 'Paid' : 'Pending', margin + 70, paymentY + 8);
  
  // Order Status
  doc.text('Order Status:', margin, paymentY + 16);
  doc.text(order.status ? order.status.charAt(0).toUpperCase() + order.status.slice(1) : 'Processing', margin + 70, paymentY + 16);
  
  // Footer (responsive)
  const footerY = paymentY + 35;
  doc.setFontSize(Math.min(8, contentWidth / 25));
  doc.setTextColor(100, 100, 100);
  doc.text('Thank you for your business!', margin, footerY);
  doc.text('For any queries, please contact us at rayshealthyliving@gmail.com', margin, footerY + 8);
  
  // Terms and conditions (responsive)
  doc.text('Terms & Conditions:', margin, footerY + 20);
  doc.text('• Payment is due within 30 days', margin, footerY + 28);
  doc.text('• Please include invoice number on your payment', margin, footerY + 35);
  
  // Generate PDF based on action
  if (action === 'download') {
    doc.save(`Invoice-${invoiceNumber}.pdf`);
  } else if (action === 'view') {
    // Open in new tab for preview
    const pdfDataUri = doc.output('datauristring');
    const newWindow = window.open();
    newWindow.document.write(`
      <iframe 
        width='100%' 
        height='100%' 
        src='${pdfDataUri}'
        style='border: none;'>
      </iframe>
    `);
  }
  
  return doc;
};

export const previewInvoice = (order, userData = {}) => {
  return generateInvoice(order, userData, 'view');
};

export const downloadInvoice = (order, userData = {}) => {
  return generateInvoice(order, userData, 'download');
};

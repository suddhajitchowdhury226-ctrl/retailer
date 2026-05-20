// Performance Monitoring Utility
// Add this to your main.jsx or App.jsx

export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Monitor page load performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      console.log('📊 Performance Metrics:');
      console.log(`  Page Load: ${pageLoadTime}ms`);
      console.log(`  Server Response: ${connectTime}ms`);
      console.log(`  Render Time: ${renderTime}ms`);

      // Send to analytics if needed
      if (pageLoadTime > 3000) {
        console.warn('⚠️ Slow page load detected!');
      }
    }, 0);
  });

  // Monitor API calls
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const start = performance.now();
    try {
      const response = await originalFetch(...args);
      const duration = performance.now() - start;
      
      if (duration > 1000) {
        console.warn(`⚠️ Slow API call: ${args[0]} - ${duration.toFixed(0)}ms`);
      }
      
      return response;
    } catch (error) {
      const duration = performance.now() - start;
      console.error(`❌ API call failed: ${args[0]} - ${duration.toFixed(0)}ms`);
      throw error;
    }
  };

  // Monitor memory usage (if available)
  if (performance.memory) {
    setInterval(() => {
      const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
      const total = (performance.memory.totalJSHeapSize / 1048576).toFixed(2);
      
      if (used / total > 0.9) {
        console.warn(`⚠️ High memory usage: ${used}MB / ${total}MB`);
      }
    }, 30000); // Check every 30 seconds
  }
};

// Usage in main.jsx:
// import { initPerformanceMonitoring } from './utils/performanceMonitor';
// if (import.meta.env.PROD) {
//   initPerformanceMonitoring();
// }

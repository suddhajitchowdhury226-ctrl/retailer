// ... your full existing code above remains exactly the same

  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)" }} className="PL__Wrapper">
        <button
          onClick={toggleSidebar}
          className="mobile-hamburger"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
        {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          {/* Sidebar content remains unchanged */}
          {/* ... */}
        </div>
        <div ref={productListRef} className="PL__ProductsGrid">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            productList
          )}
        </div>
      </div>

      <style>
        {`
        /* ======== RESPONSIVE STYLES ======== */

        .PL__Wrapper {
          display: flex;
        }

        .sidebar {
          width: 300px;
          background: white;
          box-shadow: 4px 0 24px rgba(0,0,0,0.1);
          overflow-y: auto;
          max-height: 100vh;
          position: sticky;
          top: 0;
        }

        .PL__ProductsGrid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        /* Mobile hamburger hidden by default */
        .mobile-hamburger {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1001;
          background: #77a13d;
          color: white;
          border: none;
          border-radius: 0 8px 8px 0;
          padding: 12px 8px;
          cursor: pointer;
          display: none;
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 999;
          display: none;
        }

        /* ======== MOBILE VIEW ======== */
        @media (max-width: 768px) {
          .PL__Wrapper {
            flex-direction: column;
          }

          .sidebar {
            position: fixed;
            top: 0;
            left: -100%;
            height: 100%;
            transition: left 0.3s ease;
            z-index: 1000;
          }

          .sidebar.open {
            left: 0;
          }

          .mobile-hamburger {
            display: block;
          }

          .sidebar-overlay {
            display: block;
          }

          .PL__ProductsGrid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
            padding: 12px;
          }
        }

        @media (max-width: 480px) {
          .PL__ProductsGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
        `}
      </style>
    </>
  );
};

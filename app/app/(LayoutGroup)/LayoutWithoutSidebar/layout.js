export default function LayoutWithoutSidebar({ children }) {
  return (
    <div className="layout-without-sidebar">
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

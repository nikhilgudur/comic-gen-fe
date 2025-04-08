import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <h1>Comic Gen</h1>
    </header>
    <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    {/* <footer
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      © 2023 Comic Gen
    </footer> */}
  </div>
);

export default Layout;

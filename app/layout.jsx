import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Freedom",
  keywords: "rental,property",
  description: "find the perfect rental",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

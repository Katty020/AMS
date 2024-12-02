import { ReactNode } from 'react';
import '../styles/globals.css'; // Import global styles

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Admission Management System</title>
        <meta name="description" content="Manage student admissions efficiently" />
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/signup">Signup</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/pay">Pay</a></li>
              <li><a href="/admin/dashboard">Admin Dashboard</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Admission Management System</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
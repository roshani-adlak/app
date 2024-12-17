import { Inter } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "./common/sidebar";
import Header from "./common/header";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <div className="ap-dash-wrapper">
      <Header />
      <Sidebar />
      <div className="ap-dash-main">
        <div className="ap-main-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}

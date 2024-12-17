"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Inter } from "next/font/google";
import Header from "./common/header";
import Sidebar from "./common/sidebar";
import Footer from "./common/footer";
import "../styles/globals.css";
import "../styles/frontend.css";

const inter = Inter({ subsets: ["latin"] });

export default function FrontendLayout({ children }) { 
  document.title = "App Portal";
  return (
    <div className="ap-menu-layout">
      {/* --- Header & sidebar calling ---- */}
      <Header />
      <div className="ap-frontlayout-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12">
              {children}
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      {/* --- Header & sidebar calling ---- */}
      {/* --- footer calling ---- */}
      <Footer />
      {/* --- footer calling ---- */}
    </div>
  );
}

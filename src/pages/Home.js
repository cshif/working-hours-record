import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Projects />
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [exiting, setExiting] = useState(false);
  const navigate = useNavigate();

  const goPortfolio = (e) => {
    e.preventDefault();
    setExiting(true);
    setTimeout(() => navigate("/portfolio"), 600); // matches .page-blur transition
  };

  return (
    <main className={"home-hero d-flex align-items-center justify-content-center text-center" + (exiting ? " page-blur" : "")}>
      <div className="home-glass p-4 p-md-5">
        <h1 className="display-5 fw-bold text-white mb-3">Welcome to my Portfolio</h1>
        <p className="lead text-white-50 mb-4">Steephen L. Resurreccion. of C3A.</p>
        <a href="/portfolio" onClick={goPortfolio} className="btn btn-autumn btn-lg px-4">
          Enter Portfolio
        </a>
      </div>
    </main>
  );
}

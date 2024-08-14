import React, { useState } from "react";
import MainLogo from "./MainLogo";

const Navbar = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuthModal = () => {
    setAuthModalOpen(!isAuthModalOpen);
  };

  const switchAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "/api", label: "API" },
    { href: "/api#pricing", label: "Price" },
    { href: "/api#pricing", label: "Models" },
    { href: "", label: "Login / Sign Up", onClick: toggleAuthModal }
  ];


  return (
    <>
      <header className="flex justify-between items-center py-5 flex-wrap">
        <MainLogo />
        <nav className="flex items-center flex-wrap">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
              className="text-textPrimary dark:text-dark-textPrimary no-underline ml-5 font-light transition-colors duration-300 ease-in-out hover:text-accent dark:hover:text-dark-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div id="authModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleAuthModal}>
              ×
            </span>
            <h2 id="formTitle">{isLogin ? "Login" : "Sign Up"}</h2>
            <form id="authForm">
              <input type="email" id="email" placeholder="Email" required />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              {!isLogin && (
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              )}
              <button type="submit" id="submitButton">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <div
              className="switch-link"
              id="switchLink"
              onClick={switchAuthMode}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Login"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 text-center py-5 border-t border-white/10">
        <p>
          &copy; 2024 BookAI. All rights reserved.{" "}
          <br />
          <a className="text-textSecondary no-underline mx-2 transition-colors duration-300 ease-in-out hover:text-textPrimary" href="#privacy-policy">Privacy Policy</a> |{" "}
          <a className="text-textSecondary no-underline mx-2 transition-colors duration-300 ease-in-out hover:text-textPrimary" href="#terms-of-service">Terms of Service</a> |{" "}
          <a className="text-textSecondary no-underline mx-2 transition-colors duration-300 ease-in-out hover:text-textPrimary" href="#privacy-policy">Contact Us</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;

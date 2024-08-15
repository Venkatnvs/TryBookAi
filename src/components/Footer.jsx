import React from "react";

const FooterItem = ({ href, children }) => {
  return (
    <a
      href={href}
      className="
      text-md
      text-accent 
      no-underline 
      mx-2 
      transition-colors 
      duration-300 
      ease-in-out
      dark:text-[#e1e1e1d0]
      hover:text-[#e1e1e1d0]
      hover:dark:text-accent
      "
    >
      {children}
    </a>
  );
}

const Footer = () => {
  return (
    <>
      <footer className="mt-20 text-center py-5 border-t border-dark-primaryBg/10 dark:border-white/10 mb-5 lg:mb-0">
        <p
          className="text-md font-semibold"
        >
          &copy; 2024 BookAI. All rights reserved.{" "}
        </p>
        <p
          className="text-md mt-2"
        >
          <FooterItem href="#privacy-policy">Privacy Policy</FooterItem> |{" "}
          <FooterItem href="#terms-of-service">Terms of Service</FooterItem> |{" "}
          <FooterItem href="#privacy-policy">Contact Us</FooterItem>
        </p>
      </footer>
    </>
  );
};

export default Footer;

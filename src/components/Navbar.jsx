import React, { useState, useEffect } from "react";
import MainLogo from "./MainLogo";
import { Menu, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import ToogleTheme from "./ToogleTheme";
import MainAuthModel from "@/pages/Auth/MainAuthModel";
import { Button } from "./ui/button";

const AuthMenuItems = ({ setIsOpen, link }) => {
  return (
    <MainAuthModel>
      <Button
        className="inline-block py-2 px-2 bg-gradient-1 text-center text-white font-semibold rounded-sm transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-3px] hover:bg-[#4338ca]"
      >
        {link.label}
      </Button>
    </MainAuthModel>
  );
};

const MobileMenu = ({ links, setIsOpen }) => {
  return (
    <Card className="lg:hidden bg-white dark:bg-[#ffffff0d] shadow-lg mt-0 mb-0 pt-0">
      <CardContent>
        <div className="flex flex-col">
          {links.map((link, index) => (
            <div key={index} className="mt-2">
              {
                link?.ctmStyles === "auth-button" ? <AuthMenuItems setIsOpen={setIsOpen} link={link} />
                : (
                  <a
                    href={link.href}
                    onClick={
                      link.onClick
                        ? (e) => {
                            e.preventDefault();
                            link.onClick();
                            setIsOpen(false);
                          }
                        : () => setIsOpen(false)
                    }
                    className={"text-textPrimary dark:text-dark-textPrimary no-underline font-light transition-colors duration-300 ease-in-out hover:text-accent py-2"}
                  >
                    {link.label}
                  </a>
                )
              }
              {index < links.length - 1 && <Separator />}{" "}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const MainMenu = ({ links, setIsOpen }) => {
  return (
    <div className="hidden lg:flex lg:flex-row lg:ml-auto lg:items-center ml-10 space-x-5">
      {links.map((link, index) => (
        <>
          {
            link?.ctmStyles === "auth-button" ? <AuthMenuItems setIsOpen={setIsOpen} link={link} />
            : (
              <a
                key={index}
                href={link.href}
                onClick={
                  link.onClick
                    ? (e) => {
                        e.preventDefault();
                        link.onClick();
                        setIsOpen(false);
                      }
                    : () => setIsOpen(false)
                }
                className={"text-textPrimary dark:text-dark-textPrimary no-underline font-light transition-colors duration-300 ease-in-out hover:text-accent py-2"}
              >
                {link.label}
              </a>
            )
          }
        </>
      ))}
      <ToogleTheme />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "/api", label: "API" },
    { href: "/api#pricing", label: "Price" },
    { href: "/api#pricing", label: "Models" },
    {
      href: "",
      label: "Login / Sign Up",
      ctmStyles: "auth-button",
    },
  ];

  return (
    <header className="lg:flex items-center justify-between py-5 px-2 sm:px-1 lg:px-2">
      <div className="flex items-center justify-between lg:w-1/4 w-full">
        <MainLogo />
        <div className="lg:hidden flex items-center space-x-4">
          <ToogleTheme />
          <button
            type="button"
            className="text-textPrimary dark:text-dark-textPrimary"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto w-full lg:w-auto lg:block mt-4 lg:mt-0`}
      >
        {isOpen && <MobileMenu links={links} setIsOpen={setIsOpen} />}
        <MainMenu links={links} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Navbar;

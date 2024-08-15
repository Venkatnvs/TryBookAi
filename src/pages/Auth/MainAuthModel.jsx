import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const MainAuthModel = ({ children }) => {
  const [formType, setFormType] = useState("login");
  const [open, setOpen] = useState(false);

  const handleFormType = () => {
    setFormType(
      formType === "login" ? "signup" : "login"
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!open)
          }}
        >
          {children}
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] bg-primaryBg dark:bg-accent">
        <DialogHeader>
          <DialogTitle>
            {
              formType === "login" ? "Sign in to your account" : "Create an account"
            }
          </DialogTitle>
          <DialogDescription className="text-sm dark:text-[#e1e1e1d0]">
            {
              formType === "login" ? "Enter your details below to continue" : "Enter your details below to create an account"
            }
          </DialogDescription>
        </DialogHeader>
        {formType === "login" ? (
          <LoginForm handleFormType={handleFormType} />
        ) : (
          <SignUpForm handleFormType={handleFormType} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MainAuthModel;

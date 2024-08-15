import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const SignUpForm = ({ handleFormType }) => {
  return (
    <form>
      <div className="space-y-3">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="terms"
              className="rounded-sm text-accent"
              required
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a
                href="#"
                className="text-accent dark:text-dark-primaryBg hover:underline"
              >
                Terms and Conditions
              </a>
            </Label>
          </div>
        </div>
      </div>
      <DialogFooter className={"my-5"}>
        <Button className="bg-gradient-1 text-white w-full">Sign Up</Button>
      </DialogFooter>
      <div className="text-sm font-medium text-center">
        Already have an account?{" "}
        <a
          href="#"
          onClick={handleFormType}
          className="text-accent font-normal dark:text-dark-primaryBg hover:underline"
        >
          Sign In
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;

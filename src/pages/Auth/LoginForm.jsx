import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = ({ handleFormType }) => {
  return (
    <form>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" required />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <Input id="remember" type="checkbox" value="" required />
            </div>
            <Label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </Label>
          </div>
          <a
            href="#"
            className="text-sm text-accent dark:text-dark-primaryBg hover:underline"
          >
            Lost Password?
          </a>
        </div>
      </div>
      <DialogFooter className={"my-5"}>
        <Button className="bg-gradient-1 text-white w-full">Sign In</Button>
      </DialogFooter>
      <div className="text-sm font-medium text-center">
        Not registered?{" "}
        <a
          href="#"
          className="text-accent font-normal dark:text-dark-primaryBg hover:underline"
          onClick={handleFormType}
        >
          Create account
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

"use client";
import { AuthLayout } from "../../../components/auth/auth-layout";
import { Button } from "../../../components/auth/button";
import { Field, Label } from "../../../components/auth/fieldset";
import { Heading } from "../../../components/auth/heading";
import { Input } from "../../../components/auth/input";
import { Text } from "../../../components/auth/text";
import { Logo } from "../../../components/auth/logo";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePass() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <AuthLayout>
      <form action="#" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
        <div className="flex">
          <Logo className="h-25" />
          <div className="flex flex-col ml-4 justify-center items-center">
            <Heading>
              WEB ABSENCE
              <div className="text-sm">for Mugiwara Pirate Presence</div>
            </Heading>
          </div>
        </div>
        <hr />
        <div className="h-2 font-bold">
          <center>Change Password</center>
        </div>
        <Field>
          <Label>Token</Label>
          <Input type="text" name="token" placeholder="xxxx-xxxx-xxxx-xxxx" className="placeholder:italic placeholder:text-sm" />
        </Field>
        <Field>
          <Label>New Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="new_password"
              placeholder={showPassword ? "new password" : "••••••••"}
              className="pr-10 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
            />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" tabIndex={-1}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </Field>
        <Field>
          <Label>Confirm Password</Label>
          <div className="relative">
            <Input
              type={showConPassword ? "text" : "password"}
              name="con_password"
              placeholder={showConPassword ? "confirm password" : "••••••••"}
              className="pr-10 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
            />
            <button type="button" onClick={() => setShowConPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" tabIndex={-1}>
              {showConPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </Field>

        <Button type="submit" className="w-full">
          Confirm
        </Button>
        <Text>
          <small>After change the password, you have to log in again</small>
        </Text>
      </form>
    </AuthLayout>
  );
}

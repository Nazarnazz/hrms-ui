"use client";
import { AuthLayout } from "../../components/auth/auth-layout";
import { Button } from "../../components/auth/button";
import { Field, Label } from "../../components/auth/fieldset";
import { Heading } from "../../components/auth/heading";
import { Input } from "../../components/auth/input";
import { Text } from "../../components/auth/text";
import { Logo } from "../../components/auth/logo";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <>
      <AuthLayout>
        <form action="#" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-6">
          <div className="grid grid-cols-3">
            <Logo className="ml-2 h-25" />
            <div className="flex flex-col ml-6 justify-center items-center col-span-2">
              <Heading>
                HRMS
                <div className="text-sm">Human Resource Management System</div>
              </Heading>
            </div>
          </div>
          <hr />
          <div className="h-6 font-bold">
            <center>Register</center>
          </div>
          <Field>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Email" className="ps-6 placeholder:italic placeholder:text-sm" />
          </Field>
          <Field>
            <Label>First Name</Label>
            <Input type="text" name="first_name" placeholder="First Name" className="ps-6 placeholder:italic placeholder:text-sm" />
          </Field>
          <Field>
            <Label>Last Name</Label>
            <Input type="text" name="last_name" placeholder="Last Name" className="ps-6 placeholder:italic placeholder:text-sm" />
          </Field>
          <Field>
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={showPassword ? "password" : "••••••••"}
                className="ps-6 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
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
                placeholder={showConPassword ? "password" : "••••••••"}
                className="ps-6 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
              />
              <button type="button" onClick={() => setShowConPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" tabIndex={-1}>
                {showConPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </Field>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Text>
            <small>Sign Up require approval from admin. Please be patient.</small>
          </Text>
        </form>
      </AuthLayout>

      {/* mobile */}
      <div className="sm:hidden flex items-center justify-center sm:p-4">
        <div className="px-6 my-4 w-full max-w-md">
          <form action="#" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-6">
            <div className="grid grid-cols-3">
              <Logo className="ml-2 h-25" />
              <div className="flex flex-col ml-6 justify-center items-center col-span-2">
                <Heading>
                  HRMS
                  <div className="text-sm">Human Resource Management System</div>
                </Heading>
              </div>
            </div>
            <hr />
            <div className="h-6 font-bold">
              <center>Register</center>
            </div>
            <Field>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Email" className="ps-6 placeholder:italic placeholder:text-sm" />
            </Field>
            <Field>
              <Label>First Name</Label>
              <Input type="text" name="first_name" placeholder="First Name" className="ps-6 placeholder:italic placeholder:text-sm" />
            </Field>
            <Field>
              <Label>Last Name</Label>
              <Input type="text" name="last_name" placeholder="Last Name" className="ps-6 placeholder:italic placeholder:text-sm" />
            </Field>
            <Field>
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={showPassword ? "password" : "••••••••"}
                  className="ps-6 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
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
                  placeholder={showConPassword ? "password" : "••••••••"}
                  className="ps-6 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
                />
                <button type="button" onClick={() => setShowConPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" tabIndex={-1}>
                  {showConPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </Field>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Text>
              <small>Sign Up require approval from admin. Please be patient.</small>
            </Text>
          </form>
        </div>
      </div>
    </>
  );
}

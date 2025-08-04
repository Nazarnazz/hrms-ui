"use client";
import { AuthLayout } from "./components/auth/auth-layout";
import { Button } from "./components/auth/button";
import { Field } from "./components/auth/fieldset";
import { Heading } from "./components/auth/heading";
import { Input } from "./components/auth/input";
import { Strong, Text, TextLink } from "./components/auth/text";
import { Logo } from "./components/auth/logo";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
//tes_tambah
export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    try {
      const res = await fetch("https://pslg211r-8000.asse.devtunnels.ms/api/auth/login/", {
        method: "POST",
        body: formData,
        headers: {
          accept: "*/*",
        },
      });

      const data = await res.json();

      // Redirect jika login berhasil
      if (res.ok) {
        router.push("/admin/dashboard"); // atau "/user/dashboard" tergantung user
      } else {
        alert("Login gagal: " + (data.detail || "Unknown error"));
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Terjadi kesalahan saat login.");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <form onSubmit={handleLogin} method="POST" className="grid w-full max-w-sm grid-cols-1 gap-7">
        <div className="grid grid-cols-3">
          <Logo className="ml-2 h-25" />
          <div className="flex flex-col ml-6 justify-center items-center col-span-2">
            <Heading>
              <div className="flex flex-col">
                <div>HRMS</div>
                <div className="text-sm">Human Resource Management System</div>
              </div>
            </Heading>
          </div>
        </div>
        <hr />
        <div className="h-6 font-bold ">
          <center>Login</center>
        </div>
        <Field>
          <Input type="text" name="id" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} placeholder="Username" className="placeholder:italic ps-6 placeholder:text-sm" />
        </Field>
        <Field>
          <div className="relative">
            <Input
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={"Password"}
              className="ps-6 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
            />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" tabIndex={-1}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </Field>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Text>
          Don’t have an account?{" "}
          <TextLink href="/auth/signup">
            <Strong>Register</Strong>
          </TextLink>
        </Text>
      </form>
      <Text>
        <TextLink href="/admin/dashboard">Dashboard</TextLink>
        <br />
        <TextLink href="/user/dashboard">Dashboard</TextLink>
      </Text>
    </AuthLayout>
  );
}

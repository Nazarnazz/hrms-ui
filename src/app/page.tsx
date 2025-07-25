"use client";
import { AuthLayout } from "./components/auth/auth-layout";
import { Button } from "./components/auth/button";
import { Checkbox, CheckboxField } from "./components/auth/checkbox";
import { Field, Label } from "./components/auth/fieldset";
import { Heading } from "./components/auth/heading";
import { Input } from "./components/auth/input";
import { Strong, Text, TextLink } from "./components/auth/text";
import { Logo } from "./components/auth/logo";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

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
      <form onSubmit={handleLogin} method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
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
        <div className="h-2 font-bold ">
          <center>Login</center>
        </div>
        <Field>
          <Label>ID Nakama</Label>
          <Input type="text" name="id" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="12345678" className="placeholder:italic placeholder:text-sm" />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="luffy@mugiwara.co" className="placeholder:italic placeholder:text-sm" />
        </Field>
        <Field>
          <Label>Password</Label>
          <div className="relative">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={showPassword ? "password" : "••••••••"}
              className="pr-10 placeholder:italic placeholder:text-sm" // ruang kanan untuk ikon mata
            />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" tabIndex={-1}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </Field>
        <div className="flex items-center justify-between">
          <CheckboxField>
            <Checkbox name="remember" />
            <Label>Remember me</Label>
          </CheckboxField>
          <Text>
            <TextLink href="/auth/auth-forgot">
              <Strong>Forgot password?</Strong>
            </TextLink>
          </Text>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Text>
          Don’t have an account?{" "}
          <TextLink href="/auth/signup">
            <Strong>Sign up</Strong>
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

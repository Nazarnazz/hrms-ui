"use client";
import { AuthLayout } from "../../components/auth/auth-layout";
import { Button } from "../../components/auth/button";
import { Field, Label } from "../../components/auth/fieldset";
import { Heading } from "../../components/auth/heading";
import { Input } from "../../components/auth/input";
import { Text } from "../../components/auth/text";
import { Logo } from "../../components/auth/logo";

export default function Forgot() {
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
          <center>Forgot Password</center>
        </div>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="luffy@mugiwara.co" className="placeholder:italic placeholder:text-sm" />
        </Field>

        <Button type="submit" className="w-full">
          Send
        </Button>
        <Text>
          <small>Token will be send in to your email</small>
        </Text>
      </form>
    </AuthLayout>
  );
}

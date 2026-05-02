"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Router import korun
import { toast } from "react-toastify"; // Toast import korun
import Link from "next/link"; // Link import korun

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      // callbackURL bad diye amra programmatically handle korbo
    });

    if (error) {
     
      toast.error(error.message || "Login failed! Please check your credentials.");
    } else {
      
      toast.success("Login Successful!");
      router.push("/"); 
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    //   callbackURL: "/", 
      
    });
    console.log(handleGoogleSignIn,"handleGoogleSignIn")
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5 shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-3">
          <Button type="submit" color="primary" className="w-full">
            <Check />
            Login
          </Button>
          
          <div className="flex items-center gap-2 my-2">
            <div className="h-[1px] bg-gray-200 flex-grow"></div>
            <p className="text-gray-500 text-sm">OR</p>
            <div className="h-[1px] bg-gray-200 flex-grow"></div>
          </div>

          <Button onClick={handleGoogleSignIn} variant="secondary" className="w-full">
            <FaGoogle /> Login In With Google
          </Button>
        </div>
      </Form>

      {/* 🔗 Requirement: Register Link */}
      <p className="text-center mt-6 text-sm">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline font-semibold">
          Register here
        </Link>
      </p>
    </Card>
  );
}


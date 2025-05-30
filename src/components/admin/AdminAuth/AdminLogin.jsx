"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { loginUser } from "@/lib/api/admin/authApi";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toast } from "../customAdminUI/Toast/Toast";
import Link from "next/link";
import { useAuth } from "@/app/context/authContext";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores are allowed"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character"),
});


const AdminLogin = () => {
  const router = useRouter();
  const {auth, setAuth} = useAuth();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  
  const { mutateAsync, isPending, error } = useMutation({
   
    mutationFn: loginUser,
    onSuccess: ({data}) => {
      setAuth(data);
      router.push("/admin/blog-post/addItem");
      reset();
    },
    onError: (error) => {
      Toast({ message: error.error, type: "error", duration: 5000 });
    },
  });



  const onSubmit = async (data) => {
      await mutateAsync(data);
  }



  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-50">
      <div className="bg-white flex flex-col shadow-lg rounded-lg px-6 space-y-6 py-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isPending || isSubmitting}
            >
              {isPending || isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </Form>
  <p className=" text-center ">Or</p>
        <Link
          href="/admin/register"
          className=" grid place-content-center hover:underline  w-full text-sm text-blue-600 hover:text-blue-500"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;

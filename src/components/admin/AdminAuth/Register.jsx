"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { registerUser } from "@/lib/api/admin/authApi"; 
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

const registerSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores are allowed"),
      
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
  
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be less than 32 characters")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character"),
  });
  

const AdminRegister = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/admin/Posts/addItem");
      reset();
    },
    onError: (error) => {
      Toast({ message: error.message, type: "error", duration: 5000 });
    },
  });

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      console.log("Register error:", err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white flex flex-col shadow-lg rounded-lg px-6 space-y-6 py-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Admin Sign Up</h2>
          <p className="text-gray-600 mt-2">Create your admin account</p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Create a password"
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
              {isPending || isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </Form>

        <p className="text-center">Already have an account?</p>
        <Link
          href="/admin"
          className="grid place-content-center hover:underline w-full text-sm text-blue-600 hover:text-blue-500"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default AdminRegister;

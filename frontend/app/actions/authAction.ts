"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import { LoginFormData } from "@/components/LoginForm";
import { RegisterFormData } from "@/components/RegisterForm";

const loginSubmit = async (formData: LoginFormData) => {
  const cookiesStore = await cookies()

  const res = await fetch("http://localhost:4000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    const data = await res.json();
    cookiesStore.set("token", data.token, { httpOnly: true })
    redirect("/")

  } else {
    const errorData = await res.json();
    console.error("Login failed:", errorData);
  }

};
 

const registerSubmit = async (formData: RegisterFormData) => {
  const res = await fetch("http://localhost:4000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, isAdmin: false }),
  });

  if (res.ok) {
    const data = await res.json();
    
    if (data.success) {
      await loginSubmit(formData)
    } else {
      return data
    }
  } else {
    return await res.json()
  }
}



export { loginSubmit, registerSubmit }
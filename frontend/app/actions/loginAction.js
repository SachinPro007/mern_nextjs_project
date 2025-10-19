"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers"

export const loginSubmit = async (formData) => {
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
    cookiesStore.set("token", data.token, {httpOnly: true})
    redirect("/")

  } else {
    const errorData = await res.json();
    console.error("Login failed:", errorData);
  }


};
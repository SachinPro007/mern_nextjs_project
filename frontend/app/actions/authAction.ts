"use server";

import { redirect } from "next/navigation";
import { LoginFormData } from "@/components/LoginForm";
import { RegisterFormData } from "@/components/RegisterForm";
import { cookies, headers } from "next/headers";

const loginSubmit = async (formData: LoginFormData) => {
  const cookiesStore = cookies();
  const res = await fetch("http://backend:4000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.status === 200) {
    const data = await res.json();
    (await cookiesStore).set("token", data.token);

    redirect("/");
  } else {
    const errorData = await res.json();
    console.error("Login failed:", errorData);
    return errorData;
  }
};

const registerSubmit = async (formData: RegisterFormData) => {
  const res = await fetch("http://backend:4000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, isAdmin: false }),
  });

  if (res.ok) {
    const data = await res.json();

    if (data.success) {
      await loginSubmit(formData);
    } else {
      return data;
    }
  } else {
    return await res.json();
  }
};

const getUser = async () => {
  const headersCookies = (await headers()).get("cookie");

  try {
    const res = await fetch("http://backend:4000/api/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(headersCookies && { cookie: headersCookies }),
      },
      credentials: "include",
    });
    if (res.status === 200) {
      const user = await res.json();
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};

const logoutUser = async () => {
  const cookiesStore = cookies();
  (await cookiesStore).delete("token");
  return true;
};

export { loginSubmit, registerSubmit, getUser, logoutUser };

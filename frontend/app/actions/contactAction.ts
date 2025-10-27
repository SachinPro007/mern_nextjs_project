import { ContactFormData } from "@/components/ContactForm";

const contactSubmit = async (formData: ContactFormData) => {
  const res = await fetch("http://localhost:4000/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  return data;
};

export { contactSubmit };

"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactFormFromQuery() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product")?.slice(0, 120);
  const isUrgent = searchParams.get("type") === "urgent" || searchParams.has("urgent");
  const defaultProduct = productParam ?? (isUrgent ? "Urgent Requirement" : "");
  return <ContactForm defaultProduct={defaultProduct} />;
}

"use client";

import { useEffect } from "react";
import BlogDetail from "../../../components/BlogDetail"; // Assurez-vous que le chemin est correct
import { useRouter } from "next/navigation"; // Utilisez next/navigation

export default function BlogDetailPage() {
  const router = useRouter(); // Ne l'utilisez pas dans la fonction de retour

  return <BlogDetail />;
}

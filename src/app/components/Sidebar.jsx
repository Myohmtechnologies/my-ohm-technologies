"use client";

import '../../styles/dashboard.css';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Briefcase, FileText, CheckCircle, Archive } from "lucide-react";

const Sidebar = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch("/api/get-submissions-count");
        if (response.ok) {
          const data = await response.json();
          setCounts(data);
        } else {
          console.error("Erreur lors de la récupération des comptes.");
        }
      } catch (error) {
        console.error("Erreur lors de la requête API :", error);
      }
    };

    fetchCounts();
  }, []);

  const stages = [
    { name: "Nouveau contact", icon: <User className="w-5 h-5" />, link: "/dashboard/nouveau-contact" },
    { name: "RDV Client", icon: <Calendar className="w-5 h-5" />, link: "/dashboard/rdv-fixe" },
    { name: "Visite technique", icon: <Briefcase className="w-5 h-5" />, link: "/dashboard/visite-technique" },
    { name: "Démarche administrative", icon: <FileText className="w-5 h-5" />, link: "/dashboard/demarche-administrative" },
    { name: "Pose", icon: <CheckCircle className="w-5 h-5" />, link: "/dashboard/pose" },
    { name: "CONSUEL", icon: <FileText className="w-5 h-5" />, link: "/dashboard/consuel" },
    { name: "Raccordement EDF", icon: <CheckCircle className="w-5 h-5" />, link: "/dashboard/raccordement-edf" },
    { name: "Suivis", icon: <FileText className="w-5 h-5" />, link: "/dashboard/suivis" },
    { name: "Archive", icon: <Archive className="w-5 h-5" />, link: "/dashboard/archive" },
  ];

  return (
    <div className="h-screen w-64 bg-white text-black flex flex-col p-4">
      <div className="flex items-center justify-center mb-6">
        <Image src="/images/logo1.png" alt="Logo" width={200} height={100} />
      </div>
      <ul className="space-y-4">
        {stages.map((stage, index) => (
          <li key={index}>
            <Link
              href={stage.link}
              className="flex justify-between items-center text-black  p-3 rounded-lg  transition"
            >
              <div className="flex items-center gap-2">
                {stage.icon}
                <span className="text-lg">{stage.name}</span>
              </div>
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {counts[stage.name] || 0}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

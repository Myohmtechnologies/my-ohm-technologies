import '../../styles/dashboard.css';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Briefcase, FileText, CheckCircle, Archive, Loader } from "lucide-react";
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  const fetchCounts = async () => {
    try {
      setError(null);
      const response = await fetch("/api/get-submissions-count");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      setCounts(data);
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts();
    // Rafraîchir les compteurs toutes les 30 secondes
    const interval = setInterval(fetchCounts, 30000);
    return () => clearInterval(interval);
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
        <Link href="/dashboard">
          <Image src="/images/logo1.png" alt="Logo" width={200} height={100} />
        </Link>
      </div>
      
      {error && (
        <div className="text-red-500 text-sm mb-4 text-center">
          Erreur de chargement des compteurs
        </div>
      )}

      <ul className="space-y-4">
        {stages.map((stage, index) => {
          const isActive = pathname === stage.link;
          return (
            <li key={index}>
              <Link
                href={stage.link}
                className={`flex justify-between items-center p-3 rounded-lg transition
                  ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-2">
                  {stage.icon}
                  <span className="text-sm font-medium">{stage.name}</span>
                </div>
                <div className="min-w-[2rem] text-center">
                  {loading ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    <span className={`px-2 py-1 rounded-full text-sm font-medium
                      ${counts[stage.name] > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                      {counts[stage.name] || 0}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

// src/app/components/Sidebar.jsx
"use client"; // Assurez-vous que c'est un composant client

import { useRouter } from 'next/navigation'; // Vérifie que tu utilises le bon import

const Sidebar = ({ setCurrentSection }) => {
  const router = useRouter();

  const handleClick = (section) => {
    setCurrentSection(section);
    // Naviguer en fonction de la section choisie
    if (section === 'blogs') {
      router.push('/dashboard/blogs'); // Chemin vers la page des blogs
    } else if (section === 'leads') {
      router.push('/dashboard/leads'); // Chemin vers la page des leads
    }
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => handleClick('blogs')}>Blogs</li>
        <li onClick={() => handleClick('leads')}>Leads</li>
      </ul>
    </div>
  );
};

export default Sidebar;

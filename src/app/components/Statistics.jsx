import React from "react";

const Statistics = ({ submissions }) => {
  const totalLeads = submissions.length;
  const contacted = submissions.filter((sub) => sub.status === "Contacté").length;
  const signedDeals = submissions.filter((sub) => sub.status === "Devis signé").length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="p-4 bg-blue-100 text-blue-800 rounded shadow">
        <h3 className="text-lg font-semibold">Total Leads</h3>
        <p className="text-3xl font-bold">{totalLeads}</p>
      </div>
      <div className="p-4 bg-green-100 text-green-800 rounded shadow">
        <h3 className="text-lg font-semibold">Contactés</h3>
        <p className="text-3xl font-bold">{contacted}</p>
      </div>
      <div className="p-4 bg-purple-100 text-purple-800 rounded shadow">
        <h3 className="text-lg font-semibold">Devis signés</h3>
        <p className="text-3xl font-bold">{signedDeals}</p>
      </div>
    </div>
  );
};

export default Statistics;

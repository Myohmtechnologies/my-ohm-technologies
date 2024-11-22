"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Typography, Button, TextField, Box } from "@mui/material";

const LeadDetailPage = () => {
  const { id } = useParams(); // ID du lead
  const [lead, setLead] = useState(null); // Données du lead
  const [error, setError] = useState(null);
  const [newNote, setNewNote] = useState(""); // Note en cours d'ajout

  // Récupérer les données du lead
  useEffect(() => {
    if (!id) {
      setError("ID du lead non fourni.");
      return;
    }

    const fetchLead = async () => {
      try {
        const response = await fetch(`/api/get-submissions/${id}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du lead.");
        }
        const data = await response.json();
        setLead(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLead();
  }, [id]);

  // Ajouter une note
  const handleAddNote = async () => {
    try {
      const response = await fetch(`/api/get-submissions/${id}/add-note`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newNote,
          author: "Utilisateur1", // Remplacez par l'utilisateur actuel
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const updatedLead = await response.json();
        setLead(updatedLead); // Mettre à jour les données du lead
        setNewNote(""); // Réinitialiser la note
      } else {
        console.error("Erreur lors de l'ajout de la note.");
        alert("Impossible d'ajouter la note. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  if (error) {
    return <div className="text-red-500 p-6">{error}</div>;
  }

  if (!lead) {
    return <div className="p-6">Chargement...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Informations générales */}
      <Card>
        <CardHeader title="Fiche Client" />
        <CardContent>
          <Typography variant="h6">Informations générales</Typography>
          <Typography><strong>Nom:</strong> {lead.name}</Typography>
          <Typography><strong>Email:</strong> {lead.email}</Typography>
          <Typography><strong>Téléphone:</strong> {lead.phone}</Typography>
          <Typography><strong>Adresse: </strong>{lead.residentialStatus}</Typography>
          <Typography><strong>Statut:</strong> {lead.status}</Typography>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card>
        <CardHeader title="Notes" />
        <CardContent>
          {lead.notes?.length ? (
            lead.notes.map((note, index) => (
              <Typography key={index} className="mb-2">
                <strong>{note.date} ({note.author}):</strong> {note.content}
              </Typography>
            ))
          ) : (
            <Typography>Aucune note disponible.</Typography>
          )}
          <Box className="mt-4">
            <TextField
              label="Ajouter une note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              multiline
              rows={3}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddNote}
              className="mt-2"
            >
              Ajouter
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadDetailPage;

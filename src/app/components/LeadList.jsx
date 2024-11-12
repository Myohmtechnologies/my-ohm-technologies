// src/app/components/LeadList.jsx

import React from 'react';
import { Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardHeader } from '@mui/material';

const LeadList = ({ submissions }) => {
  // Calcul des statistiques pour le tableau de bord
  const toContact = submissions.filter(submission => submission.status === "À contacter").length;
  const contacted = submissions.filter(submission => submission.status === "Contacté").length;
  const scheduled = submissions.filter(submission => submission.status === "RDV programmé").length;

  return (
    <div className="lead-list-container">
      {/* Tableau de bord des prospects */}
      <div className="dashboard">
        <Card className="dashboard-card" style={{ backgroundColor: '#FFFBEA' }}>
          <CardContent>
            <Typography variant="h6">À contacter</Typography>
            <Typography variant="h4">{toContact}</Typography>
          </CardContent>
        </Card>
        <Card className="dashboard-card" style={{ backgroundColor: '#E7F3FF' }}>
          <CardContent>
            <Typography variant="h6">Contactés</Typography>
            <Typography variant="h4">{contacted}</Typography>
          </CardContent>
        </Card>
        <Card className="dashboard-card" style={{ backgroundColor: '#EAF8EA' }}>
          <CardContent>
            <Typography variant="h6">RDV programmés</Typography>
            <Typography variant="h4">{scheduled}</Typography>
          </CardContent>
        </Card>
      </div>

      {/* Liste des prospects */}
      <Card className="lead-card">
        <CardHeader title="Liste des Prospects" className="lead-card-header" />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Téléphone</TableCell>
                <TableCell>Statut résidentiel</TableCell>
                <TableCell>Montant de la facture d'énergie</TableCell>
                <TableCell>Date de la demande</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission._id}>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.phone}</TableCell>
                  <TableCell>{submission.residentialStatus}</TableCell>
                  <TableCell>{submission.energyBill}</TableCell>
                  <TableCell>{new Date(submission.timestamp).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" size="small">Suivi</Button>
                    <Button variant="outlined" color="secondary" size="small" style={{ marginLeft: '8px' }}>RDV</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default LeadList;

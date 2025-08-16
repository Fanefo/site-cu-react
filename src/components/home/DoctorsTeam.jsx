import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import './DoctorsTeam.css';

const doctors = [
  {
    name: 'Dr. Maria Popescu',
    specialty: 'Fizioterapeut Principal',
    experience: '15 ani experiență',
    image: '/doctor-maria.jpg',
    description: 'Specializată în recuperare post-traumatică și terapie manuală'
  },
  {
    name: 'Dr. Alexandru Ionescu',
    specialty: 'Kinetoterapeut',
    experience: '10 ani experiență',
    image: '/doctor-alex.jpg',
    description: 'Expert în reabilitare sportivă și terapie ocupațională'
  },
  {
    name: 'Dr. Elena Dumitrescu',
    specialty: 'Fizioterapeut',
    experience: '8 ani experiență',
    image: '/doctor-elena.jpg',
    description: 'Specializată în terapie vertebrală și recuperare neurologică'
  }
];

const DoctorsTeam = () => {
  return (
    <Box className="doctors-section">
      <Container>
        <Typography variant="h2" className="section-title">
          Echipa Noastră
        </Typography>
        <Typography variant="h5" className="section-subtitle">
          Profesioniști dedicați sănătății dumneavoastră
        </Typography>
        <Grid container spacing={4} className="doctors-grid">
          {doctors.map((doctor, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="doctor-card">
                <CardMedia
                  component="img"
                  height="300"
                  image={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                />
                <CardContent className="doctor-info">
                  <Typography variant="h5" component="h3">
                    {doctor.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {doctor.specialty}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {doctor.experience}
                  </Typography>
                  <Typography variant="body1" className="doctor-description">
                    {doctor.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DoctorsTeam;

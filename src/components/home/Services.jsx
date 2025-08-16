import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Services.css';

const services = [
  {
    id: 'tehnica-mckenzie',
    title: 'Tehnica McKenzie',
    description: 'Metodă specializată în tratamentul durerilor de spate și gât',
    icon: <LocalHospitalIcon fontSize="large" />,
    image: '/service-mckenzie.jpg',
    fullDescription: 'Tehnica McKenzie este o metodă de evaluare și tratament pentru durerile coloanei vertebrale.'
  },
  {
    id: 'tehnica-mulligan',
    title: 'Tehnica Mulligan',
    description: 'Mobilizare cu mișcare pentru articulații și coloană vertebrală',
    icon: <SportsGymnasticsIcon fontSize="large" />,
    image: '/service-mulligan.jpg',
    fullDescription: 'O abordare unică în terapia manuală care combină mobilizarea pasivă cu mișcarea activă.'
  },
  {
    id: 'kinesio-taping',
    title: 'Kinesio Taping',
    description: 'Tehnică terapeutică cu bandă elastică pentru suport și recuperare',
    icon: <AccessibilityNewIcon fontSize="large" />,
    image: '/service-taping.jpg',
    fullDescription: 'Metodă modernă de bandajare elastică ce ajută la recuperarea musculară și articulară.'
  },
  {
    id: 'terapie-trigger',
    title: 'Terapia Punctelor Trigger',
    description: 'Tratamentul punctelor dureroase din mușchi',
    icon: <FitnessCenterIcon fontSize="large" />,
    image: '/service-trigger.jpg',
    fullDescription: 'Tehnică specializată pentru relaxarea punctelor dureroase din țesutul muscular.'
  },
  {
    id: 'facilitare-neuromusculara',
    title: 'Facilitare Neuromusculară Proprioceptivă',
    description: 'Tehnică avansată pentru îmbunătățirea funcției musculare',
    icon: <HealthAndSafetyIcon fontSize="large" />,
    image: '/service-pnf.jpg',
    fullDescription: 'Metodă complexă ce utilizează patterne specifice de mișcare pentru îmbunătățirea forței și coordonării.'
  },
  {
    id: 'terapie-cyriax',
    title: 'Terapia Cyriax',
    description: 'Tehnici de mobilizare și masaj transversal profund',
    icon: <MedicalServicesIcon fontSize="large" />,
    image: '/service-cyriax.jpg',
    fullDescription: 'Tehnică specializată de masaj transversal profund pentru tratamentul leziunilor tendinoase și ligamentare.'
  }
];

const Services = () => {
  return (
    <Box className="services-section">
      <Container>
        <Typography variant="h2" className="section-title">
          Serviciile Noastre
        </Typography>
        <Typography variant="h5" className="section-subtitle">
          Oferim o gamă completă de servicii de recuperare medicală
        </Typography>
        <Grid container spacing={4} className="services-grid">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="service-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <CardContent className="service-content">
                  <Box className="service-icon">
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/serviciu/${service.id}`}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="learn-more-btn"
                  >
                    Află mai multe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

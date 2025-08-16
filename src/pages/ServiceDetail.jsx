import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import './ServiceDetail.css';

const serviceDetails = {
  'tehnica-mckenzie': {
    title: 'Tehnica McKenzie',
    description: `Tehnica McKenzie este o metodă de diagnostic și tratament dezvoltată de fizioterapeutul Robin McKenzie. 
    Această tehnică se concentrează în special pe tratamentul durerilor de spate și gât.`,
    benefits: [
      'Reducerea durerii și a inflamației',
      'Îmbunătățirea posturii',
      'Prevenirea recurenței durerilor',
      'Exerciții ce pot fi efectuate și acasă'
    ],
    indications: [
      'Dureri lombare',
      'Hernie de disc',
      'Dureri cervicale',
      'Probleme posturale'
    ],
    process: [
      'Evaluare inițială detaliată',
      'Identificarea direcției preferențiale de mișcare',
      'Exerciții specifice personalizate',
      'Program de exerciții pentru acasă'
    ]
  },
  'tehnica-mulligan': {
    title: 'Tehnica Mulligan',
    description: `Conceptul Mulligan reprezintă o abordare inovatoare în terapia manuală, dezvoltată de Brian Mulligan. 
    Se bazează pe aplicarea unor mobilizări susținute combinate cu mișcări active ale pacientului.`,
    benefits: [
      'Reducerea imediată a durerii',
      'Îmbunătățirea mobilității articulare',
      'Corectarea disfuncțiilor biomecanice',
      'Rezultate rapide și de durată'
    ],
    indications: [
      'Entorse și luxații',
      'Dureri articulare',
      'Limitări de mobilitate',
      'Dureri cronice'
    ],
    process: [
      'Evaluare biomecanică',
      'Aplicarea tehnicilor de mobilizare',
      'Exerciții active asistate',
      'Monitorizarea progresului'
    ]
  }
  // ... Adaugă detalii pentru celelalte tehnici
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <Container>
        <Typography variant="h4">Serviciul nu a fost găsit</Typography>
      </Container>
    );
  }

  return (
    <PageTransition>
      <Box className="service-detail-page">
        <Container>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              component={Link}
              to="/#services"
              startIcon={<ArrowBackIcon />}
              className="back-button"
              variant="outlined"
            >
              Înapoi la Servicii
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="h2" className="page-title">
              {service.title}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper elevation={3} className="detail-section">
                  <Typography variant="h5" className="section-title">
                    Despre Tehnică
                  </Typography>
                  <Typography variant="body1" className="description">
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper elevation={3} className="detail-section">
                  <Typography variant="h5" className="section-title">
                    Beneficii
                  </Typography>
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper elevation={3} className="detail-section">
                  <Typography variant="h5" className="section-title">
                    Indicații
                  </Typography>
                  <ul className="indications-list">
                    {service.indications.map((indication, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        {indication}
                      </motion.li>
                    ))}
                  </ul>
                </Paper>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper elevation={3} className="detail-section">
                  <Typography variant="h5" className="section-title">
                    Procesul de Tratament
                  </Typography>
                  <ol className="process-list">
                    {service.process.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default ServiceDetail;

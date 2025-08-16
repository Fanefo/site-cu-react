import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const therapies = [
  {
    id: 'tehnica-mckenzie',
    title: 'Tehnica McKenzie',
    description: 'O metodă specializată pentru tratamentul durerilor de spate și gât.',
    image: '/images/mckenzie.jpg'
  },
  {
    id: 'tehnica-mulligan',
    title: 'Tehnica Mulligan',
    description: 'Mobilizări susținute combinate cu mișcări active pentru ameliorarea durerii.',
    image: '/images/mulligan.jpg'
  },
  // Poți adăuga mai multe terapii aici
];

const TherapiesPage = () => {
  return (
    <Container className="page-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom 
          sx={{ 
            color: 'primary.main',
            textAlign: 'center',
            mb: 4
          }}>
          Terapiile Noastre
        </Typography>

        <Grid container spacing={4}>
          {therapies.map((therapy) => (
            <Grid item xs={12} md={6} key={therapy.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Paper
                  component={Link}
                  to={`/serviciu/${therapy.id}`}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      mb: 2,
                      backgroundColor: 'grey.200',
                      backgroundImage: `url(${therapy.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 1,
                    }}
                  />
                  <Typography variant="h5" component="h2" gutterBottom>
                    {therapy.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {therapy.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default TherapiesPage;

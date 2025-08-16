import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-title">
              FizioMed Clinic
            </Typography>
            <Typography variant="body2" className="footer-description">
              Clinică specializată în fizioterapie și recuperare medicală, 
              oferind servicii de înaltă calitate pentru pacienții noștri.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-title">
              Program de Lucru
            </Typography>
            <Typography variant="body2">
              Luni - Vineri: 08:00 - 20:00
            </Typography>
            <Typography variant="body2">
              Sâmbătă: 09:00 - 14:00
            </Typography>
            <Typography variant="body2">
              Duminică: Închis
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-title">
              Contact
            </Typography>
            <Box className="contact-item">
              <PhoneIcon />
              <Typography variant="body2">
                +40 123 456 789
              </Typography>
            </Box>
            <Box className="contact-item">
              <EmailIcon />
              <Typography variant="body2">
                contact@fiziomed.ro
              </Typography>
            </Box>
            <Box className="contact-item">
              <LocationOnIcon />
              <Typography variant="body2">
                Strada Exemplu, Nr. 123, București
              </Typography>
            </Box>
            <Box className="social-icons">
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box className="footer-bottom">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} FizioMed Clinic. Toate drepturile rezervate.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

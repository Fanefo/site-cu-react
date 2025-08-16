import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './Location.css';

const Location = () => {
  return (
    <Box className="location-section">
      <Container>
        <Typography variant="h2" className="section-title">
          Locația Noastră
        </Typography>
        <Typography variant="h5" className="section-subtitle">
          Vă așteptăm la clinica noastră
        </Typography>

        <Box className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8844343513366!2d26.102445776785493!3d44.42682307107402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4470ec4c11%3A0x812e2b2444f9cf7!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1692026000000!5m2!1sro!2sro"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>

        <Box className="location-info">
          <Typography variant="h6" className="location-title">
            Cum să ajungeți la noi
          </Typography>
          <Typography variant="body1" className="location-description">
            Clinica noastră este ușor accesibilă cu transportul public:
          </Typography>
          <ul className="location-details">
            <li>Metrou: Stația Universitate (5 minute de mers pe jos)</li>
            <li>Autobuz: Liniile 123, 124, 125 (stația Spitalul Colțea)</li>
            <li>Tramvai: Liniile 21, 16 (stația Piața Rosetti)</li>
          </ul>
          <Typography variant="body1" className="parking-info">
            Dispunem de parcare proprie pentru pacienții noștri.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Location;

import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  Snackbar,
  Alert
} from '@mui/material';
import './AppointmentForm.css';

const services = [
  'Consultație Inițială',
  'Fizioterapie Generală',
  'Recuperare Sportivă',
  'Terapie Manuală',
  'Kinetoterapie',
  'Electroterapie',
  'Recuperare Neurologică'
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici vom adăuga logica de trimitere a formularului către backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      severity: 'success',
      message: 'Programarea a fost trimisă cu succes! Vă vom contacta în curând.'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box className="appointment-section">
      <Container>
        <Typography variant="h2" className="section-title">
          Programează o Consultație
        </Typography>
        <Typography variant="h5" className="section-subtitle">
          Suntem aici să te ajutăm în procesul de recuperare
        </Typography>
        
        <Box className="form-container">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nume și Prenume"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Telefon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Serviciu Dorit"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {services.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Data Dorită"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mesaj (opțional)"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="submit-button"
                >
                  Trimite Programarea
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default AppointmentForm;

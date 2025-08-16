import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.css';

const faqs = [
  {
    question: 'Ce trebuie să aduc la prima ședință?',
    answer: 'La prima ședință este important să aduceți toate investigațiile medicale relevante (radiografii, RMN, etc.), precum și recomandările medicului. De asemenea, vă rugăm să aduceți un prosop și haine comode.'
  },
  {
    question: 'Cât durează o ședință de fizioterapie?',
    answer: 'O ședință standard durează aproximativ 45-60 de minute, în funcție de tipul de tratament și nevoile specifice ale pacientului.'
  },
  {
    question: 'Este necesară programare în prealabil?',
    answer: 'Da, este necesară programarea în prealabil pentru a vă putea oferi cea mai bună îngrijire și atenție. Puteți face programări prin formularul de pe site, telefonic sau prin email.'
  },
  {
    question: 'Lucrați cu casele de asigurări?',
    answer: 'Da, colaborăm cu mai multe case de asigurări de sănătate. Vă rugăm să ne contactați pentru detalii specifice despre asigurarea dumneavoastră.'
  },
  {
    question: 'Câte ședințe sunt necesare pentru recuperare?',
    answer: 'Numărul de ședințe necesare variază în funcție de afecțiune și de răspunsul individual la tratament. După evaluarea inițială, medicul vă va putea oferi un plan de tratament personalizat.'
  },
  {
    question: 'Ce metode de plată acceptați?',
    answer: 'Acceptăm plăți în numerar, cu cardul (toate tipurile de carduri) și prin transfer bancar pentru companii.'
  }
];

const FAQ = () => {
  return (
    <Box className="faq-section">
      <Container>
        <Typography variant="h2" className="section-title">
          Întrebări Frecvente
        </Typography>
        <Typography variant="h5" className="section-subtitle">
          Află mai multe despre serviciile noastre
        </Typography>

        <Box className="faq-container">
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" className="faq-question">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-answer">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;

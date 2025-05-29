import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontFamily: 'Playfair Display',
              color: '#1a1a1a',
              mb: 6,
            }}
          >
            Contacte-nos
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Playfair Display',
                  color: '#c0a080',
                  mb: 3,
                }}
              >
                Informações de Contacto
              </Typography>
              <Typography variant="body1" paragraph>
                Estamos localizados no coração de Friões, prontos para recebê-lo com o nosso
                ambiente acolhedor e serviço excecional.
              </Typography>
              <Typography variant="body1" paragraph>
                Morada: Rua Principal 123, Friões
              </Typography>
              <Typography variant="body1" paragraph>
                Telefone: +351 123 456 789
              </Typography>
              <Typography variant="body1" paragraph>
                Email: info@barnana.pt
              </Typography>
              <Typography variant="body1" paragraph>
                Horário de Funcionamento:
              </Typography>
              <Typography variant="body2" paragraph>
                Segunda a Quinta: 18:00 - 02:00
              </Typography>
              <Typography variant="body2" paragraph>
                Sexta e Sábado: 18:00 - 03:00
              </Typography>
              <Typography variant="body2" paragraph>
                Domingo: 18:00 - 01:00
              </Typography>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: '#f5f5f5',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Playfair Display',
                  color: '#c0a080',
                  mb: 3,
                }}
              >
                Envie-nos uma Mensagem
              </Typography>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mensagem"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: '#c0a080',
                  '&:hover': {
                    backgroundColor: '#a88c6c',
                  },
                }}
              >
                Enviar Mensagem
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 
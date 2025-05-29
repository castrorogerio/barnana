import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontFamily: 'Playfair Display', mb: 1 }}>
              Barnana
            </Typography>
            <Typography variant="body2">
              Rua Principal 123, Friões
            </Typography>
            <Typography variant="body2">
              +351 123 456 789
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Segue-nos nas redes sociais
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                aria-label="Facebook"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2">
              Horário de Funcionamento:
            </Typography>
            <Typography variant="body2">
              Segunda a Quinta: 18:00 - 02:00
            </Typography>
            <Typography variant="body2">
              Sexta e Sábado: 18:00 - 03:00
            </Typography>
            <Typography variant="body2">
              Domingo: 18:00 - 01:00
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Barnana. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
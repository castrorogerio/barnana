import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      component="main"
      role="main"
      aria-label="Home page"
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/barnana/barnana1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: { xs: '3rem', md: '4.5rem' },
              mb: 2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Barnana
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: 'Playfair Display',
              mb: 4,
              color: '#e6c9a8',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}
          >
            Um Bar Todo Espelhado em Friões
          </Typography>
          <Button
            component={RouterLink}
            to="/menu"
            variant="contained"
            size="large"
            aria-label="Explorar o nosso ementa"
            sx={{
              backgroundColor: '#e6c9a8',
              color: '#1a1a1a',
              '&:hover': {
                backgroundColor: '#d4b797',
              },
              '&:focus-visible': {
                outline: '3px solid #ffffff',
                outlineOffset: '2px',
              },
            }}
          >
            Explorar Menu
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 
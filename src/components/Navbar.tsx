import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(26, 26, 26, 0.9)' }}>
      <Toolbar>
        <Typography
          variant="h4"
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ flexGrow: 1, fontFamily: 'Playfair Display' }}
        >
          <RouterLink to="/" style={{ textDecoration: 'none', color: '#c0a080' }}>
            Barnana
          </RouterLink>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ '&:hover': { color: '#c0a080' } }}
          >
            Início
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            color="inherit"
            sx={{ '&:hover': { color: '#c0a080' } }}
          >
            Sobre
          </Button>
          <Button
            component={RouterLink}
            to="/menu"
            color="inherit"
            sx={{ '&:hover': { color: '#c0a080' } }}
          >
            Menu
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            color="inherit"
            sx={{ '&:hover': { color: '#c0a080' } }}
          >
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
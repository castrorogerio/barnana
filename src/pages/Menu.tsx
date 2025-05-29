import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Cocktails Especiais',
      items: [
        { name: 'Barnana Bliss', description: 'Rum, licor de banana, lima fresca, creme de coco', price: '12€' },
        { name: 'Pôr do Sol de Friões', description: 'Tequila, sumo de laranja fresco, grenadina, lima', price: '11€' },
        { name: 'Barnana Dourada', description: 'Whiskey, mel, limão, ginger beer', price: '13€' },
      ],
    },
    {
      title: 'Cocktails Clássicos',
      items: [
        { name: 'Old Fashioned', description: 'Bourbon, açúcar, bitters, casca de laranja', price: '10€' },
        { name: 'Negroni', description: 'Gin, Campari, vermute doce', price: '11€' },
        { name: 'Mojito', description: 'Rum branco, hortelã, lima, açúcar, água com gás', price: '9€' },
      ],
    },
    {
      title: 'Seleção de Vinhos',
      items: [
        { name: 'Vinho Tinto da Casa', description: 'Blend português, encorpado', price: '6€/copo' },
        { name: 'Vinho Branco da Casa', description: 'Fresco e refrescante', price: '6€/copo' },
        { name: 'Prosecco', description: 'Vinho espumante italiano', price: '7€/copo' },
      ],
    },
    {
      title: 'Petiscos Gourmet',
      items: [
        { name: 'Tábua de Queijos Artesanais', description: 'Seleção de queijos locais, frutos secos e mel', price: '15€' },
        { name: 'Prato de Presunto Ibérico', description: 'Presunto premium, azeitonas, pão', price: '18€' },
        { name: 'Batatas Trufadas', description: 'Batatas fritas com óleo de trufa e parmesão', price: '8€' },
      ],
    },
  ];

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
            A Nossa Ementa
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'white',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'Playfair Display',
                      color: '#c0a080',
                      mb: 3,
                      borderBottom: '2px solid #c0a080',
                      pb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>
                  {category.items.map((item, itemIndex) => (
                    <Box key={itemIndex} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="h6" sx={{ fontFamily: 'Playfair Display' }}>
                          {item.name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#c0a080' }}>
                          {item.price}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Menu; 
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
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
            A Nossa História
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              mb: 8,
            }}
          >
            <Box
              sx={{
                height: '400px',
                backgroundImage: 'url("/bar-interior.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
              }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Playfair Display',
                  color: '#c0a080',
                  mb: 3,
                }}
              >
                Bem-vindo ao Barnana
              </Typography>
              <Typography variant="body1" paragraph>
                Localizado no coração de Friões, o Barnana é um testemunho da elegância atemporal
                e sofisticação moderna. O nosso nome reflete o nosso compromisso em
                criar um espaço onde cada detalhe é cuidadosamente considerado e perfeitamente executado.
              </Typography>
              <Typography variant="body1" paragraph>
                Fundado em 2020, o nosso bar rapidamente se tornou um destino querido para locais e visitantes.
                As paredes espelhadas e a iluminação cuidadosamente curada criam uma atmosfera de espaço
                infinito e possibilidades sem fim, enquanto os nossos mixologistas especializados preparam
                bebidas que são visualmente deslumbrantes e deliciosamente memoráveis.
              </Typography>
              <Typography variant="body1" paragraph>
                No Barnana, acreditamos que cada visita deve ser uma experiência para recordar. Desde
                a nossa cuidadosamente selecionada carta de vinhos até aos nossos cocktails exclusivos,
                cada elemento foi escolhido para criar momentos de puro prazer e conexão.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontFamily: 'Playfair Display',
                color: '#1a1a1a',
                mb: 4,
              }}
            >
              Os Nossos Valores
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {[
                {
                  title: 'Excelência',
                  description: 'Esforçamo-nos pela perfeição em cada bebida que servimos e em cada experiência que criamos.',
                },
                {
                  title: 'Inovação',
                  description: 'Exploramos constantemente novos sabores e técnicas para surpreender e encantar os nossos clientes.',
                },
                {
                  title: 'Comunidade',
                  description: 'Orgulhamo-nos de fazer parte da vibrante cena social e do património cultural de Friões.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 2,
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Playfair Display',
                        color: '#c0a080',
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {value.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 
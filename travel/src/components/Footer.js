import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function Footer() {
  return (
       <footer>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 5 }}
          bgcolor="text.secondary"
          color="white"
            >
          <Container maxWidth="med">
            <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Your Traveller &reg; {new Date().getFullYear()}
          </Box>
          </Container>
        </Box>
      </footer>
  );
}
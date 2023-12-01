import { Container, Typography, TextField, Button } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h2" gutterBottom>
          About Our Restaurant
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Bistrp Boss Restaurant
        </Typography>
        
        {/* Add any additional paragraphs as needed */}
        <TextField
          label="Search Items"
          variant="outlined"
          fullWidth
          style={{ marginTop: '1rem' }}
        />
        <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Search
        </Button>
      </Container>
    );
};

export default About;
import { Container, Typography, Card, CardContent } from "@mui/material";

export default function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Fruits & Légumes de Saison
      </Typography>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Pomme</Typography>
          <Typography variant="body2">
            Saison: Janvier, Février, Mars, Octobre, Novembre, Décembre
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Fraise</Typography>
          <Typography variant="body2">
            Saison: Avril, Mai, Juin, Juillet
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

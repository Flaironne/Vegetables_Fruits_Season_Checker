import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MonthSelector from "./components/MonthSelector";
import CategoryFilter from "./components/CategoryFilter";
import type { CategoryFilter as CategoryFilterType } from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { months, type Month } from "./data/month";

const monthNames: Month[] = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function getCurrentMonth(): Month {
  return monthNames[new Date().getMonth()];
}

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState<Month>(getCurrentMonth());
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>("Tous");

  const seasonalProducts = products.filter((p) => p.seasons.includes(selectedMonth));

  const filteredProducts =
    categoryFilter === "Tous"
      ? seasonalProducts
      : seasonalProducts.filter((p) => p.category === categoryFilter);

  const counts = {
    tous: seasonalProducts.length,
    fruits: seasonalProducts.filter((p) => p.category === "Fruit").length,
    legumes: seasonalProducts.filter((p) => p.category === "Légume").length,
  };

  const productWord = filteredProducts.length > 1 ? "produits" : "produit";

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f0faf4" }}>
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #52b788 100%)",
          color: "white",
          py: { xs: 3, md: 5 },
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ fontSize: { xs: "1.6rem", sm: "2.125rem" }, letterSpacing: "-0.5px" }}
        >
          🌿 Fruits &amp; Légumes de Saison
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ opacity: 0.85, mt: 0.75, fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          Mangez local, mangez de saison — chaque mois en France
        </Typography>
      </Box>

      {/* Month selector */}
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          py: 1.5,
          px: 1,
        }}
      >
        <MonthSelector
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
          months={months}
        />
      </Box>

      {/* Category filter (sticky) */}
      <CategoryFilter
        selected={categoryFilter}
        onChange={setCategoryFilter}
        counts={counts}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 } }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontStyle: "italic" }}
        >
          {filteredProducts.length} {productWord} de saison en {selectedMonth}
        </Typography>

        {filteredProducts.length > 0 ? (
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            {filteredProducts.map((p) => (
              <Grid key={p.id} size={{ xs: 6, sm: 4, md: 3 }}>
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: { xs: 6, sm: 10 } }}>
            <Typography fontSize="4rem" role="img" aria-label="Pousse">
              🌱
            </Typography>
            <Typography variant="h6" color="text.secondary" mt={1} fontWeight={600}>
              Aucun produit dans cette catégorie ce mois-ci
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Essayez un autre filtre ou un autre mois
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

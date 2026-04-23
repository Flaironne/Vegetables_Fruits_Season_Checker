import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isFruit = product.category === "Fruit";

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          background: isFruit
            ? "linear-gradient(135deg, #ff9a56, #ffb347)"
            : "linear-gradient(135deg, #52b788, #74c69d)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          fontSize: "3.5rem",
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {product.emoji}
      </Box>

      <CardContent
        sx={{
          pt: 1.5,
          pb: "12px !important",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={700}
          noWrap
          title={product.name}
          sx={{ color: "#1b4332", lineHeight: 1.3 }}
        >
          {product.name}
        </Typography>
        <Chip
          label={product.category}
          size="small"
          sx={{
            alignSelf: "flex-start",
            backgroundColor: isFruit ? "#fff3e0" : "#e8f5e9",
            color: isFruit ? "#e65100" : "#2e7d32",
            fontWeight: 600,
            fontSize: "0.7rem",
          }}
        />
      </CardContent>
    </Card>
  );
}

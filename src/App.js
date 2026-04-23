import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MonthSelector from "./components/MonthSelector";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { months } from "./data/month";
const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];
function getCurrentMonth() {
    return monthNames[new Date().getMonth()];
}
export default function App() {
    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
    const [categoryFilter, setCategoryFilter] = useState("Tous");
    const seasonalProducts = products.filter((p) => p.seasons.includes(selectedMonth));
    const filteredProducts = categoryFilter === "Tous"
        ? seasonalProducts
        : seasonalProducts.filter((p) => p.category === categoryFilter);
    const counts = {
        tous: seasonalProducts.length,
        fruits: seasonalProducts.filter((p) => p.category === "Fruit").length,
        legumes: seasonalProducts.filter((p) => p.category === "Légume").length,
    };
    const productWord = filteredProducts.length > 1 ? "produits" : "produit";
    return (_jsxs(Box, { sx: { minHeight: "100vh", backgroundColor: "#f0faf4" }, children: [_jsxs(Box, { sx: {
                    background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #52b788 100%)",
                    color: "white",
                    py: { xs: 3, md: 5 },
                    px: 2,
                    textAlign: "center",
                }, children: [_jsx(Typography, { variant: "h4", fontWeight: 800, sx: { fontSize: { xs: "1.6rem", sm: "2.125rem" }, letterSpacing: "-0.5px" }, children: "\uD83C\uDF3F Fruits & L\u00E9gumes de Saison" }), _jsx(Typography, { variant: "subtitle1", sx: { opacity: 0.85, mt: 0.75, fontSize: { xs: "0.875rem", sm: "1rem" } }, children: "Mangez local, mangez de saison \u2014 chaque mois en France" })] }), _jsx(Box, { sx: {
                    backgroundColor: "white",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    py: 1.5,
                    px: 1,
                }, children: _jsx(MonthSelector, { selectedMonth: selectedMonth, onMonthChange: setSelectedMonth, months: months }) }), _jsx(CategoryFilter, { selected: categoryFilter, onChange: setCategoryFilter, counts: counts }), _jsxs(Container, { maxWidth: "lg", sx: { py: { xs: 2, sm: 3 } }, children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, fontStyle: "italic" }, children: [filteredProducts.length, " ", productWord, " de saison en ", selectedMonth] }), filteredProducts.length > 0 ? (_jsx(Grid, { container: true, spacing: { xs: 1.5, sm: 2 }, children: filteredProducts.map((p) => (_jsx(Grid, { size: { xs: 6, sm: 4, md: 3 }, children: _jsx(ProductCard, { product: p }) }, p.id))) })) : (_jsxs(Box, { sx: { textAlign: "center", py: { xs: 6, sm: 10 } }, children: [_jsx(Typography, { fontSize: "4rem", role: "img", "aria-label": "Pousse", children: "\uD83C\uDF31" }), _jsx(Typography, { variant: "h6", color: "text.secondary", mt: 1, fontWeight: 600, children: "Aucun produit dans cette cat\u00E9gorie ce mois-ci" }), _jsx(Typography, { variant: "body2", color: "text.secondary", mt: 0.5, children: "Essayez un autre filtre ou un autre mois" })] }))] })] }));
}

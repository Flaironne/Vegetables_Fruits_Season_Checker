import { Box, Paper, Tab, Tabs } from "@mui/material";

export type CategoryFilter = "Tous" | "Fruit" | "Légume";

type Props = {
  selected: CategoryFilter;
  onChange: (filter: CategoryFilter) => void;
  counts: { tous: number; fruits: number; legumes: number };
};

export default function CategoryFilter({ selected, onChange, counts }: Props) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <Paper elevation={0}>
        <Tabs
          value={selected}
          onChange={(_, value: CategoryFilter) => onChange(value)}
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#2d6a4f" },
            "& .MuiTab-root": { color: "#555", fontWeight: 500 },
            "& .Mui-selected": { color: "#2d6a4f !important", fontWeight: 700 },
          }}
        >
          <Tab label={`Tous (${counts.tous})`} value="Tous" />
          <Tab label={`Fruits (${counts.fruits})`} value="Fruit" />
          <Tab label={`Légumes (${counts.legumes})`} value="Légume" />
        </Tabs>
      </Paper>
    </Box>
  );
}

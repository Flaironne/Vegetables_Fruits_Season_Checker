import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Paper, Tab, Tabs } from "@mui/material";
export default function CategoryFilter({ selected, onChange, counts }) {
    return (_jsx(Box, { sx: {
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "white",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }, children: _jsx(Paper, { elevation: 0, children: _jsxs(Tabs, { value: selected, onChange: (_, value) => onChange(value), variant: "fullWidth", sx: {
                    "& .MuiTabs-indicator": { backgroundColor: "#2d6a4f" },
                    "& .MuiTab-root": { color: "#555", fontWeight: 500 },
                    "& .Mui-selected": { color: "#2d6a4f !important", fontWeight: 700 },
                }, children: [_jsx(Tab, { label: `Tous (${counts.tous})`, value: "Tous" }), _jsx(Tab, { label: `Fruits (${counts.fruits})`, value: "Fruit" }), _jsx(Tab, { label: `Légumes (${counts.legumes})`, value: "L\u00E9gume" })] }) }) }));
}

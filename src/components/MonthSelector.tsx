import { useRef, useEffect } from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import type { Month } from "../data/month";

type Props = {
  selectedMonth: Month;
  onMonthChange: (month: Month) => void;
  months: Month[];
};

const monthAbbreviations: Record<Month, string> = {
  Janvier: "Jan", Février: "Fév", Mars: "Mar", Avril: "Avr",
  Mai: "Mai", Juin: "Jun", Juillet: "Jul", Août: "Aoû",
  Septembre: "Sep", Octobre: "Oct", Novembre: "Nov", Décembre: "Déc",
};

export default function MonthSelector({ selectedMonth, onMonthChange, months }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const activeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedMonth]);

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 0.75,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        WebkitOverflowScrolling: "touch",
        px: 1,
      }}
    >
      {months.map((month) => {
        const isActive = month === selectedMonth;
        return (
          <Button
            key={month}
            ref={isActive ? activeRef : null}
            onClick={() => onMonthChange(month)}
            variant={isActive ? "contained" : "text"}
            size="small"
            sx={{
              minWidth: "max-content",
              minHeight: 44,
              borderRadius: "22px",
              px: { xs: 1.5, sm: 2 },
              py: 0.75,
              whiteSpace: "nowrap",
              flexShrink: 0,
              fontWeight: isActive ? 700 : 500,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              ...(isActive
                ? {
                    backgroundColor: "#2d6a4f",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#1b4332" },
                  }
                : {
                    color: "#2d6a4f",
                    "&:hover": { backgroundColor: "#e8f5e9" },
                  }),
            }}
          >
            {isMobile ? monthAbbreviations[month] : month}
          </Button>
        );
      })}
    </Box>
  );
}

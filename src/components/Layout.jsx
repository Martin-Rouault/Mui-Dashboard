import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Cards from "./Cards";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Cards />
        <Toolbar />
        <Typography variant="h6" sx={{ mb: 2 }}>
          Graphique (avec @mui/x-charts)
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 200,
            bgcolor: "#f5f5f5",
            borderRadius: 2,
            mb: 4,
          }}
        >
          {/* Placeholder for Chart Component */}
        </Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Dernières commandes
        </Typography>
        <Box sx={{ width: "100%", bgcolor: "#f5f5f5", borderRadius: 2 }}>
          {/* Placeholder for Table Component */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

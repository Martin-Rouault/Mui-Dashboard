import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";

const DashboardCard = ({ card }) => {
  if (!card) return null;

  const { icon, number, label } = card;
  return (
    <Card sx={{ width: "100%", mt: 5 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemIcon sx={{ mb: 1 }}>{icon}</ListItemIcon>
          <Box>
            <Typography variant="h6">{number}</Typography>
            <Typography variant="body2" color="textSecondary">
              {label}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

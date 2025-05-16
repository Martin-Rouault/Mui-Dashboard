import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AttachMoney, Group, Message } from "@mui/icons-material";
import DashboardCard from "./Card";
import { Box } from "@mui/material";

const Cards = () => {
  const cards = [
    { label: "Ventes", number: 1000, icon: <AttachMoney /> },
    { label: "Clients", number: 300, icon: <Group /> },
    { label: "Messages", number: 5, icon: <Message /> },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}>
      {cards.map((card, index) => (
        <DashboardCard key={index} card={card} />
      ))}
    </Box>
  );
};

export default Cards;

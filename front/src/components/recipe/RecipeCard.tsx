import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import paellaImage from "./paella.jpg";
import { grey } from "@mui/material/colors";

const Lchips = ["spaghetti", "tomatoes", "olive oil"];

export default function RecipeCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={paellaImage}
          alt="Paella dish"
        />
        <CardContent>
          <Stack direction="column" gap={1}>
            <Typography gutterBottom variant="h5" component="div">
              Paella Spaghetti
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1.5}
            >
              <Stack direction="row" gap={0.5}>
                <AccessTimeIcon fontSize="small" sx={{ color: grey[600] }} />
                <Typography variant="body1" color="text.secondary">
                  30 min
                </Typography>
              </Stack>

              <Stack direction="row" gap={0.5}>
                <LocalDiningIcon fontSize="small" sx={{ color: grey[600] }} />
                <Typography variant="body1" color="text.secondary">
                  4 servings
                </Typography>
              </Stack>
            </Box>

            <Typography variant="body2" color="text.secondary">
              Recipe overview ...
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
              {Lchips.map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  color="secondary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

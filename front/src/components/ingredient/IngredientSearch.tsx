// Components
import { Button, TextField, Box } from "@mui/material";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Redux
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addIngredient } from "../../store/ingredientSlice";

// constants
import { MAX_INGREDIENTS, MIN_INPUT, MAX_INPUT } from "../../utils/constants";

function verifyInput(input: string) {
  const trimmed = input.trim();
  if (trimmed.length < MIN_INPUT) {
    return `Ingredient must be at least ${MIN_INPUT} characters`;
  }
  if (trimmed.length > MAX_INPUT) {
    return `Ingredient must be no more than ${MAX_INPUT} characters`;
  }
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(trimmed)) {
    return "Ingredient can only contain letters and spaces";
  }
  return "";
}

export default function IngredientSearch() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const validationError = verifyInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }
    dispatch(addIngredient(input.trim().toLowerCase()));
    setInput("");
    setError("");
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (error) {
      const validationError = verifyInput(value);
      setError(validationError);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
        flexWrap: "wrap",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ flexGrow: 1, minWidth: 200 }}
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <TextField
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          error={!!error}
          id="ingredient-input"
          label="Choose your ingredients"
          placeholder="Type an ingredient..."
          helperText={
            error || `You can add up to ${MAX_INGREDIENTS} ingredients`
          }
          fullWidth
          size="medium"
        />
      </Box>

      <Button
        aria-label="Add an ingredient"
        variant="outlined"
        size="medium"
        onClick={handleAdd}
        sx={{
          minWidth: 0,
          padding: { xs: 0.5, sm: 1.5 },
          height: { xs: 40, sm: 56 },
          borderColor: "primary.main",
        }}
      >
        <AddIcon />
      </Button>

      <Button
        aria-label="Search"
        variant="contained"
        size="medium"
        sx={{
          p: { xs: 0.5, sm: 1.5 },
          height: { xs: 40, sm: 56 },
        }}
      >
        SEARCH
      </Button>
    </Box>
  );
}

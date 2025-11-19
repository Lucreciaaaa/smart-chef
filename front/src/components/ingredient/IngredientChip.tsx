import { Chip, Stack } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeIngredient } from "../../store/ingredientSlice";

const IngredientChip = () => {
  const chips = useSelector((state: RootState) => state.ingredients.list);
  const dispatch = useDispatch();

  const handleDelete = (chip: string) => {
    dispatch(removeIngredient(chip));
  };

  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.5 }}>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="secondary"
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default IngredientChip;

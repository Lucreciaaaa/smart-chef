import { Box, Modal, Typography } from "@mui/material";

import { ScoredRecipe } from "../../../types/recipe";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  selectedRecipe: ScoredRecipe | null;
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

export default function RecipeModal({
  open,
  onClose,
  selectedRecipe,
}: ModalProps) {
  if (!selectedRecipe) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Title
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Blabla bla text
        </Typography>
      </Box>
    </Modal>
  );
}

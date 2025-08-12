import { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const EventModals = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (title.trim()) {
      onSave(title);
      setTitle("");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          minWidth: 300,
        }}
      >
        <Typography variant="h6" mb={2}>
          Enter Event Title
        </Typography>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event name"
        />
        <Box display="flex" justifyContent="flex-end" gap={1} mt={3}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const ConfirmDeleteModal = ({ open, onClose, onConfirm, eventTitle }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          minWidth: 300,
        }}
      >
        <Typography variant="h6" mb={2}>
          Delete Event
        </Typography>
        <Typography mb={3}>
          Are you sure you want to delete the event <b>{eventTitle}</b>?
        </Typography>
        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="error" variant="contained" onClick={onConfirm}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export { EventModals, ConfirmDeleteModal };

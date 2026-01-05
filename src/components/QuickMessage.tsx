import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const QuickMessage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setSuccess(true);
    setOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: "primary.main",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 4 }}
          >
            Have a Question? Leave Us a Message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                required
                value={formData.name}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                  },
                }}
              />
              <TextField
                name="email"
                label="Your Email"
                type="email"
                variant="outlined"
                required
                value={formData.email}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                  },
                }}
              />
              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                required
                value={formData.message}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "secondary.main",
                  color: "white",
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={success ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {success
              ? "Message sent successfully! We'll get back to you soon."
              : "Something went wrong. Please try again."}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default QuickMessage;

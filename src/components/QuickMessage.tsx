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
import { motion } from "framer-motion";

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
      component="section"
      aria-label="Quick message form"
      sx={{
        py: 6,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ textAlign: "center", mb: 4 }}
            >
              Have a Question? Leave Us a Message
            </Typography>
            <form onSubmit={handleSubmit} aria-label="Quick message form">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Your full name"
                  aria-describedby="quick-name-description"
                  id="quick-name"
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                    },
                  }}
                />
                <Box id="quick-name-description" sx={{ display: "none" }}>
                  Please enter your full name
                </Box>
                <TextField
                  name="email"
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Your email address"
                  aria-describedby="quick-email-description"
                  id="quick-email"
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                    },
                  }}
                />
                <Box id="quick-email-description" sx={{ display: "none" }}>
                  Please enter a valid email address
                </Box>
                <TextField
                  name="message"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your message"
                  aria-describedby="quick-message-description"
                  id="quick-message"
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                    },
                  }}
                />
                <Box id="quick-message-description" sx={{ display: "none" }}>
                  Please enter your message or question
                </Box>
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
        </motion.div>
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

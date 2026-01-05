import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
    setSuccess(true);
    setOpen(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 2 }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
        >
          Get in touch with our team - we're here to help
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Send us a Message
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
                  />
                  <TextField
                    name="email"
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <TextField
                    name="phone"
                    label="Phone Number"
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <TextField
                    name="message"
                    label="Your Message"
                    multiline
                    rows={5}
                    variant="outlined"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                  <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Office Address
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Via Manzoni 37
                      <br />
                      20121 Milano, Italy
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                  <PhoneIcon color="primary" sx={{ mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Phone
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      +39 02 1234 5678
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                  <EmailIcon color="primary" sx={{ mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      info@romegate.it
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<FacebookIcon />}
                      href="https://facebook.com"
                      target="_blank"
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<InstagramIcon />}
                      href="https://instagram.com"
                      target="_blank"
                    >
                      Instagram
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedInIcon />}
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
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

export default Contact;

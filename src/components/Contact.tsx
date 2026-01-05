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
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
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
      component="section"
      aria-label="Contact us"
      sx={{
        py: 8,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 2 }}
          >
            {t("contact.title")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
          >
            {t("contact.subtitle")}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h3"
                  component="h3"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  {t("contact.sendUsAMessage")}
                </Typography>
                <form onSubmit={handleSubmit} aria-label="Contact form">
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <TextField
                      name="name"
                      label={t("contact.form.yourName")}
                      variant="outlined"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      aria-label={t("contact.form.yourName")}
                      aria-describedby="name-description"
                      id="contact-name"
                    />
                    <Box id="name-description" sx={{ display: "none" }}>
                      {t("contact.form.nameDescription")}
                    </Box>
                    <TextField
                      name="email"
                      label={t("contact.form.yourEmail")}
                      type="email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      aria-label={t("contact.form.yourEmail")}
                      aria-describedby="email-description"
                      id="contact-email"
                    />
                    <Box id="email-description" sx={{ display: "none" }}>
                      {t("contact.form.emailDescription")}
                    </Box>
                    <TextField
                      name="phone"
                      label={t("contact.form.phoneNumber")}
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-label={t("contact.form.phoneNumber")}
                      aria-describedby="phone-description"
                      id="contact-phone"
                    />
                    <Box id="phone-description" sx={{ display: "none" }}>
                      {t("contact.form.phoneDescription")}
                    </Box>
                    <TextField
                      name="subject"
                      label={t("contact.form.subject")}
                      variant="outlined"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      aria-label={t("contact.form.subject")}
                      aria-describedby="subject-description"
                      id="contact-subject"
                    />
                    <Box id="subject-description" sx={{ display: "none" }}>
                      {t("contact.form.subjectDescription")}
                    </Box>
                    <TextField
                      name="message"
                      label={t("contact.form.yourMessage")}
                      multiline
                      rows={5}
                      variant="outlined"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      aria-label={t("contact.form.yourMessage")}
                      aria-describedby="message-description"
                      id="contact-message"
                    />
                    <Box id="message-description" sx={{ display: "none" }}>
                      {t("contact.form.messageDescription")}
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ py: 1.5 }}
                    >
                      {t("contact.form.sendMessage")}
                    </Button>
                  </Box>
                </form>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h3"
                  component="h3"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  {t("contact.contactInformation")}
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                    <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {t("contact.officeAddress")}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t("contact.addressLine1")}
                        <br />
                        {t("contact.addressLine2")}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                    <PhoneIcon color="primary" sx={{ mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {t("contact.phone")}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t("contact.phoneNumber")}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                    <EmailIcon color="primary" sx={{ mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {t("contact.email")}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t("contact.emailAddress")}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {t("contact.followUs")}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<FacebookIcon />}
                        href="https://facebook.com"
                        target="_blank"
                      >
                        {t("contact.facebook")}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<InstagramIcon />}
                        href="https://instagram.com"
                        target="_blank"
                      >
                        {t("contact.instagram")}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        href="https://linkedin.com"
                        target="_blank"
                      >
                        {t("contact.linkedin")}
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
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
              ? t("contact.successMessage")
              : t("contact.errorMessage")}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;

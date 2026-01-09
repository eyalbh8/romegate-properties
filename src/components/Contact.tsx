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
import { SvgIcon } from "@mui/material";

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ sx?: any }> = ({ sx }) => (
  <SvgIcon sx={sx} viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </SvgIcon>
);

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
                      <Button
                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        href="https://wa.me/35794202215?text=Hello!%20I%20am%20interested%20in%20your%20real%20estate%20services%20in%20Rome.%20I%20would%20like%20to%20learn%20more%20about%20available%20properties,%20student%20accommodation%20options,%20and%20your%20professional%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?%20Thank%20you!"
                        target="_blank"
                      >
                        WhatsApp
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
            {success ? t("contact.successMessage") : t("contact.errorMessage")}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;

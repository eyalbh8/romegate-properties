import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LeadCaptureSection: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+39");
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Lead capture:", { name, phone: `${countryCode} ${phone}`, email });
    setOpenSnackbar(true);
    setName("");
    setPhone("");
    setEmail("");
  };

  const checkmarks = [
    t("leadCapture.checkmark1"),
    t("leadCapture.checkmark2"),
    t("leadCapture.checkmark3"),
  ];

  return (
    <Box
      id="lead-capture"
      component="section"
      aria-label="Get the catalogue and offers"
      sx={{
        py: 8,
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: 520, margin: "0 auto" }}
            >
              <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 1 }}>
                {t("leadCapture.title")}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                {t("leadCapture.bonus")}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {t("leadCapture.subtitle")}
              </Typography>
              <form onSubmit={handleSubmit} aria-label="Get catalogue and offers">
                <Stack spacing={2} sx={{ mb: 3 }}>
                  <TextField
                    required
                    fullWidth
                    label={t("leadCapture.name")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "background.paper",
                      },
                    }}
                  />
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <FormControl sx={{ minWidth: 110 }}>
                      <InputLabel id="country-code-label">{t("leadCapture.countryCode")}</InputLabel>
                      <Select
                        labelId="country-code-label"
                        value={countryCode}
                        label={t("leadCapture.countryCode")}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        <MenuItem value="+39">+39 IT</MenuItem>
                        <MenuItem value="+44">+44 UK</MenuItem>
                        <MenuItem value="+33">+33 FR</MenuItem>
                        <MenuItem value="+49">+49 DE</MenuItem>
                        <MenuItem value="+34">+34 ES</MenuItem>
                        <MenuItem value="+1">+1 US</MenuItem>
                        <MenuItem value="+972">+972 IL</MenuItem>
                        <MenuItem value="+357">+357 CY</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      required
                      fullWidth
                      label={t("leadCapture.phone")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "background.paper",
                        },
                      }}
                    />
                  </Box>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label={t("leadCapture.email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "background.paper",
                      },
                    }}
                  />
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5, mb: 3 }}
                >
                  {t("leadCapture.cta")}
                </Button>
                <Stack spacing={1}>
                  {checkmarks.map((text, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon sx={{ color: "primary.main", fontSize: 22 }} />
                      <Typography variant="body2" color="text.secondary">
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          {t("leadCapture.successMessage")}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LeadCaptureSection;

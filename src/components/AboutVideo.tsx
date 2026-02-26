import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { aboutMedia } from "../data/aboutMedia";

export type VideoSectionKey = "about" | "home";

interface AboutVideoProps {
  /** i18n key prefix: "about" or "home". Default "about". */
  sectionKey?: VideoSectionKey;
}

const AboutVideo: React.FC<AboutVideoProps> = ({ sectionKey = "about" }) => {
  const { t } = useTranslation();
  const { embedUrl, videoSrc, posterImage } = aboutMedia.video;
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(embedUrl || videoSrc);

  return (
    <Box
      component="section"
      aria-label={t(`${sectionKey}.video.title`)}
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
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 3 }}
          >
            {t(`${sectionKey}.video.title`)}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ position: "relative" }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 4,
              aspectRatio: "16/9",
              maxHeight: 480,
              mx: "auto",
              bgcolor: "grey.200",
            }}
          >
            {embedUrl && playing ? (
              <Box
                component="iframe"
                src={embedUrl}
                title={t(`${sectionKey}.video.title`)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            ) : videoSrc && playing ? (
              <video
                controls
                autoPlay
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : hasVideo ? (
              <Box
                onClick={() => setPlaying(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setPlaying(true);
                }}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover .play-icon": { transform: "scale(1.1)" },
                }}
                aria-label={t(`${sectionKey}.video.title`)}
              >
                <Box
                  component="img"
                  src={posterImage}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="play-icon"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.2s",
                    boxShadow: 4,
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 48, ml: 0.5 }} />
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={posterImage}
                  alt=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    color: "white",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                  }}
                >
                  {t(`${sectionKey}.video.comingSoon`)}
                </Typography>
              </Box>
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 2 }}
          >
            {t(`${sectionKey}.video.caption`)}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutVideo;

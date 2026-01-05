import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = typeof window !== "undefined"
    ? window.location.href
    : "https://romegate.it",
  title = "Romegate Properties",
  description = "Your Gateway to Roman Properties",
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleShare = (platform: keyof typeof shareLinks): void => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };

  const handleNativeShare = async (): Promise<void> => {
    if (
      typeof navigator !== "undefined" &&
      "share" in navigator &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log("Share cancelled");
      }
    }
  };

  const hasNativeShare =
    typeof navigator !== "undefined" &&
    "share" in navigator &&
    typeof navigator.share === "function";

  return (
    <Box
      component="nav"
      aria-label="Social sharing options"
      sx={{ display: "flex", gap: 1, alignItems: "center" }}
    >
      {hasNativeShare && (
        <Tooltip title="Share">
          <IconButton
            onClick={handleNativeShare}
            aria-label="Share using native share dialog"
            color="primary"
            size="small"
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Share on Facebook">
        <IconButton
          onClick={() => handleShare("facebook")}
          aria-label="Share on Facebook"
          color="primary"
          size="small"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Twitter">
        <IconButton
          onClick={() => handleShare("twitter")}
          aria-label="Share on Twitter"
          color="primary"
          size="small"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on LinkedIn">
        <IconButton
          onClick={() => handleShare("linkedin")}
          aria-label="Share on LinkedIn"
          color="primary"
          size="small"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialShare;

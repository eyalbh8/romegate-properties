import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface ImageCarouselProps {
  images: string[];
  alt: string;
  /** Height as number (px), string, or MUI responsive object e.g. { xs: 300, md: 500 } */
  height?: number | string | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  showDots?: boolean;
  /** Optional caption e.g. "3 / 10" */
  showCaption?: boolean;
}

export default function ImageCarousel({
  images,
  alt,
  height,
  showDots = false,
  showCaption = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = images.length;
  const hasMultiple = count > 1;

  /** Next: advance by 1, wrap from last to first when keeping same arrow direction */
  const getNextIndex = (i: number) => (i + 1) % count;

  /** Prev: go back by 1, wrap from first to last when keeping same arrow direction */
  const getPrevIndex = (i: number) => (i - 1 + count) % count;

  const handlePrev = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((i) => getPrevIndex(i));
  };
  const handleNext = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((i) => getNextIndex(i));
  };

  if (count === 0) return null;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height ?? "auto",
        overflow: "hidden",
        borderRadius: 1,
      }}
      aria-roledescription="carousel"
      aria-label={alt}
    >
      <Box
        component="img"
        key={`${currentIndex}-${images[currentIndex]}`}
        src={images[currentIndex]}
        alt={alt}
        loading="lazy"
        sx={{
          width: "100%",
          height: height ?? "auto",
          objectFit: "cover",
          display: "block",
        }}
      />

      {hasMultiple && (
        <>
          <IconButton
            type="button"
            onPointerDown={handlePrev}
            aria-label="Previous image"
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.8)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
              zIndex: 1,
              touchAction: "manipulation",
            }}
            size="small"
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            type="button"
            onPointerDown={handleNext}
            aria-label="Next image"
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.8)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
              zIndex: 1,
              touchAction: "manipulation",
            }}
            size="small"
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}

      {showDots && hasMultiple && (
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 0.75,
            zIndex: 1,
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Go to image ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setCurrentIndex(i);
                }
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: i === currentIndex ? "primary.main" : "rgba(255,255,255,0.7)",
                cursor: "pointer",
                transition: "background-color 0.2s",
                touchAction: "manipulation",
              }}
            />
          ))}
        </Box>
      )}

      {showCaption && hasMultiple && (
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            right: 12,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor: "rgba(0,0,0,0.5)",
            color: "white",
            fontSize: "0.875rem",
            zIndex: 1,
          }}
        >
          {currentIndex + 1} / {count}
        </Box>
      )}
    </Box>
  );
}

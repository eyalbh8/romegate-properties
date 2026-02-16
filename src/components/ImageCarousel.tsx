import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const count = images.length;
  const hasMultiple = count > 1;

  const scrollPrev = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      emblaApi?.scrollPrev();
    },
    [emblaApi]
  );

  const scrollNext = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      emblaApi?.scrollNext();
    },
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (count === 0) return null;

  const heightSx =
    height === undefined
      ? {}
      : typeof height === "object" && height !== null && !("length" in height)
        ? { height }
        : { height: height as number | string };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 1,
        ...heightSx,
      }}
      aria-roledescription="carousel"
      aria-label={alt}
    >
      <Box ref={emblaRef} sx={{ overflow: "hidden", height: "100%" }}>
        <Box sx={{ display: "flex", touchAction: "pan-y pinch-zoom", height: "100%", ml: "-0.25rem" }}>
          {images.map((src, i) => (
            <Box
              key={`${i}-${src}`}
              sx={{
                flex: "0 0 100%",
                minWidth: 0,
                pl: "0.25rem",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={src}
                alt={alt}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 1,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {hasMultiple && (
        <>
          <IconButton
            type="button"
            onPointerDown={scrollPrev}
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
            onPointerDown={scrollNext}
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
              onPointerDown={scrollTo(i)}
              role="button"
              tabIndex={0}
              aria-label={`Go to image ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  emblaApi?.scrollTo(i);
                }
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: i === selectedIndex ? "primary.main" : "rgba(255,255,255,0.7)",
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
          {selectedIndex + 1} / {count}
        </Box>
      )}
    </Box>
  );
}

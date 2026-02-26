/**
 * About and Home page media assets.
 * Replace placeholder URLs with your own (e.g. /about/hero.jpg, /hero.jpg, /gallery-1.jpg).
 */

export const aboutMedia = {
  /** Hero background. Use videoSrc for video background, or only backgroundImage. */
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920",
    videoSrc:
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villas-videos/video1" as
        | string
        | undefined,
    /** Optional: poster when using video (e.g. /about-hero-poster.jpg) */
    posterImage: undefined as string | undefined,
  },
  /** Home page hero. When set, Hero.tsx shows this as background; otherwise gradient only. */
  home: {
    hero: {
      backgroundImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920",
      /** Use your own for reliable playback: add hero-video.mp4 to public/ and set to "/hero-video.mp4". */
      videoSrc:
        "https://vero-assets-public.s3.us-east-1.amazonaws.com/villas-videos/video1" as
          | string
          | undefined,
      posterImage: undefined as string | undefined,
    },
    /** Optional: different gallery images for home. If undefined, home reuses aboutMedia.gallery. */
    gallery: undefined as string[] | undefined,
  },
  /** Video section: embed URL (YouTube/Vimeo) or HTML5 video src. */
  video: {
    /** e.g. "https://www.youtube.com/embed/..." or "https://player.vimeo.com/video/..." */
    embedUrl: undefined as string | undefined,
    /** For HTML5 video: /about-intro.mp4 */
    videoSrc:
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villas-videos/video1" as
        | string
        | undefined,
    posterImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280",
  },
  /** Gallery images (3–4). Replace with /about/gallery-1.jpg etc. */
  gallery: [
    "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
    "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  ],
} as const;

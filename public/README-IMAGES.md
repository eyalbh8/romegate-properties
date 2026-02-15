# Social Media Images

## Current Status

The following SVG placeholder images have been created:
- `og-image.svg` - Open Graph image placeholder (1200x630px)
- `twitter-image.svg` - Twitter card image placeholder (1200x675px)
- `logo.svg` - Logo placeholder (512x512px)

## Required Action

**Convert these SVG files to the proper formats:**

### 1. Open Graph Image
- **Source:** `og-image.svg`
- **Target:** `og-image.jpg`
- **Dimensions:** 1200x630px
- **Format:** JPG
- **Quality:** 85-90%
- **Use:** Facebook, LinkedIn, WhatsApp previews

### 2. Twitter Card Image
- **Source:** `twitter-image.svg`
- **Target:** `twitter-image.jpg`
- **Dimensions:** 1200x675px
- **Format:** JPG
- **Quality:** 85-90%
- **Use:** Twitter card previews

### 3. Logo
- **Source:** `logo.svg`
- **Target:** `logo.png`
- **Dimensions:** 512x512px
- **Format:** PNG with transparency
- **Use:** Schema markup, favicon generation

## Conversion Tools

### Option 1: Online Tools
- [CloudConvert](https://cloudconvert.com/svg-to-jpg)
- [Convertio](https://convertio.co/svg-jpg/)

### Option 2: Command Line (ImageMagick)
```bash
# Install ImageMagick
brew install imagemagick  # macOS
# or: sudo apt-get install imagemagick  # Linux

# Convert images
convert og-image.svg -resize 1200x630 -quality 90 og-image.jpg
convert twitter-image.svg -resize 1200x675 -quality 90 twitter-image.jpg
convert logo.svg -resize 512x512 logo.png
```

### Option 3: Design Software
- Open SVG in Adobe Illustrator, Figma, or Sketch
- Export to required format and dimensions
- Optimize with TinyPNG or similar

## Design Recommendations

For production, consider:
1. **Professional branding** - Use actual brand colors, fonts, and design elements
2. **High-quality imagery** - Include photos of Rome properties
3. **Consistent style** - Maintain brand identity across all images
4. **Localization** - Create versions for different languages if needed
5. **Testing** - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Additional Image Assets Needed

Consider creating:
- Favicon (16x16, 32x32, 48x48)
- Apple touch icon (180x180)
- Android chrome icons (192x192, 512x512)
- Microsoft tile icon (270x270)

Use a favicon generator like [RealFaviconGenerator](https://realfavicongenerator.net/)

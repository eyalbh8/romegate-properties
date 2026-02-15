# Google Services Setup Guide

This guide will help you set up Google Search Console, Google Analytics 4, and Google My Business for optimal SEO and tracking.

## Prerequisites

- Admin access to the website
- Google account (use a business email if possible)
- Access to DNS settings or website files

## 1. Google Search Console Setup

### Step 1: Create Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" and enter `https://romegate.it`
4. Click "Continue"

### Step 2: Verify Ownership

#### Method A: HTML Tag (Recommended)
1. Google will provide an HTML meta tag
2. Copy the content attribute value (verification code)
3. Open `public/index.html`
4. Find the commented verification meta tag (line ~100)
5. Uncomment and replace `YOUR_GOOGLE_VERIFICATION_CODE` with your code:
   ```html
   <meta name="google-site-verification" content="YOUR_ACTUAL_CODE_HERE" />
   ```
6. Deploy the changes
7. Return to Search Console and click "Verify"

#### Method B: DNS Record
1. Add a TXT record to your DNS:
   - Name/Host: `@` or your domain
   - Value: The verification code provided by Google
2. Wait for DNS propagation (can take up to 48 hours)
3. Click "Verify" in Search Console

### Step 3: Submit Sitemap

1. In Search Console, go to "Sitemaps"
2. Add these sitemaps:
   - `https://romegate.it/sitemap.xml`
   - `https://romegate.it/sitemap-images.xml`
3. Click "Submit"

### Step 4: Configure Settings

1. **Set Preferred Domain**: Already configured via canonical tags
2. **Geographic Target**: Set to Italy (if option available)
3. **International Targeting**: Configure hreflang (already in place)

## 2. Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Admin" > "Create Property"
3. Property name: "Romegate Properties"
4. Timezone: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome"
5. Currency: EUR

### Step 2: Create Data Streams

1. Choose "Web" platform
2. Website URL: `https://romegate.it`
3. Stream name: "Romegate Main Site"
4. Copy your "Measurement ID" (format: G-XXXXXXXXXX)

### Step 3: Install Tracking Code

Create `src/utils/analytics.ts`:

```typescript
// Google Analytics 4
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your ID

// Initialize GA
export const initGA = () => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const logPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const logEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

Add to `public/index.html` (in `<head>`):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Step 4: Configure Events

Set up these recommended events:
- Property view
- Contact form submission
- Search queries
- Property favorites
- Email/phone clicks

## 3. Google My Business Setup

### Step 1: Create Business Profile

1. Go to [Google Business Profile](https://business.google.com)
2. Click "Manage now"
3. Enter business name: "Romegate Properties"
4. Choose business category: "Real estate agency"
5. Add location: Via del Corso 123, 00186 Rome, Italy
6. Add service area: Rome and surrounding areas

### Step 2: Verify Business

Google will send a postcard to your address with a verification code. This takes 5-14 days.

Alternatively:
- Phone verification (if available)
- Email verification (if available)
- Video verification (for some businesses)

### Step 3: Complete Profile

Add the following information:

**Basic Info:**
- Phone: +39 06 1234 5678
- Website: https://romegate.it
- Hours: Mon-Fri 9:00-18:00

**Description:**
```
Premier real estate agency specializing in buying, selling, and managing properties in Rome, Italy. We offer specialized services for Erasmus students and international clients, with multilingual support and deep local expertise. Find your perfect Roman property with Romegate.
```

**Services:**
- Property Sales
- Property Rentals
- Property Management
- Student Accommodation
- Real Estate Consulting

**Photos:**
- Logo
- Office exterior/interior
- Team photos
- Property photos
- Neighborhood images

**Attributes:**
- Wheelchair accessible
- Wi-Fi available
- Identifies as women-led (if applicable)
- Appointment required

### Step 4: Get Reviews

1. Share your review link with satisfied clients
2. Respond to all reviews (positive and negative)
3. Encourage reviews after successful transactions

## 4. Integration & Testing

### Test Search Console

1. Wait 24-48 hours after setup
2. Check "Coverage" report for indexed pages
3. Verify no errors in "Enhancements"
4. Test rich results using [Rich Results Test](https://search.google.com/test/rich-results)

### Test Analytics

1. Visit your website
2. Check Real-Time report in GA4
3. Verify your visit appears
4. Test event tracking (form submissions, clicks)

### Test GMB

1. Search "Romegate Properties Rome" in Google
2. Verify your business profile appears
3. Check all information is correct
4. Ensure photos display properly

## 5. Ongoing Maintenance

### Weekly Tasks
- Check Search Console for errors
- Review GA4 traffic reports
- Respond to GMB reviews

### Monthly Tasks
- Analyze search performance
- Review top pages and queries
- Update GMB posts
- Check mobile usability

### Quarterly Tasks
- Comprehensive SEO audit
- Update business information
- Review and update GMB photos
- Analyze conversion funnels

## 6. Key Metrics to Monitor

### Search Console
- Total clicks
- Total impressions
- Average CTR
- Average position
- Core Web Vitals

### Analytics
- Sessions
- Users
- Bounce rate
- Average session duration
- Conversion rate
- Top pages
- Traffic sources

### GMB
- Profile views
- Search queries
- Website clicks
- Direction requests
- Phone calls

## Troubleshooting

### Verification Failed
- Ensure meta tag is in `<head>` section
- Check for typos in verification code
- Clear browser cache and try again
- Wait 24 hours and retry

### Sitemap Not Indexed
- Verify sitemap is accessible (visit URL directly)
- Check for XML syntax errors
- Ensure robots.txt allows crawling
- Resubmit sitemap

### Analytics Not Tracking
- Check tracking code installation
- Verify Measurement ID is correct
- Disable ad blockers for testing
- Check browser console for errors

## Support Resources

- [Search Console Help](https://support.google.com/webmasters)
- [Analytics Help](https://support.google.com/analytics)
- [Business Profile Help](https://support.google.com/business)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

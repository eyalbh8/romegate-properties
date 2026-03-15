import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Chip,
  Avatar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { getBlogPostBySlug, getRelatedBlogPosts } from "../data/blogPosts";
const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "he";
  const baseUrl = "https://vero.it";

  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return <Navigate to={`/${currentLang}/blog`} replace />;
  }

  const title = t(post.titleKey);
  const excerpt = t(post.excerptKey);
  const content = t(post.contentKey, {
    defaultValue: excerpt,
  });

  const relatedPosts = getRelatedBlogPosts(post.id);

  const postFaqs =
    post.faqKeys?.map((key) => ({
      question: t(`${key}.question`),
      answer: t(`${key}.answer`),
    })) ?? [];

  const pageUrl = `${baseUrl}/${currentLang}/blog/${post.slug}`;
  const dateIso = new Date(post.date).toISOString();
  const langMap: Record<string, string> = {
    he: "Hebrew",
    it: "Italian",
    en: "English",
  };
  const inLanguage = langMap[currentLang] ?? "English";
  const readTimeMinutes = parseInt(post.readTime, 10) || 5;

  const graphNodes: object[] = [
    {
      "@type": "Blog",
      "@id": `${baseUrl}/#blog`,
      name: "Vero Properties",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: t("seo.description"),
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#author`,
      name: post.author,
      jobTitle: "Real Estate Expert",
      ...(post.authorBio && { description: post.authorBio }),
      worksFor: { "@id": `${baseUrl}/#blog` },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description: excerpt,
      image: post.image,
      inLanguage,
      url: pageUrl,
      datePublished: dateIso,
      dateModified: dateIso,
      wordCount: readTimeMinutes * 200,
      timeRequired: `PT${readTimeMinutes}M`,
      author: { "@id": `${baseUrl}/#author` },
      publisher: { "@id": `${baseUrl}/#blog` },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      keywords: post.tags.join(", "),
      about: post.tags.map((tag) => ({ "@type": "Thing", name: tag })),
    },
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: title,
      description: excerpt,
      inLanguage,
      datePublished: dateIso,
      dateModified: dateIso,
      isPartOf: { "@id": `${baseUrl}/#blog` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${baseUrl}/${currentLang}/blog`,
        },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ];

  if (postFaqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faqpage`,
      mainEntity: postFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  const graphSchema = { "@context": "https://schema.org", "@graph": graphNodes };

  return (
    <>
      <Helmet>
        <title>{title} | Vero Blog</title>
        <meta name="description" content={excerpt} />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/blog/${post.slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">
          {JSON.stringify(graphSchema)}
        </script>
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("blog.title"), href: `/${currentLang}/blog` },
          { label: title },
        ]}
      />

      <Box component="article" sx={{ py: 6, backgroundColor: "background.paper" }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label={post.category}
              color="primary"
              sx={{ mb: 3 }}
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mb: 4,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar>{post.author[0]}</Avatar>
                <Typography variant="body1">{post.author}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  {post.date}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  {post.readTime} {t("common.minRead")}
                </Typography>
              </Box>
            </Box>

            <Box
              component="img"
              src={post.image}
              alt={title}
              sx={{
                width: "100%",
                height: { xs: 250, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
                mb: 4,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.primary",
                "& p": { mb: 2 },
                "& table": { marginBottom: 2 },
              }}
              component="div"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {postFaqs.length > 0 && (
              <Box sx={{ mt: 6 }} id="faq" component="section" aria-label={t("faq.title")}>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="h4" component="h2" gutterBottom>
                  {t("faq.title")}
                </Typography>
                {postFaqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      mb: 1,
                      "&:before": { display: "none" },
                      boxShadow: 1,
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {post.authorBio && (
              <Box sx={{ mt: 6, p: 3, backgroundColor: "background.default", borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {t("blog.aboutAuthor")}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar sx={{ width: 60, height: 60 }}>{post.author[0]}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {post.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.authorBio}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {relatedPosts.length > 0 && (
              <Box sx={{ mt: 6 }}>
                <Divider sx={{ mb: 4 }} />
                <Typography variant="h4" component="h2" gutterBottom>
                  {t("blog.relatedPosts")}
                </Typography>
                <Grid container spacing={3}>
                  {relatedPosts.map((relPost) => (
                    <Grid item xs={12} sm={6} key={relPost.id}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="180"
                          image={relPost.image}
                          alt={t(relPost.titleKey)}
                        />
                        <CardContent>
                          <Chip
                            label={relPost.category}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                          <Typography variant="h6" gutterBottom>
                            {t(relPost.titleKey)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t(relPost.excerptKey)}
                          </Typography>
                          <Button
                            component={Link}
                            to={`/${currentLang}/blog/${relPost.slug}`}
                            fullWidth
                            sx={{ mt: 2 }}
                          >
                            {t("blog.readMore")}
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default BlogPostPage;

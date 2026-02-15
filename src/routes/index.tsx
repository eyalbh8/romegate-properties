import React from "react";
import { RouteObject } from "react-router-dom";

// Lazy load pages for better performance
const HomePage = React.lazy(() => import("../pages/HomePage"));
const PropertiesPage = React.lazy(() => import("../pages/PropertiesPage"));
const PropertyDetailPage = React.lazy(
  () => import("../pages/PropertyDetailPage")
);
const ServicesPage = React.lazy(() => import("../pages/ServicesPage"));
const ServiceDetailPage = React.lazy(
  () => import("../pages/ServiceDetailPage")
);
const BlogPage = React.lazy(() => import("../pages/BlogPage"));
const BlogPostPage = React.lazy(() => import("../pages/BlogPostPage"));
const NeighborhoodPage = React.lazy(
  () => import("../pages/NeighborhoodPage")
);
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

export const routes: RouteObject[] = [
  {
    path: "properties",
    element: <PropertiesPage />,
  },
  {
    path: "properties/:id/:slug",
    element: <PropertyDetailPage />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },
  {
    path: "services/:slug",
    element: <ServiceDetailPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "blog/:slug",
    element: <BlogPostPage />,
  },
  {
    path: "neighborhoods/:slug",
    element: <NeighborhoodPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;

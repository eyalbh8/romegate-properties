import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import {
  type Property,
  type PropertiesPayload,
  FALLBACK_PROPERTIES,
  getPropertyBySlug as getBySlug,
  getPropertyById as getById,
  getPropertiesByNeighborhood as getByNeighborhood,
  getPropertiesByType as getByType,
} from "../data/properties";

/** Translation function as provided by useTranslation().t */
type TranslateFn = (key: string, options?: { defaultValue?: string }) => string;

const PROPERTIES_URL =
  process.env.REACT_APP_PROPERTIES_URL || "/properties.json";

interface PropertiesContextValue {
  properties: Property[];
  loading: boolean;
  error: string | null;
  getPropertyBySlug: (slug: string) => Property | undefined;
  getPropertyById: (id: number) => Property | undefined;
  getPropertiesByNeighborhood: (neighborhood: string) => Property[];
  getPropertiesByType: (type: "rent" | "sale") => Property[];
}

const PropertiesContext = createContext<PropertiesContextValue | null>(null);

export function PropertiesProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(FALLBACK_PROPERTIES);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(PROPERTIES_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: PropertiesPayload = await res.json();
        const list = Array.isArray(data.properties) ? data.properties : [];
        if (!cancelled) {
          setProperties(list.length > 0 ? list : FALLBACK_PROPERTIES);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load properties");
          setProperties(FALLBACK_PROPERTIES);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const getPropertyBySlug = useCallback(
    (slug: string) => getBySlug(properties, slug),
    [properties]
  );
  const getPropertyById = useCallback(
    (id: number) => getById(properties, id),
    [properties]
  );
  const getPropertiesByNeighborhood = useCallback(
    (neighborhood: string) => getByNeighborhood(properties, neighborhood),
    [properties]
  );
  const getPropertiesByType = useCallback(
    (type: "rent" | "sale") => getByType(properties, type),
    [properties]
  );

  const value = useMemo<PropertiesContextValue>(
    () => ({
      properties,
      loading,
      error,
      getPropertyBySlug,
      getPropertyById,
      getPropertiesByNeighborhood,
      getPropertiesByType,
    }),
    [
      properties,
      loading,
      error,
      getPropertyBySlug,
      getPropertyById,
      getPropertiesByNeighborhood,
      getPropertiesByType,
    ]
  );

  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
}

export function useProperties(): PropertiesContextValue {
  const ctx = useContext(PropertiesContext);
  if (!ctx) {
    throw new Error("useProperties must be used within PropertiesProvider");
  }
  return ctx;
}

/**
 * Resolve display title for a property: use localized title from JSON if present,
 * otherwise t(titleKey).
 */
export function resolvePropertyTitle(
  property: Property,
  lang: string,
  t: TranslateFn
): string {
  if (property.title && typeof property.title[lang] === "string") {
    return property.title[lang];
  }
  if (property.titleKey) {
    return t(property.titleKey);
  }
  return "";
}

/**
 * Resolve display description for a property: use localized description from JSON if present,
 * otherwise t(descriptionKey) with optional default.
 */
export function resolvePropertyDescription(
  property: Property,
  lang: string,
  t: TranslateFn,
  defaultValue?: string
): string {
  if (property.description && typeof property.description[lang] === "string") {
    return property.description[lang];
  }
  if (property.descriptionKey) {
    return t(property.descriptionKey, { defaultValue: defaultValue ?? "" });
  }
  return defaultValue ?? "";
}

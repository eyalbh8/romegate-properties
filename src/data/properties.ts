/** Localized text: lang code -> text (e.g. { en: "...", it: "...", he: "..." }) */
export type LocalizedText = Record<string, string>;

export interface Property {
  id: number;
  slug: string;
  /** i18n key for title; used when title (localized) is not set */
  titleKey?: string;
  /** Localized title from JSON; takes precedence over titleKey when present */
  title?: LocalizedText;
  location: string;
  neighborhood: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  /** Land area in m²; optional (e.g. for villas). */
  landArea?: number;
  type: "rent" | "sale";
  image: string;
  images?: string[];
  /** i18n key for description; used when description (localized) is not set */
  descriptionKey?: string;
  /** Localized description from JSON; takes precedence over descriptionKey when present */
  description?: LocalizedText;
  amenities: string[];
  available: boolean;
  availableFrom?: string;
  energyRating?: string;
  floor?: number;
  furnished?: boolean;
  parking?: boolean;
  balcony?: boolean;
  nearbyUniversities?: string[];
  transportLinks?: string[];
  /** Transport links by language (e.g. { it: [...], he: [...] }); used when present for current lang */
  transportLinksLocalized?: Record<string, string[]>;
  minimumStay?: string;
  deposit?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

/** Fallback when properties.json fetch fails; allows site to still work */
export const FALLBACK_PROPERTIES: Property[] = [
  {
    id: 1,
    slug: "villa-la-fornaca",
    title: { en: "Villa La Fornaca", it: "Villa La Fornaca", he: "וילה לה פורנקה" },
    description: {
      en: [
        "Nestled in the rolling hills of the Tuscan countryside, just 5 minutes from the charming medieval village of Campagnatico, this exquisite 5-bedroom, 4-bathroom villa offers the perfect blend of rustic heritage and modern luxury. Once a traditional fornace where the region's iconic terracotta tiles were crafted, the property has been thoughtfully restored to the highest standards, seamlessly combining historical charm with contemporary comfort.",
        "",
        "## Living Spaces",
        "With a generous 300 sqm of living space, the villa is designed for both relaxation and entertainment. The ground floor features spacious open-plan living and dining areas, ideal for gathering with family and friends, while four bright and airy bedrooms occupy the upper level.",
        "",
        "## The Estate",
        "Set on 3 hectares of private land, the estate includes: a beautiful swimming pool with panoramic views; a serene private lake; over 100 mature olive trees, producing your own Tuscan olive oil; expansive gardens and shaded terraces for outdoor living.",
        "",
        "## Private Spa",
        "A standout feature of this property is the exclusive, fully-equipped private spa, complete with: a large Jacuzzi, sauna, hammam, changing room and shower.",
        "",
        "## Why This Property",
        "Whether you're seeking a luxurious holiday home, a permanent residence in the heart of Tuscany, or a prime investment opportunity, this property offers a rare chance to own a piece of authentic Tuscan history with all the amenities of modern living.",
      ].join("\n\n"),
      it: [
        "Incastonata nelle dolci colline della campagna toscana, a soli 5 minuti dall'incantevole borgo medievale di Campagnatico, questa splendida villa con 5 camere da letto e 4 bagni offre il mix perfetto di tradizione rustica e lusso moderno. Un tempo antica fornace dove venivano realizzate le iconiche tegole in terracotta della regione, la proprietà è stata sapientemente ristrutturata secondo i massimi standard, unendo fascino storico e comfort contemporaneo.",
        "",
        "## Gli spazi abitativi",
        "Con 300 mq di superficie abitabile, la villa è pensata per relax e convivialità. Al piano terra trovate ampi spazi living e dining open space, ideali per riunioni con famiglia e amici; al piano superiore, quattro camere da letto luminose e ariose.",
        "",
        "## La tenuta",
        "Su 3 ettari di terreno privato, la tenuta comprende: una piscina con vista panoramica; un suggestivo lago privato; oltre 100 olivi secolari per il vostro olio toscano; ampi giardini e terrazze ombreggiate per la vita all'aperto.",
        "",
        "## Spa privata",
        "Punto di forza della proprietà è l'esclusiva spa privata completa di: grande Jacuzzi, sauna, hammam, spogliatoio e doccia.",
        "",
        "## Perché questa proprietà",
        "Che cerchiate una casa per le vacanze, una residenza stabile nel cuore della Toscana o un investimento di pregio, questa proprietà offre l'occasione di possedere un pezzo autentico di storia toscana con tutti i comfort della vita moderna.",
      ].join("\n\n"),
      he: [
        "וילה מפוארת זו שוכנת בגבעות הטוסקניות, במרחק חמש דקות בלבד מכפר ימי הביניים הקסום קמפאניאטיקו. חמש חדרי שינה וארבעה חדרי אמבטיה, בשילוב מושלם של מורשת כפרית ויוקרה מודרנית. במקום שכן בעבר מפעל לייצור רעפי טרקוטה; הנכס שוחזר בהקפדה ומשלב אווירה היסטורית עם נוחות עכשווית.",
        "",
        "## חללי המגורים",
        "ב-300 מ\"ר של חלל מחיה, הווילה מתאימה למנוחה ולמסיבות. בקומת הקרקע: סלון ואוכל פתוחים; בקומה העליונה ארבעה חדרי שינה מוארים.",
        "",
        "## האחוזה",
        "על שלושה הקטרים של קרקע פרטית: בריכת שחייה עם נוף פנורמי, אגם פרטי, מעל 100 עצי זית, גנים ומרפסות מוצלות.",
        "",
        "## ספא פרטי",
        "בולט במיוחד: ספא פרטי מלא עם ג'קוזי, סאונה, חמאם, חדר הלבשה ומקלחת.",
        "",
        "## למה הנכס הזה",
        "בין אם אתם מחפשים בית נופש, מגורים קבועים בלב טוסקנה או השקעה – הנכס מציע הזדמנות לרכוש פיסת היסטוריה טוסקנית עם כל מתקני החיים המודרניים.",
      ].join("\n\n"),
    },
    location: "Campagnatico, Grosseto",
    neighborhood: "Campagnatico",
    price: 1690000,
    bedrooms: 5,
    bathrooms: 4,
    area: 300,
    landArea: 30000,
    type: "sale",
    image:
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca1.webp",
    images: [
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca1.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca2.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca3.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca4.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca5.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca6.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca7.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca8.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca9.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca10.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca11.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca12.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca13.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca14.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca15.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca16.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca17.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca18.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca19.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca20.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca21.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca22.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca23.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca24.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca25.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca26.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca27.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca28.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca29.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca30.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca31.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca32.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca33.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca34.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca35.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca36.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca37.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca38.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca39.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca40.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca41.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca42.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca43.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca44.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca45.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca46.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca47.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca48.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca49.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca50.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca51.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca52.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca53.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca54.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca55.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca56.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca57.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca58.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca59.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca60.webp",
    ],
    amenities: [
      "swimming_pool",
      "garden",
      "parking",
      "air_conditioning",
      "heating",
      "patio",
      "bbq_grill",
    ],
    available: true,
    parking: true,
    balcony: false,
    transportLinks: [
      "Highway A12 (Rome–Florence), 5 min",
      "Beach, 25 min",
      "Siena, 40 min",
      "Montalcino, 40 min",
      "Florence Airport, 1h 30min",
    ],
    transportLinksLocalized: {
      it: [
        "Autostrada A12 (Roma–Firenze), 5 min",
        "Spiaggia, 25 min",
        "Siena, 40 min",
        "Montalcino, 40 min",
        "Aeroporto Firenze, 1h 30min",
      ],
      he: [
        "כביש A12 (רומא–פירנצה), 5 דק׳",
        "חוף, 25 דק׳",
        "סיינה, 40 דק׳",
        "מונטלצ'ינו, 40 דק׳",
        "שדה תעופה פירנצה, 1ש 30דק׳",
      ],
    },
    coordinates: {
      lat: 42.8833,
      lng: 11.2667,
    },
  },
  {
    id: 2,
    slug: "villa-pieve-vecchia",
    title: { en: "Villa Pieve Vecchia", it: "Villa Pieve Vecchia", he: "וילה פיאבה וקיה" },
    description: {
      en: [
        "A Once-in-a-Lifetime Property: A Tuscan Villa Built on Ancient Roman Ruins",
        "",
        "Nestled in the rolling hills of Tuscany lies a truly unparalleled estate - a property unlike any other in the world. This remarkable villa is built directly on the ruins of a 2,000-year-old Roman village, with documented historical significance. Scattered throughout the lush garden are remnants of ancient Roman architecture, offering a unique and awe-inspiring glimpse into the past.",
        "",
        "Just 50 meters behind the main house stands one of the estate's most extraordinary features: an original Roman water reservoir, constructed to collect rainwater for the ancient settlement - a rare and tangible piece of living history.",
        "",
        "## The Main Villa",
        "The main villa, measuring approximately 250 square meters, dates back to medieval times, when a local farmer built the home atop the Roman foundations - many of which remain visible today. The villa was masterfully restored by world-renowned Italian architect Cini Boeri, who preserved its rustic external character while transforming the interiors with a modern, minimalist touch. The result is a stunning blend of history and contemporary comfort.",
        "",
        "On the ground floor, once used as stables, you'll find an open-plan living and dining area, along with a guest bedroom with independent access, ideal for visitors or staff. The contrast between sleek modern finishes and the centuries-old stonework creates a timeless, elegant ambiance.",
        "",
        "Upstairs on the first floor, there are three additional bedrooms, each with modern features and air conditioning, thoughtfully integrated into the medieval layout.",
        "",
        "## The Garden and Pool",
        "The garden is a peaceful oasis filled with centuries-old olive trees and Roman ruins. At its heart lies the architectural masterpiece of the estate: the pool area, beautifully embedded into the natural terrain and offering breathtaking panoramic views - a cinematic setting straight out of a dream.",
        "",
        "## The Guesthouse",
        "Just 100 meters from the main villa, a modern guesthouse offers an additional bedroom, bathroom, and a full kitchen with dining and living space. Surrounded by glass walls, the guesthouse is bright, contemporary, and fully air-conditioned, with stunning views over the Tuscan countryside.",
        "",
        "## Why This Property",
        "This is not just a property - it's a statement, a legacy, and a living piece of history. For those seeking something truly extraordinary, this villa offers an experience that cannot be replicated. After all, who else can say they own a home in Tuscany with Roman ruins in the garden?",
      ].join("\n\n"),
      it: [
        "Un'opportunità irripetibile: una villa toscana costruita su antiche rovine romane.",
        "",
        "Nascosta tra le dolci colline della Toscana si trova una tenuta senza eguali. Questa straordinaria villa sorge direttamente sui resti di un villaggio romano di 2000 anni fa, con documentato valore storico. Nel rigoglioso giardino si trovano resti di architettura romana che offrono uno sguardo unico sul passato.",
        "",
        "A soli 50 metri dietro la casa principale si erge una delle caratteristiche più eccezionali della tenuta: un originale serbatoio idrico romano, costruito per raccogliere l'acqua piovana per l'antico insediamento - un raro e tangibile pezzo di storia vivente.",
        "",
        "## La villa principale",
        "La villa principale, di circa 250 mq, risale al Medioevo, quando un contadino locale costruì la casa sulle fondamenta romane - molte ancora visibili oggi. La villa è stata magistralmente restaurata dall'architetto italiano di fama mondiale Cini Boeri, che ne ha preservato il carattere rustico esteriore trasformando gli interni con un tocco moderno e minimalista. Il risultato è un affascinante connubio tra storia e comfort contemporaneo.",
        "",
        "Al piano terra, un tempo adibito a stalle, trovate un open space living e dining e una camera da letto per gli ospiti con accesso indipendente, ideale per visitatori o personale. Il contrasto tra finiture moderne e murature secolari crea un'atmosfera elegante e senza tempo.",
        "",
        "Al primo piano, tre camere da letto aggiuntive, ciascuna con comfort moderni e aria condizionata, integrate con cura nel layout medievale.",
        "",
        "## Il giardino e la piscina",
        "Il giardino è un'oasi di pace tra olivi secolari e rovine romane. Al suo cuore si trova il capolavoro architettonico della tenuta: l'area piscina, incastonata nel terreno naturale con viste panoramiche mozzafiato - una cornice da sogno.",
        "",
        "## La dependance",
        "A 100 metri dalla villa principale, una moderna dependance offre un ulteriore camera da letto, bagno e cucina con zona living. Circondata da pareti vetrate, è luminosa, contemporanea e con aria condizionata, con splendide viste sulla campagna toscana.",
        "",
        "## Perché questa proprietà",
        "Non è solo una proprietà - è una dichiarazione, un'eredità e un pezzo di storia vivente. Per chi cerca qualcosa di veramente straordinario, questa villa offre un'esperienza irripetibile. Chi altro può dire di possedere una casa in Toscana con rovine romane nel giardino?",
      ].join("\n\n"),
      he: [
        "נכס חד־פעמי: וילה טוסקנית הבנויה על חורבות רומיות עתיקות.",
        "",
        "בין גבעות טוסקנה שוכנת אחוזה ייחודית בעולם. הווילה נבנתה ממש על שרידי כפר רומי בן 2000 שנה, עם משמעות היסטורית מתועדת. בגן השופע פזורים שרידי אדריכלות רומית.",
        "",
        "כחמישים מטר מאחורי הבית הראשי ניצב מאגר מים רומי מקורי, שנבנה לאיסוף מי גשם - פיסת היסטוריה חיה נדירה.",
        "",
        "## הווילה הראשית",
        "הווילה הראשית, כ־250 מ\"ר, מתוארכת לימי הביניים; שוחזרה בידי האדריכלית האיטלקייה הנודעת צ'יני בוארי, ששמרה על האופי הכפרי מבחוץ ועיצבה פנים מודרני ומינימליסטי.",
        "",
        "בקומת הקרקע: סלון ואוכל פתוחים וחדר אורחים עם כניסה נפרדת. בקומה הראשונה שלושה חדרי שינה נוספים עם מיזוג אוויר.",
        "",
        "## הגן והבריכה",
        "הגן הוא נווה שלום עם עצי זית ורומי עתיקים. במרכזו אזור הבריכה עם נוף פנורמי.",
        "",
        "## בית האורחים",
        "מאה מטר מהווילה: בית אורחים מודרני עם חדר שינה, אמבטיה ומטבח מלא, מוקף זכוכית, ממוזג, עם נוף לנוף הטוסקני.",
        "",
        "## למה הנכס הזה",
        "זו לא רק נכס - זו הצהרה, מורשת ופיסת היסטוריה חיה. למי שמחפש משהו יוצא דופן, הווילה מציעה חוויה שלא ניתן לשכפל. למי עוד יש בית בטוסקנה עם חורבות רומיות בגן?",
      ].join("\n\n"),
    },
    location: "Campagnatico, Grosseto",
    neighborhood: "Campagnatico",
    price: 1990000,
    bedrooms: 5,
    bathrooms: 4,
    area: 310,
    landArea: 30000,
    type: "sale",
    image:
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-pieve-vecchia/pieve-vecchia1.webp",
    images: Array.from(
      { length: 68 },
      (_, i) =>
        `https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-pieve-vecchia/pieve-vecchia${i + 1}.webp`,
    ),
    amenities: [
      "swimming_pool",
      "bathtub",
      "shower",
      "garden",
      "parking",
      "air_conditioning",
      "heating",
      "terrace",
      "patio",
      "bbq_grill",
    ],
    available: true,
    parking: true,
    balcony: false,
    transportLinks: [
      "Campagnatico (medieval village), 500 m",
      "Highway Rome–Florence, 10 min",
      "Tuscan coast and beaches, 25 min",
      "Siena, 35 min",
      "Montalcino, 30 min",
      "Florence, 1h 10min",
      "Florence or Pisa airport, 1h 15min",
      "Terme di Saturnia, 45 min",
      "Maremma Sea (Marina di Alberese, Principina a Mare), 40–45 min",
      "Val d'Orcia, 1 hour",
      "Monte Amiata, 1 hour",
      "Grosseto, 15 min",
    ],
    transportLinksLocalized: {
      it: [
        "Campagnatico (borgo medievale), 500 m",
        "Autostrada Roma–Firenze, 10 min",
        "Costa toscana e spiagge, 25 min",
        "Siena, 35 min",
        "Montalcino, 30 min",
        "Firenze, 1h 10min",
        "Aeroporto Firenze o Pisa, 1h 15min",
        "Terme di Saturnia, 45 min",
        "Maremma (Marina di Alberese, Principina a Mare), 40–45 min",
        "Val d'Orcia, 1 ora",
        "Monte Amiata, 1 ora",
        "Grosseto, 15 min",
      ],
      he: [
        "קמפאניאטיקו (כפר מימי הביניים), 500 מ'",
        "כביש רומא–פירנצה, 10 דק׳",
        "חוף טוסקנה וחופים, 25 דק׳",
        "סיינה, 35 דק׳",
        "מונטלצ'ינו, 30 דק׳",
        "פירנצה, 1ש 10דק׳",
        "שדה תעופה פירנצה או פיזה, 1ש 15דק׳",
        "Terme di Saturnia, 45 דק׳",
        "ים המרמה (מרינה די אלברזה וכו'), 40–45 דק׳",
        "ואל ד'אורצ'ה, שעה",
        "מונטה אמיאטה, שעה",
        "גרוסטו, 15 דק׳",
      ],
    },
    coordinates: {
      lat: 42.8833,
      lng: 11.2667,
    },
  },
];

export function getPropertyBySlug(
  list: Property[],
  slug: string,
): Property | undefined {
  return list.find((p) => p.slug === slug);
}

export function getPropertyById(
  list: Property[],
  id: number,
): Property | undefined {
  return list.find((p) => p.id === id);
}

export function getPropertiesByNeighborhood(
  list: Property[],
  neighborhood: string,
): Property[] {
  return list.filter(
    (p) => p.neighborhood.toLowerCase() === neighborhood.toLowerCase(),
  );
}

export function getPropertiesByType(
  list: Property[],
  type: "rent" | "sale",
): Property[] {
  return list.filter((p) => p.type === type);
}

/** JSON payload from /properties.json */
export interface PropertiesPayload {
  updated?: string;
  properties: Property[];
}

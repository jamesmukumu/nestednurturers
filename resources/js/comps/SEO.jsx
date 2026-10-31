import { Head } from "@inertiajs/react";

const SITE_NAME = "Nested Nurturers";
const SITE_URL = "https://nestednurturers.com";
const DEFAULT_TITLE = "Nested Nurturers | Prenatal, Birth & Postpartum Support";
const DEFAULT_DESCRIPTION =
    "Nested Nurturers provides compassionate prenatal, birth, and postpartum doula support in the Bay Area, California, helping families feel supported, confident, and cared for through pregnancy and early parenthood.";
const DEFAULT_KEYWORDS =
    "postpartum doula Bay Area, birth doula California, prenatal support, newborn care, sleep support, family support, Bay Area postpartum care";

function normalizeUrl(value) {
    if (!value) return `${SITE_URL}/`;
    if (/^https?:\/\//i.test(value)) return value;

    return `${SITE_URL}/${value.replace(/^\/+/, "")}`;
}

function normalizeImageUrl(value) {
    if (!value) return `${SITE_URL}/images/updates-logo.jpeg`;
    if (/^https?:\/\//i.test(value)) return value;

    return `${SITE_URL}/${value.replace(/^\/+/, "")}`;
}

function buildPageTitle(title) {
    if (!title) return DEFAULT_TITLE;
    if (title.includes(SITE_NAME)) return title;

    return `${title} | ${SITE_NAME}`;
}

export function Seo({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    ogTitle = "",
    ogDescription = "",
    ogType = "website",
    ogUrl = "",
    twitterCard = "summary_large_image",
    twitterTitle = "",
    twitterDescription = "",
    url = "",
    schema = null,
    image = "images/updates-logo.jpeg",
}) {
    const finalUrl = normalizeUrl(ogUrl || url);
    const finalImage = normalizeImageUrl(image);
    const pageTitle = buildPageTitle(title);
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageKeywords = keywords || DEFAULT_KEYWORDS;
    const ogMetaTitle = ogTitle || pageTitle;
    const ogMetaDescription = ogDescription || pageDescription;
    const twitterMetaTitle = twitterTitle || pageTitle;
    const twitterMetaDescription = twitterDescription || pageDescription;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph */}
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogMetaTitle} />
            <meta property="og:description" content={ogMetaDescription} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:alt" content={ogMetaTitle} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={twitterMetaTitle} />
            <meta name="twitter:description" content={twitterMetaDescription} />
            <meta name="twitter:image" content={finalImage} />

            {schema ? (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ) : null}
        </Head>
    );
}

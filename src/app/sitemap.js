export default async function sitemap() {
  const baseUrl = "https://www.dwarkadarshantour.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          hi: `${baseUrl}/`,
          gu: `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/dwarka-darshan`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          en: `${baseUrl}/dwarka-darshan`,
          hi: `${baseUrl}/dwarka-darshan`,
          gu: `${baseUrl}/dwarka-darshan`,
        },
      },
    },
    {
      url: `${baseUrl}/somnath-darshan`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/somnath-darshan`,
          hi: `${baseUrl}/somnath-darshan`,
          gu: `${baseUrl}/somnath-darshan`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          hi: `${baseUrl}/contact`,
          gu: `${baseUrl}/contact`,
        },
      },
    },
  ];
}

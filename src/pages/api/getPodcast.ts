import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  // Filtrar el array para obtener solo los elementos con "content" igual a "Radio"

  const response = await fetch(
    "https://www.colibra.cloud/colibraPlay/index.php"
  ).then((response) => response.json());

  const contentCount = response.length;

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }

  const podcastData = response.filter((item) => item.type === "Podcast");

  return new Response(JSON.stringify(podcastData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const response = await fetch(
    "https://www.colibra.cloud/colibraPlay/index.php"
  ).then((response) => response.json());
  // Filtrar el array para obtener solo los elementos con "content" igual a "movies"

  const contentCount = response.length;

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }
  const moviesData = response.filter((item) => item.type === "Movie");

  return new Response(JSON.stringify(moviesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

import data from "../../../data/data.json";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  // Filtrar el array para obtener solo los elementos con "content" igual a "movies"
  const moviesData = data.filter((item) => item.type === "Movie");

  const contentCount = moviesData.length;

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }


  return new Response(JSON.stringify(moviesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

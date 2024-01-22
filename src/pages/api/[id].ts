import data from "../../../data/data.json";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  // Obtener el id de los parámetros
  const id = params.id;
  // Filtrar el array para obtener solo los elementos con "content" igual a "movies"
  const moviesData = data.filter((item) => item.contentId === id);

  const contentCount = moviesData.length;

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }

  return new Response(JSON.stringify(moviesData[0]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

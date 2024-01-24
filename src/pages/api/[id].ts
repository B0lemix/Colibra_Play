/* import data from "../../../data/data.json"; */
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  // Obtener el id de los parámetros
  const id = params.id;
  // Filtrar el array para obtener solo los elementos con "content" igual a "movies"
  /*   const moviesData = data.filter((item) => item.contentId === id); */

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

  const moviesData = response.filter((item) => item.contentId === id);

  return new Response(JSON.stringify(moviesData[0]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

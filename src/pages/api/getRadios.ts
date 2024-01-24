
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

  const radiosData = response.filter((item) => item.type === "Radio");

  return new Response(JSON.stringify(radiosData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

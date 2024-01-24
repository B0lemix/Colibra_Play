import data from "../../../data/data.json";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  // Filtrar el array para obtener solo los elementos con "content" igual a "Radio"
  const radiosData = data.filter((item) => item.type === "Radio");

  const contentCount = radiosData.length;

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }


  return new Response(JSON.stringify(radiosData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

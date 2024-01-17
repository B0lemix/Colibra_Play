import data from "../../../data/data.json";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const contentCount = data.length;
  const randomIndex = Math.floor(Math.random() * contentCount);

  const randomContent = data[randomIndex];

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }

  /* JSON.stringify(randomContent[0]) */
  return new Response(JSON.stringify(randomContent), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

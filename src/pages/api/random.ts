import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const response = await fetch(
    "https://www.colibra.cloud/colibraPlay/index.php"
  ).then((response) => response.json());

  const contentCount = response.length;
  const randomIndex = Math.floor(Math.random() * contentCount);

  const randomContent = response[randomIndex];

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

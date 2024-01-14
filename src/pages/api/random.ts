import prismadb from "../../../lib/prismadb";
import type { APIRoute } from 'astro';
const GET: APIRoute= async ({ params, request }) => {
/* export async function GET({  params, request  }) { */
  const contentCount = await prismadb.content.count();
  const randomIndex = Math.floor(Math.random() * contentCount);

  const randomContent = await prismadb.content.findMany();

  if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }

  return new Response(JSON.stringify(randomContent[0]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const prerender=false

import prismadb from "../../../lib/prismadb";
export async function GET({ request }) {
  const contentCount = await prismadb.content.count();
  const randomIndex = Math.floor(Math.random() * contentCount);

  const randomContent = await prismadb.content.findMany({
    take: 1,
    skip: randomIndex,
  });

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

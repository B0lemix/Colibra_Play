/* import prismadb from "../../../lib/prismadb"; */
import type { APIRoute } from "astro";
 
export const GET: APIRoute = async  ({  params, request  })  =>  {
/*  const contentCount = await prismadb.content.count();
 const randomIndex = Math.floor(Math.random() * contentCount);

  const randomContent = await prismadb.content.findMany({
    take: 1,
    skip: randomIndex,
  }); */
/*   if (contentCount === 0) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  } */

/* JSON.stringify(randomContent[0]) */
 return new Response("hello", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};



/* 
export async function GET({  params, request  }) {
  const contentCount = await prismadb.content.count();
  const randomIndex = Math.floor(Math.random() * contentCount);

  const randomContent = await prismadb.content.findMany({
    take: 1,
    skip: randomIndex,
  });;

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
} */

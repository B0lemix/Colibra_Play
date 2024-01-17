import prismadb from "../../lib/prismadb";

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    try {
      // Process the GET request as needed
      const contentCount = await prismadb.content.count();
 const randomIndex = Math.floor(Math.random() * contentCount); 
 const randomContent = await prismadb.content.findMany({});
  if (contentCount === 0) {
     return new Response(null, {
       status: 404,
       statusText: "No Encontrado",
     });
   } 
      // Return the data as the response
      return {
        statusCode: 200,
        body: JSON.stringify(randomContent[0]),
      };
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to process GET request' }),
      };
    }
  }
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

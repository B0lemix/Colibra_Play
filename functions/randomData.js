
exports.handler = async function (event, context) {
    try {
      const response = await fetch('https://cplay.netlify.app/api/random');
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error fetching data' }),
      };
    }
  };
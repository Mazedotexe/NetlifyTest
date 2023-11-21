exports.handler = async function (event, context) {
  // Retrieve the saved code from your storage (replace this with your storage logic)
  // Example: You can use a global variable as a simple in-memory storage
  const savedCode = global.savedCode || '';

  return {
    statusCode: 200,
    body: JSON.stringify({ customScriptCode: savedCode }),
  };
};

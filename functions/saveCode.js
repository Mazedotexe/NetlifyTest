exports.handler = async function (event, context) {
  const { code } = JSON.parse(event.body);
  global.savedCode = code;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Code saved successfully' }),
  };
};

const systemMessage = {
    role: "system",
    content: "You are an assistant that is able to identify the product name and main material from a post, consisting either of a caption or an image. Keep your answer concise and to the point."
  };
  
  function userMessage(caption, imageBase64) {
    const messageContent = `What is the product name and the main material used in the product? 
    Output in the following format:
    Product Name: <product name>
    Main Material: <material name>
    
    Caption: ${caption}`;
  
    const message = {
      role: "user",
      content: messageContent,
    };
  
    if (imageBase64 && imageBase64 !== 'null') {
      message.image = {
        data: imageBase64,
        type: "image_base64"
      };
    }
  
    return message;
  }
  
  
  function generateIdentifierPrompt(caption, imageBase64) {
    return [systemMessage, userMessage(caption, imageBase64)];
  }
  
  function formatIdentifierOutput(responseContent) {
    // Use regular expressions to extract the product name and material
    const productNameMatch = responseContent.match(/Product Name:\s*(.*)/);
    const materialMatch = responseContent.match(/Main Material:\s*(.*)/);
  
    // Get the matched groups or set to empty string if not found
    const productName = productNameMatch ? productNameMatch[1].trim() : "";
    const material = materialMatch ? materialMatch[1].trim() : "";
  
    // Return the result as a JSON object
    return {
      productName: productName,
      material: material
    };
  }

  export {generateIdentifierPrompt, formatIdentifierOutput}
  
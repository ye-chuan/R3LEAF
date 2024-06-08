const systemMessage = {
  role: "system",
  content: "You are an assistant that is able to recommend YouTube videos for upcycling a given material."
};

function userMessage(itemToBeUpcycled) {
  return {
    role: "user",
    content: `Can you surf the net to give me the top 5 most popular videos on upcycling ${itemToBeUpcycled}?
    Output in the following format:
    1: <url for video 1>,
    2: <url for video 2>,
    3: <url for video 3>,
    4: <url for video 4>,
    5: <url for video 5>`
  };
}

function generateReccoPrompt(itemToBeUpcycled) {
  return [systemMessage, userMessage(itemToBeUpcycled)];
}

function formatReccoOutput(responseContent) {
  // Matches lines in the format "1: <url for video 1>", "2: <url for video 2>", etc.
  const videoUrls = responseContent.match(/\d:\s*(https?:\/\/[^\s]+)/g);

  // Initialize an empty result object
  const result = {};

  if (videoUrls) {
    videoUrls.forEach((videoUrl, index) => {
      const url = videoUrl.split(': ')[1].trim();
      result[`video${index + 1}`] = url;
    });
  }

  return result;
}

export { generateReccoPrompt, formatReccoOutput };

const { openai } = require('./auth.js');

/**
 * Generates an image using OpenAI
 * @author Jeremie Pedden <jeremiepedden@gmail.com>
 * @param  {String} description     - The description to generate image from
 * @param  {Number} numberOfImages  - The number of imagages to generate. ( max 10 ) 
 * @param  {String} resolution      - The image size to generate. ( 256x256, 512x512, 1024x1024 ) 
 * @return {Array}                  - The generated images or errors
 */
const imageGeneration = async (description, numberOfImages = 9, resolution = '1024x1024') => {

  if (typeof description !== 'string') {
    return 'Error: Image description must be of string type';
  }

  if (description === '') {
    return 'Error: Image description is required';
  }

  if (description.trim() === '') {
    return 'Error: Image description is blank';
  }

  try {
    const response = await openai.createImage({
      prompt: description,
      n: numberOfImages,
      size: resolution,
    });

    return response.data.data;
  }
  catch(error) {
    return error
  }
}

exports.imageGeneration = imageGeneration;
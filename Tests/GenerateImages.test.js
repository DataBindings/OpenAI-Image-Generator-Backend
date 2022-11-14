import imageGeneration from '../OpenAI/GenerateImages.js'
jest.setTimeout(300000);

const description = 'an illustration of Batman fighting Joker on a commet heading towards earth';

test('Description is empty', async () => {
  const apiData = await imageGeneration('');
  expect(apiData).toBe('Image description is required');
})

test('Description is blank', async () => {
  const apiData = await imageGeneration('     ');
  expect(apiData).toBe('Image description is required');
})

test('Description is wrong type', async () => {
  const apiData = await imageGeneration(45);
  expect(apiData).toBe('Image description is required and must be of string type');
})

test('Return from OpenAI contains 9 links', async () => {
  const apiData = await imageGeneration(description);
  expect(apiData).toHaveLength(9);
})
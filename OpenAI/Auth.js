import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey:       process.env.OPENAI_API_TOKEN,
});

const openai = new OpenAIApi(configuration);

export default openai;
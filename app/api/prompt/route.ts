import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/utils/database';
import Prompt from '@/models/prompt';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate('creator');
    return new Response(JSON.stringify(prompts), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
      statusText: 'OK',
    });
  } catch (error) {
    console.log(error);
    return new Response('Failed', {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
};

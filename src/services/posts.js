import { client, checkError } from './client';

export async function getPosts() {
  const response = await client.from('posts').select('*');
  return checkError(response);
}

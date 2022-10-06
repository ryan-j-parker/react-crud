import { client, checkError } from './client';

export async function getPosts() {
  const response = await client.from('posts').select('*');
  return checkError(response);
}

export async function createPost(title, description) {
  const response = await client.from('posts').insert({ title: title, description: description });
  return checkError(response);
}

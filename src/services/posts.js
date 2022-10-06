import { client, checkError } from './client';

export async function getPosts() {
  const response = await client.from('posts').select('*');
  return checkError(response);
}

export async function createPost(title, description) {
  const response = await client.from('posts').insert({ title: title, description: description });
  return checkError(response);
}

export async function editPost(title, description, id) {
  const response = await client
    .from('posts')
    .update({ title: title, description: description })
    .match({ id });
  return checkError(response);
}

export async function getPostById(id) {
  const response = await client.from('posts').match({ id }).single();

  return checkError(response);
}

import { client, checkError } from './client';
const REACT_APP_SUPABASE_URL = 'https://juukelwfynjorlxlrltv.supabase.co';

export async function createProfile(firstName, lastName, username) {
  const response = await client
    .from('profiles')
    .insert({ first_name: firstName, last_name: lastName, username: username });

  return checkError(response);
}

export async function getProfile(id) {
  const response = await client.from('profiles').select('*').match({ id }).single();

  return checkError(response);
}

export async function uploadProfileImage(imageFile, imageName) {
  const bucket = await client.storage.from('avatars');
  const response = await bucket.upload(imageName, imageFile, {
    cacheControl: '3600',
    upsert: true,
  });
  if (response.error) {
    return null;
  }
  const url = `${REACT_APP_SUPABASE_URL}/storage/v1/object/public/${response.data.Key}`;
  return url;
}

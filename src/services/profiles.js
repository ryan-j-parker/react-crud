import { client, checkError } from './client';
const REACT_APP_SUPABASE_URL = 'https://juukelwfynjorlxlrltv.supabase.co';

// const REACT_APP_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWtlbHdmeW5qb3JseGxybHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI1ODk4MzgsImV4cCI6MTk3ODE2NTgzOH0.5et5I4mHWEi7JTbmOnUz3_07wqlBoT0P8KZy0sSaOzU';

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

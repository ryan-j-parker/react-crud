import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export async function uploadImage(bucketName, imageName, imageFile) {
  const bucket = client.storage.from(bucketName);
  const response = await bucket.upload(imageName, imageFile, {
    cacheControl: '3600',
    upsert: true,
  });
  if (response.error) {
    return null;
  }
  const url = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/${response.data.Key}`;
  return url;
}

import { env } from "$env/dynamic/public";

export async function query(url: string) {
  let data = await fetch(`${env.PUBLIC_API_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${env.PUBLIC_API_TOKEN}`,
    },
  });
  return data.json();
}

import { query } from ".";

export async function HomeData() {
  let res = await query("home");
  return res;
}

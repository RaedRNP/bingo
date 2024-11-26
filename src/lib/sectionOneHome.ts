import { query } from "./index";

export async function SectionOneHome() {
  let res = await query("section-one-home");
  return res;
}

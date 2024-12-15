import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { z } from "zod";

const newUserSchema = z.object({
  email: z.string().min(14),
  username: z.string().email(),
  password: z.string().min(8),
});

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(newUserSchema));
  return { form };
};

export const actions: Actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());
    console.log(formData);
  },
  login: async ({ cookies }) => {
    cookies.set("auth", "token", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    throw redirect(303, "/");
  },
};

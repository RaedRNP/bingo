import { authentacateUser } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.user = authentacateUser(event);
  console.log(event.locals.user);
  const response = resolve(event);

  return response;
};

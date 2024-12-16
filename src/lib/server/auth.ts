import type { RequestEvent } from "@sveltejs/kit";

export const authentacateUser = (event: RequestEvent) => {
  const { cookies } = event;

  const userToken = cookies.get("auth");

  /* if (userToken === "token") {
    let user = fetch("http://localhost:1337/api/users/me", {
      method: "GET",
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((val) => val.data);

    console.log(user);
    return user;
  } */

  return null;
};

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

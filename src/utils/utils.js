async function getToken() {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          "d5a172f3790f440e901af716ae861d81" +
            ":" +
            "83ebddc3a0814cc987d7c88fb0e276d9"
        )}`,
      },
      body: "grant_type=client_credentials",
    });
    const auth = await response.json();
    localStorage.setItem("token", `${auth.token_type} ${auth.access_token}`);
  } catch (error) {
    console.error(error);
  }
}

export { getToken };

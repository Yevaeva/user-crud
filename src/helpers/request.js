function request(url, method = "GET", body) {
  let config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(url, config)
    .then((res) => res.json())
    .then((response) => {
      if (response.hasError) {
        throw response;
      }
      return response;
    });
}

export default request;

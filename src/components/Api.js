function Api() {
  const id = Math.floor(Math.random() * 700);
  const url = `http://xkcd.com/${id}/info.0.json`;
  return url;
}

export default Api;

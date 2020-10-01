function Api() {
  const id = Math.floor(Math.random() * 700);
  const url = `https://cors-anywhere.herokuapp.com/https://xkcd.com/${id}/info.0.json`;
  return url;
}

export default Api;

function Api() {
  const id = Math.floor(Math.random() * 700);
  const urlcors = "https://cors-anywhere.herokuapp.com/";
  const url = `${urlcors}https://xkcd.com/${id}/info.0.json`;
  return url;
}

export default Api;

export const getUrlPk = (match: { url: string }) => {
  // .com/some_url/pk <-
  const urlArray: string[] = match.url.split("/").filter((el) => el != "");
  const pk: string = urlArray[urlArray.length - 1];
  return pk;
};

const getCroppedImageUrl = (url: string) => {
  const sm =
    "https://firebasestorage.googleapis.com/v0/b/recipe-node-api.appspot.com/o/files%2F?alt=media&token=d53f844a-ce9a-40d4-8a01-80b3566916d1";
  const target = "/files%2F";
  const index = sm.indexOf(target) + target.length;
  return sm.slice(0, index) + url + sm.slice(index);
};

export default getCroppedImageUrl;

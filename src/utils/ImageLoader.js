export const ImageLoader = {
  async load(path) {
    if(path === "") {
      return null;
    }
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
      image.src = path;
    });
  },
};

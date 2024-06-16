export const ImageLoader = {
  async load(imgName) {
    if(imgName === "") {
      return null;
    }

    const path = "/../../assets/images/" + imgName;
    const url = chrome.runtime.getURL(path);
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
      image.src = url;
    });
  },
};

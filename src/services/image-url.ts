import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImage = (url: string) => {
  // if(!url) return ''; //used this so as to avoid the application breaking down without an image
  // but now I got the noImage holder.

  if(!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;

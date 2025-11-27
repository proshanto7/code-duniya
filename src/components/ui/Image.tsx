import type { ImageType } from "../types/imageType";

function Image({ imgUrl, alt, className }: ImageType) {
  return <img src={imgUrl} alt={alt} className={className} />;
}

export default Image;

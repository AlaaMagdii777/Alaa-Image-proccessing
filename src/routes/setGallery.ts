import path from "path";
import GalleryEditor from "./GalleryEditor";
import galleryType from "./../type";

export const fullDir = path.resolve(__dirname, "./../galleries/full");
export const visualDesignGalleryDir = path.resolve(
  __dirname,
  "./../galleries/visualDesignGallery"
);

const setImage = async (query: galleryType): Promise<string | null> => {
  if (!query.title || !query.width || !query.height) {
    return null;
  }

  const height = parseInt(query.height);
  const width = parseInt(query.width);

  // /http://localhost:3000/api/gallery?title=icelandwaterfall&height=700&width=400

  const source = path.resolve(fullDir, `${query.title}.jpg`);
  const target = path.resolve(
    visualDesignGalleryDir,
    `${query.title}-${height}${width}.jpg`
  );

  const galleryModel = new GalleryEditor(height, width, source, target);

  const show = await galleryModel.resizeGallery();
  if (show) {
    return target;
  }
  return null;
};

export default setImage;

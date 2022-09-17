import { promises as fs } from "fs";
import path from "path";
import { visualDesignGalleryDir, fullDir } from "./setGallery";
import galleryType from "./../type";

const presentGallery = async (path: string): Promise<string | null> => {
  try {
    await fs.access(path);
    return path;
  } catch {
    return null;
  }
};

export const getGallery = async (title: string): Promise<string | null> => {
  const galleryUrl = path.resolve(fullDir, `${title}.jpg`);
  return await presentGallery(galleryUrl);
};

export const getVisualDesignGallery = async (query: galleryType): Promise<string | null> => {
  const visualDesignGalleryPath = path.resolve(
    visualDesignGalleryDir,

    //visualDesignGalleryDir
    
    `${query.title}-${query.height}${query.width}.jpg`
  );
  return await presentGallery(visualDesignGalleryPath);
};

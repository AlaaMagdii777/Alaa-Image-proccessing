import sharp from "sharp";
import { promises as fs } from "fs";
import { visualDesignGalleryDir } from "./setGallery";

class GalleryEditor {
  height: number;
  width: number;
  source: string;
  target: string;

  constructor(height: number, width: number, source: string, target: string) {
    this.height = height;
    this.width = width;
    this.source = source;
    this.target = target;
  }

  //Create-Visual-Design-Gallery

  createDirVisualDesignGallery = async (): Promise<void> => {
    try {
      await fs.access(visualDesignGalleryDir);
    } catch {
      fs.mkdir(visualDesignGalleryDir);
    }
  };

  //Resize-Gallery

  resizeGallery = async (): Promise<boolean> => {
    try {
      await this.createDirVisualDesignGallery();
      await sharp(this.source)
        .resize(this.height, this.width)
        .toFormat("jpg")
        .toFile(this.target);
      return true;
    } catch {
      return false;
    }
  };
}

export default GalleryEditor;

import express from "express";
import setGallery from "../setGallery";
import { getGallery, getVisualDesignGallery } from "../getGallery";

const Gallery = express.Router();

const checkGallery = (width: number, height: number): boolean => {
  if (Number.isNaN(width) || Number.isNaN(height) || width < 1 || height < 1) {
    return false;
  }
  return true;
};

const gallaryHandleApi = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  if (req.query.title) {
    //Validation Title & height & width
    if (req.query.height || req.query.width) {
      const validation = checkGallery(
        parseInt(req.query.width as string),
        parseInt(req.query.height as string)
      );

      if (validation) {
        let thumbnail = await getVisualDesignGallery(req.query);
        if (thumbnail) {
          res.sendFile(thumbnail);
        } else {
          thumbnail = await setGallery(req.query);
          if (thumbnail) {
            res.sendFile(thumbnail);
          } else {
            res.status(200).json({
              response:
                "Gallery not found ?!",
            });
          }
        }
      } else {
        res.status(200).json({ response: "Somthing happend height or width is null !" });
      }
    } else {
      const Gallery = await getGallery(req.query.title as string);
      if (Gallery) {
        res.sendFile(Gallery);
      } else {
        res.status(404).json({ response: "Gallery not found!" });
      }
    }
  } else {
    res.status(200).json({ response: "Something happend Gallery title is null ?!" });
  }
};

Gallery.get("/", gallaryHandleApi);

export default Gallery;

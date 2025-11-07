import express from "express";
import { tagController } from "./Category.controller";

export const tagRouter = express.Router();

tagRouter.get("/tags", tagController.getTags);
tagRouter.get("/tags/:id", tagController.getTagById);
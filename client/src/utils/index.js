import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
};

export const downloadImage = async (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};

import path from 'path';
import fs from 'fs';

export const getImages = () => {
  const imagesDirectory = path.join(process.cwd(), 'public/testimonials'); // Path to the 'images' folder

  // Read the directory
  const filenames = fs.readdirSync(imagesDirectory);

  // Return an array of image paths relative to the public folder
  return filenames.map((name) => `/testimonials/${name}`);
};

import media1 from "./media-1.jpeg";
import media2 from "./media-2.jpeg";
import media3 from "./media-3.jpeg";


export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];

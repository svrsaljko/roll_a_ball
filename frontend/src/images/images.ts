import { levels } from '../hoc/Levels';

let images: any = [];

for (let i = 0; i < levels.length; i++) {
  images.push(levels[i].boardBackground);
  images.push(levels[i].rotatedBrick);
  images.push(levels[i].brick);
}
console.log('images: ', images);

export { images };

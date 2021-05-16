/**
 * We store the board images in the public/ directory just because its easy
 * @return {string} Return a random image from our board images
 */
const getRandomImage = (): string => {
  const images = [
    'beach',
    'river',
    'mountain',
    'trees',
    'water',
    'chill',
    'space',
    'rocks',
    'shore',
  ];

  return images[Math.floor(Math.random() * images.length)];
};

export default getRandomImage;

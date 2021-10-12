export function pixelToCm(valueInPixels) {
  return (valueInPixels * 96) / 2.54;
}

export function cmToPixels(valueInCm) {
  return (valueInCm / 0.026458333);
}
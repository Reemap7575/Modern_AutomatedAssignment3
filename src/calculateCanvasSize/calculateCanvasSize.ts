export default function calculateCanvasSize(
  length: string,
  width: string
) {
  const l = Math.abs(parseInt(length));
  const w = Math.abs(parseInt(width));
  if (isNaN(l) || isNaN(w)) throw new Error('Invalid numeric input');
  return l * w;
}
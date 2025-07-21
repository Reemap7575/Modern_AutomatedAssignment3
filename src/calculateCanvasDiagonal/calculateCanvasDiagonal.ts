export default function calculateCanvasDiagonal(length: string, width: string) {
  const l = Math.abs(parseFloat(length));
  const w = Math.abs(parseFloat(width));
  if (isNaN(l) || isNaN(w)) return NaN;
  if (l === 0 && w === 0) return 0;
  return Math.sqrt(l * l + w * w);
}
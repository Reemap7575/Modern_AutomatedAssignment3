import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate area correctly for positive numeric strings', () => {
    expect(calculateCanvasSize('5', '10')).toBe(50);
    expect(calculateCanvasSize('0', '10')).toBe(0);
  });

  test('should handle non-numeric strings gracefully', () => {
    expect(() => calculateCanvasSize('a', '10')).toThrow();
    expect(() => calculateCanvasSize('5', 'b')).toThrow();
  });

  test('should handle negative inputs by taking absolute value', () => {
    expect(calculateCanvasSize('-5', '10')).toBe(50);
    expect(calculateCanvasSize('5', '-10')).toBe(50);
  });
});
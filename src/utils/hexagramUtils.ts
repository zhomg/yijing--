export type LineType = 'yang' | 'yin';

export interface GeneratedLine {
  type: LineType;
  position: number;
  isChanging?: boolean;
}

export const generateRandomLines = (): GeneratedLine[] => {
  const lines: GeneratedLine[] = [];
  for (let i = 0; i < 6; i++) {
    const isYang = Math.random() > 0.5;
    lines.push({
      type: isYang ? 'yang' : 'yin',
      position: 6 - i,
    });
  }
  return lines;
};

export const linesToBinary = (lines: GeneratedLine[]): string => {
  return lines.map(l => l.type === 'yang' ? '1' : '0').join('');
};

export const binaryToId = (binary: string): number => {
  return parseInt(binary, 2) + 1;
};

export const linesToHexagramId = (lines: GeneratedLine[]): number => {
  const binary = linesToBinary(lines);
  return binaryToId(binary);
};

export const formatTime = (date: Date): string => {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getElementByIndex = (index: number): string => {
  const elements = ['水', '火', '木', '金', '土'];
  return elements[index % 5];
};

export const getZodiacByYear = (year: number): string => {
  const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  return zodiacs[(year - 1984) % 12];
};

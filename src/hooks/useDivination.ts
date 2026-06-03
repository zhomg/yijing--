import { useState, useCallback } from 'react';
import { Hexagram, generateRandomHexagram, getHexagramById } from '../data/hexagrams';
import { generateRandomLines, GeneratedLine, linesToHexagramId } from '../utils/hexagramUtils';

export interface DivinationResult {
  hexagram: Hexagram;
  lines: GeneratedLine[];
  timestamp: Date;
}

export interface UseDivinationReturn {
  currentResult: DivinationResult | null;
  history: DivinationResult[];
  isDivining: boolean;
  startDivination: () => void;
  clearHistory: () => void;
  clearResult: () => void;
  getHexagramById: (id: number) => Hexagram | undefined;
}

const HISTORY_KEY = 'yijing_divination_history';

const loadHistory = (): DivinationResult[] => {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return parsed.map((item: DivinationResult) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }));
    }
  } catch {
    console.error('Failed to load history');
  }
  return [];
};

const saveHistory = (history: DivinationResult[]) => {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    console.error('Failed to save history');
  }
};

export const useDivination = (): UseDivinationReturn => {
  const [currentResult, setCurrentResult] = useState<DivinationResult | null>(null);
  const [history, setHistory] = useState<DivinationResult[]>(loadHistory);
  const [isDivining, setIsDivining] = useState(false);

  const startDivination = useCallback(() => {
    setIsDivining(true);
    
    setTimeout(() => {
      const lines = generateRandomLines();
      const hexagramId = linesToHexagramId(lines);
      const hexagram = getHexagramById(hexagramId) || generateRandomHexagram();
      
      const result: DivinationResult = {
        hexagram,
        lines,
        timestamp: new Date(),
      };
      
      setCurrentResult(result);
      setHistory(prev => {
        const updated = [result, ...prev].slice(0, 20);
        saveHistory(updated);
        return updated;
      });
      setIsDivining(false);
    }, 2000);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  const clearResult = useCallback(() => {
    setCurrentResult(null);
  }, []);

  return {
    currentResult,
    history,
    isDivining,
    startDivination,
    clearHistory,
    clearResult,
    getHexagramById,
  };
};

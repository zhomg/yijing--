import { Loader2 } from 'lucide-react';

interface DivinationButtonProps {
  onClick: () => void;
  isLoading: boolean;
  text?: string;
}

export const DivinationButton = ({ onClick, isLoading, text = "每日一卦" }: DivinationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`relative px-10 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
        isLoading 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : 'btn-primary'
      }`}
    >
      <span className="flex items-center gap-2.5">
        {isLoading ? (
          <>
            <Loader2 className="w-4.5 h-4.5 animate-spin" />
            <span>生成中...</span>
          </>
        ) : (
          <span>{text}</span>
        )}
      </span>
    </button>
  );
};

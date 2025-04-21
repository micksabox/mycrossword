interface ClueDisplayProps {
    allowedHtmlTags: string[];
    className?: string;
    clue: string;
    onClick: (word: string) => void;
    splitWords?: boolean;
}
export default function ClueDisplay({ allowedHtmlTags, className, clue, onClick, splitWords, }: ClueDisplayProps): import("react/jsx-runtime").JSX.Element;
export {};

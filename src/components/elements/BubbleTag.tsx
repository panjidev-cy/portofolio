interface BubbleTagProps {
  text: string;
  bgColor?: string;
}

const BubbleTag: React.FC<BubbleTagProps> = ({ text, bgColor = "bg-orange-500" }) => {
  return (
    <div className="relative inline-block">
      {/* Tag utama */}
      <div className={`text-sm text-white px-3 py-1 rounded-md ${bgColor}`}>{text}</div>

      {/* Pointer segitiga */}
      <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 ${bgColor}`} />
    </div>
  );
};

export default BubbleTag;

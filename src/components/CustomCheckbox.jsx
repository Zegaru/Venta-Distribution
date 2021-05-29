export default function CustomCheckbox({ content, isChecked, onToggle }) {
  return (
    <div className="flex items-center cursor-pointer" onClick={onToggle}>
      <div
        className={`${
          isChecked ? 'bg-primary' : 'border-[1px] border-primary'
        } transition-all w-[10px] h-[10px] transform rotate-45`}
      ></div>
      <label className="block ml-3 text-lg font-medium text-gray-700">
        {content}
      </label>
    </div>
  );
}

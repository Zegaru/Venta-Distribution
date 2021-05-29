import LoadingSpinner from './LoadingSpinner';

const buttonClasses =
  'flex justify-center py-[10px] px-[12px] border-[1px] rounded-xs transition-colors shadow-sm text-xl font-bold text-primary border-primary transition-colors hover:border-primary-dark hover:bg-primary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light focus:text-white hover:text-white';

export default function OutlineButton({
  children,
  className = '',
  isLoading = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${className} ${buttonClasses}`}
    >
      {isLoading ? <LoadingSpinner></LoadingSpinner> : children}
    </button>
  );
}

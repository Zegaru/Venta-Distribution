import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const buttonClasses =
  'flex py-[11px] px-[18px] justify-center border border-transparent rounded-sm shadow-sm text-xs font-bold tracking-widest text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light items-center transition-colors';

export default function SolidButton({
  children,
  className = '',
  isLoading = false,
  disabled = false,
  href,
  onClick,
}) {
  return href ? (
    <Link
      to={disabled ? '' : href}
      className={`${className} ${
        disabled ? 'pointer-events-none' : ''
      } ${buttonClasses}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${className} ${buttonClasses}`}
    >
      {isLoading ? <LoadingSpinner></LoadingSpinner> : children}
    </button>
  );
}

export default function LoadingSpinner({ content }) {
  return <div className="flex items-center">{content || 'Loading ...'}</div>;
}

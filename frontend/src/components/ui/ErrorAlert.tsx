export function ErrorAlert({ message, onClose }: { message: string; onClose?: () => void }) {
  if (!message) return null;
  return (
    <div
      className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm flex justify-between items-start gap-2"
      role="alert"
    >
      <span>{message}</span>
      {onClose && (
        <button type="button" onClick={onClose} className="shrink-0 underline text-red-700">
          Đóng
        </button>
      )}
    </div>
  );
}

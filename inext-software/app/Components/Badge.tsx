interface BadgeProps {
  text: string;
  icon?: string;
}

export function Badge({ text, icon }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm">
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-medium text-blue-300 tracking-wide">
        {text}
      </span>
    </div>
  );
}

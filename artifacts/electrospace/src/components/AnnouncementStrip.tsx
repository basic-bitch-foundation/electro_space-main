export default function AnnouncementStrip() {
  return (
    <div className="bg-primary/10 border-b border-primary/20 text-primary-foreground py-1.5 overflow-hidden whitespace-nowrap">
      <div className="animate-[slide_20s_linear_infinite] inline-block">
        <span className="mx-4 text-xs font-medium tracking-wider text-primary">
          ⚠ Website still under development • Orders currently limited • New products added weekly
        </span>
        <span className="mx-4 text-xs font-medium tracking-wider text-primary">
          ⚠ Website still under development • Orders currently limited • New products added weekly
        </span>
        <span className="mx-4 text-xs font-medium tracking-wider text-primary">
          ⚠ Website still under development • Orders currently limited • New products added weekly
        </span>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

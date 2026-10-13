export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-14 grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10">
      <p className="text-eyebrow pt-2">
        <span className="text-text">{index}</span> — {eyebrow}
      </p>
      <div>
        <h2 className="text-section max-w-3xl text-text">{title}</h2>
        {children ? <div className="text-body mt-5">{children}</div> : null}
      </div>
    </div>
  );
}

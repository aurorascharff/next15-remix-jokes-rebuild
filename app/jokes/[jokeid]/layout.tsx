export default function JokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="jokes-outlet">{children}</div>;
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container w-full p-20 m-auto my-10 bg-blue-1">
      {children}
    </div>
  );
}

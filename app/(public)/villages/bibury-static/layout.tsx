import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function BiburyStaticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MaterialSymbolsStylesheet />
      {children}
    </>
  );
}

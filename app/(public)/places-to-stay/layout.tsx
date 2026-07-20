import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function PlacesToStayLayout({
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

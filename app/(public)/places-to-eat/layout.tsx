import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function PlacesToEatLayout({
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

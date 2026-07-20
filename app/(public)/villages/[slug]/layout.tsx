import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function VillageDetailLayout({
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

import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function VillagesLayout({
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

import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function ThingsToDoLayout({
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

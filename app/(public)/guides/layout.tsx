import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function GuidesLayout({
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

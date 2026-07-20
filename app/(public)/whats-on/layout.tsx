import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function WhatsOnLayout({
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

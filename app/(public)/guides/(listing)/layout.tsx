import { MaterialSymbolsStylesheet } from "@/components/material-symbols-stylesheet";

export default function GuidesListingLayout({
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

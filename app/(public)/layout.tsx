import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "../../css/site-header.css";
import "../../css/site-nav.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieConsentBanner />
    </>
  );
}

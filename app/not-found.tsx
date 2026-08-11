import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "../css/site-header.css";
import "../css/site-nav.css";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-on-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-margin-mobile py-12 text-center md:px-margin-desktop md:py-24">
        <div className="mx-auto max-w-2xl space-y-6 md:space-y-8">
          <span className="font-label-caps text-label-caps tracking-[0.4em] text-limestone">
            404
          </span>
          <h1 className="font-display-lg text-[32px] md:text-display-lg">
            You&apos;ve Taken A Wrong Turn
          </h1>
          <p className="font-body-lg text-on-surface italic">
            Even the best Cotswolds walks lead somewhere unexpected.
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist, but there&apos;s
            plenty worth exploring.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="/villages"
              className="bg-limestone px-8 py-3 font-label-caps text-label-caps text-primary-container transition-colors hover:bg-white md:px-10 md:py-4"
            >
              Explore Villages
            </Link>
            <Link
              href="/"
              className="border border-limestone/40 px-8 py-3 font-label-caps text-label-caps transition-all duration-500 hover:bg-limestone hover:text-background md:px-10 md:py-4"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

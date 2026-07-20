import Image from "next/image";

type LogoProps = {
  className?: string;
};

const LOGO_SRC =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/logo/visit%20cotswolds%20logo%20light%20(transparent).png";

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Visit Cotswolds"
      width={2000}
      height={2000}
      className={className}
      priority
    />
  );
}

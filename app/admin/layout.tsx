import { LogoutButton } from "@/components/admin/logout-button";
import "./admin.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-shell min-h-dvh bg-background">
      <header className="border-b border-outline/10 bg-surface-container-low">
        <div className="mx-auto flex max-w-container-max items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
          <div>
            <p className="font-label-caps text-[10px] text-limestone/70 tracking-[0.2em]">
              Visit Cotswolds
            </p>
            <p className="font-display-lg text-xl text-on-surface">Admin</p>
          </div>
          <LogoutButton />
        </div>
      </header>
      {children}
    </div>
  );
}

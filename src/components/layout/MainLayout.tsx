import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollRestoration } from "./ScrollRestoration";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ScrollRestoration>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ScrollRestoration>
  );
}

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Button from "@/app/ui-components/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen grid grid-rows-[4rem_calc(100%-7rem)_3rem] bg-surface-panel">
      <NavBar />
      <main className="flex items-center justify-center overflow-y-auto hide-scrollbar">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-text-heading mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-subheading mb-4">
            Page Not Found
          </h2>
          <p className="text-text-para mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link href="/">
            <Button variant="primary" size="md" className="w-auto px-6">
              <span className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Back Home
              </span>
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

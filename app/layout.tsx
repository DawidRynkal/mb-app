import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.scss";
import { Footer, Header, WorkersWidget } from "@/components";
import Loading from "./loading";
import { Suspense } from "react";
import QueryProvider from "@/utils/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center">
          <div className="flex justify-center w-full max-w-[1800px]">
            <QueryProvider>
              <div className="w-full">
                <div className="bg-slate-800 h-96">
                  <Header />
                </div>
                <Suspense fallback={<Loading />}>
                  <div className="lg:container mx-auto px-10 mb-8 mt-8 lg:flex lg:flex-row-reverse">
                    {children}
                  </div>
                </Suspense>
                <Footer />
              </div>
            </QueryProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

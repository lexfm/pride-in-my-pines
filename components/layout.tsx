import Header from "./header";
import Footer from "./footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-24 p-2 pb-5 sm:pb-10 md:pb-10 lg:pb-10 font-[family-name:var(--font-geist-sans)] min-h-[90vh] bg-gray-900 mt-2">
        {children}
      </div>
      <Footer />

    </>
  );
}

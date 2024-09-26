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
      <div className="mt-[15vh] p-2 pb-5 sm:pb-10 md:b-10 lg:pb-10 font-[family-name:var(--font-geist-sans)] min-h-[40vh] bg-gray-900">
        {children}
      </div>
      <Footer />
    </>
  );
}

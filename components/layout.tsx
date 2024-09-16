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
      <div className="mt-[25vh] mb-[4vh] p-4 p-2 font-[family-name:var(--font-geist-sans)] min-h-[50vh]">
        {children}
      </div>
      <Footer />
    </>
  );
}

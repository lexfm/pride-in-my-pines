// components/Header.tsx
const Header = () => {
    return (
        <header className="relative flex items-center justify-center  min-h-48 max-h-48 md:max-h-64 lg:max-h-32 pimp-bg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Slight overlay */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-600 to-yellow-500 drop-shadow-2xl text-center">
          Pride in My Pines
        </h1>
      </header>
    );
  };
  
  export default Header;
  
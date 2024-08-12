import Image from "next/image";
export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 sm:py-12 sm:px-6">
      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Váš důvěryhodný finanční partner</h2>
          <p className="text-lg sm:text-xl mb-6">
            Využívám agilní přístupy k poskytování komplexních finančních řešení. Iterativní strategie
            podporují spolupráci a zvyšují celkovou hodnotu pro klienty.
          </p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Zadejte váš e-mail"
              className="bg-gray-800 text-white px-4 py-2 rounded-t sm:rounded-l sm:rounded-t-none w-full mb-2 sm:mb-0"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none">
              Odebírat
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="bg-blue-500 rounded-lg p-4 w-full aspect-video flex items-center justify-center">
            <span className="text-xl sm:text-2xl">Placeholder pro obrázek</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-black p-2 rounded text-sm sm:text-base">
            <p className="font-bold">47.5k</p>
            <p className="text-xs sm:text-sm">Spokojených klientů</p>
          </div>
          <div className="absolute top-4 right-4 bg-white text-black p-2 rounded">
            <p className="font-bold text-sm sm:text-base">Graf</p>
          </div>
        </div>
      </section>
    </div>
  );
}
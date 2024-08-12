import Image from "next/image";
export default function Home() {
  return (
    <div className="container mx-auto py-12 px-6">
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl font-bold mb-4">Váš důvěryhodný finanční partner</h2>
          <p className="text-xl mb-6">
            Využívám agilní přístupy k poskytování komplexních finančních řešení. Iterativní strategie
            podporují spolupráci a zvyšují celkovou hodnotu pro klienty.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Zadejte váš e-mail"
              className="bg-gray-800 text-white px-4 py-2 rounded-l w-full"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">
              Odebírat
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-blue-500 rounded-lg p-4 w-full h-96 flex items-center justify-center">
            <span className="text-2xl">Placeholder pro obrázek</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-black p-2 rounded">
            <p className="font-bold">47.5k</p>
            <p className="text-sm">Spokojených klientů</p>
          </div>
          <div className="absolute top-4 right-4 bg-white text-black p-2 rounded">
            <p className="font-bold">Graf</p>
          </div>
        </div>
      </section>
    </div>
  );
}
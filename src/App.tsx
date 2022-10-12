import './styles/main.css';

import logoImg from "./assets/nlw-esports-logo.svg";

function App(){
    return(
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <img src={logoImg} alt="" />
            <h1 className="text-6xl text-white font-black mt-20">
                seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
            </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
            <a href="relative rounded-lg overflow-hidden">
                <img src="/game-1.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
                <strong className="font-bold text-white block overflow-hidden h-4 text-sm">League of Legends</strong>
                <span className="text-zinc-300 text-sm block mt-1 overfolw">4 Anuncios</span>
            </div>
            </a>
            <a href="relative rounded-lg overflow-hidden">
                <img src="/game-2.png" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
                <strong className="font-bold text-white block overflow-hidden h-4 text-sm">DOTA 2</strong>
                <span className="text-zinc-300 text-sm block mt-1 overfolw">4 Anuncios</span>
            </div>
            </a>
            <a href="relative rounded-lg overflow-hidden">
                <img src="/game-3.png" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
                <strong className="font-bold text-white block overflow-hidden h-4 text-sm">Counter-Strike</strong>
                <span className="text-zinc-300 text-sm block mt-1 overfolw">4 Anuncios</span>
            </div>
            </a>
            <a href="relative rounded-lg overflow-hidden">
                <img src="/game-4.png" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
                <strong className="font-bold text-white block overflow-hidden h-4 text-sm">Apex Legenhs</strong>
                <span className="text-zinc-300 text-sm block mt-1 overfolw">4 Anuncios</span>
            </div>
            </a>
            <a href="relative rounded-lg overflow-hidden">
                <img src="/game-5.png" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
                <strong className="font-bold text-white block overflow-hidden h-4 text-sm">Fortinite</strong>
                <span className="text-zinc-300 text-sm block mt-1 overfolw">4 Anuncios</span>
            </div>
            </a>
            <a href="relative">
                <img src="/game-6.png" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0">
                <strong className="font-bold text-white block overflow-hidden h-4 text-sm">World of Warcraft</strong>
                <span className="text-zinc-300 text-sm block mt-1 overfolw">4 Anuncios</span>
            </div>
            </a>
        </div>

        <div className="bg-[#2A2634]"></div>
        </div>

    )
}

export default App
import './styles/main.css';

import logoImg from "./assets/nlw-esports-logo.svg";

function App(){
    return(
        <div className="max-w-[1344px] mx-auto flex flex-col items-center">
            <img src={logoImg} alt="" />
        </div>
    )
}

export default App

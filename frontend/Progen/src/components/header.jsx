import logo from "../assets/contract.png"
import "./header.css"
function Header(){
    return(
        <>
            <div className="flex p-2 font-mono bg-black text-white sticky top-0 bottom-0">
                <div className="logo w-10 mx-3"><img src={logo} alt="not available" /></div>
                <span className="font-serif text-3xl font-bold pt-1.5 px-1">ProGen</span>
                <div className="flex flex-row pt-2 text-bold basis-5/6 justify-end font-mono font-semibold mt-2">
                    <div className="btn basis-20 hover:bg-slate-500">Home</div>
                    <div className="btn basis-20 hover:bg-slate-500">About</div>
                    <div className="btn basis-20 hover:bg-slate-500">Contact</div>
                </div>
            </div>
            {/* <p>This is a para</p> */}
        </>
    )
}
export default Header;
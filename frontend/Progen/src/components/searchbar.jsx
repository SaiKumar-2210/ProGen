import sendicon from "../assets/send-message.png"
function Searchbar(){
    return(
        <>
        <div className="place-self-center relative">
            <input type="text" placeholder="Enter the topic" name="" id="" className="inline static placeholder:text-center w-xl px-3 h-12 rounded-4xl my-10 border-2 border-slate-500 pr-20"/>
            <button className="cursor-pointer"><img className="size-9 absolute right-3 top-11.5" src={sendicon} alt="" /></button>
            
        </div>
            
        </>
    )
}
export default Searchbar;
import sendicon from "../assets/send2.png"
import { useState ,useRef,useEffect} from "react";
import * as docx from "docx-preview"
const backendURL= "http://localhost:3000";
//
function Searchbar(){
    const [loading,setLoading]=useState(false);
    const container= useRef(null);
    const handlePreview = async ()=>{
        setLoading(true);
        try{
            const respone = await fetch("http://localhost:5000/");
            const data=await respone.json();

            const byChar=atob(data.filedata);
            const byNum= new Array(byChar.length);
            for(let i=0;i<byChar.length;i++){
                byNum[i]=byChar.charCodeAt(i);
            }
            const byArr= new Uint8Array(byNum);
            const blob= new Blob([byArr],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
            if (container.current){
                container.current.innerHTML="";
                await docx.renderAsync(blob,container.current);
            }
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    }
    return(
        <>
        <div className="place-self-center relative">
            <input type="text" placeholder="Enter the topic" name="" id="" className="inline static placeholder:text-center w-xl px-3 h-12 rounded-4xl my-10 border-2 border-slate-500 pr-20"/>
            <button className="cursor-pointer" onClick={handlePreview}><img className="size-11 absolute right-1 top-10.5" src={sendicon} alt="" /></button>    
        </div>
        <div className="h-10 w-screen border-4" ref={container}></div>
            
        </>
    )
}
export default Searchbar;
import createimage from "../assets/magic-wand.png"
import paperimage from "../assets/paper-stack.png"
import flowchartimg from "../assets/flowchart.png"
function Content(){
    return(
    <>
        <div className="flex h-80 justify-center-safe justify-evenly w-full items-end mb-3">
            <div className="inline w-auto p-3 border-2 rounded-md">
                <img className="w-20 inline mr-4" src={createimage} alt="" />
                <span>Generate Abstracts</span>
            </div>
            <div className="inline w-auto p-3 border-2 rounded-md">
                <img className="w-20 inline mr-4" src={paperimage} alt="" />
                <span>Finish papers in seconds</span>
            </div>
            <div className="inline w-auto p-3 border-2 rounded-md">
                <img className="w-20 inline mr-4" src={flowchartimg} alt="" />
                <span>Get a plan on how to solve</span>
            </div>
        </div>
    </>
    )
}
export default Content;
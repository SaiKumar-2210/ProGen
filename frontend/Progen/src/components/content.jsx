import createimage from "../assets/magic-wand.png"
import paperimage from "../assets/paper-stack.png"
import flowchartimg from "../assets/flowchart.png"
function Content(){
    return(
    <>
        <div className="static">
        <div className="flex absolute bottom-90 justify-center-safe justify-evenly w-full">
            <div className="inline w-auto">
                <img className="w-20 inline mr-4" src={createimage} alt="" />
                <span>Generate Abstracts</span>
            </div>
            <div className="inline w-auto">
                <img className="w-20 inline mr-4" src={paperimage} alt="" />
                <span>Finish papers in seconds</span>
            </div>
            <div className="inline w-auto">
                <img className="w-20 inline mr-4" src={flowchartimg} alt="" />
                <span>Get a plan on how to solve</span>
            </div>
        </div>
        </div>
    </>
    )
}
export default Content;
import React, {useState, useEffect} from "react"

import close from "../../icon/close.png"
import left from "../../icon/left.png"
import right from "../../icon/right.png"

const Slider = ({submit, setSubmit, choose, setChoose, type}) => {
    
    const [current_image, setCurrent_image] = useState('')
    useEffect(() => {
        setCurrent_image(choose-1)
        console.log("current image = " + current_image)
    }, [choose])

    const bg_exs = [
        ["alone", "matrix", "femka", "asia", "ugly"],
        ["portf1", "portf3", "portf2", "portf4", "portf5"],
        ["portf6", "portf8", "portf7", "portf9", "portf10"]
    ]
    const icons = [left, right]

    useEffect(() => {
        document.addEventListener("click", function(e){
            var x = e.clientX;
            var y = e.clientY;
            var elementMouseIsOver = document.elementFromPoint(x, y);
            if(elementMouseIsOver.id=="slides"){
                console.log("menu");
                console.log("id = " + elementMouseIsOver.id)
                setSubmit(false)
            }
            else{
                console.log("not menu");
            }
        })
    }, []) 

    const close_slider = () => {
        setSubmit(false)
    }

    const t_left = () => {
        if(current_image !== 0)
            setCurrent_image(current_image - 1)
        else 
            setCurrent_image(4)
    }
    const t_right = () => {
        if(current_image !== 4)
            setCurrent_image(current_image + 1)
        else 
            setCurrent_image(0)
    }

    return(
        <>
            {
                
                // submit ? 
                    <div id="slides" className={submit ? "fixed top-0 flex justify-center items-center h-full w-full z-[7999] bg-special_pop_up" : "hidden"}>
                        <div className={submit ? "relative w-max h-max p-[50px]" : ""}>
                            <div className="close_slider" onClick={close_slider}>
                                <img src={close} />
                            </div>
                            <div className="slider_size">
                                <div>
                                    <div className="flex slider_size">
                                        <div className={`bg-${bg_exs[type][current_image]} slider_size`}></div> 
                                        <div className={"corner_up"}></div>
                                        <div className={"corner_down"}></div>
                                        <div className={"trapezoid_up_about"}></div> 
                                        <div className={"trapezoid_down_about"}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-center xl:mt-[16px] md:mt-[15px] mt-[12px]">
                                <div className="relative w-[96px] xl:mr-[16px] md:mr-[14px] mr-[12px]" 
                                    onClick={t_left}
                                >
                                    <div className="corner_up_icon"></div>
                                    <div className="corner_down_icon"></div>
                                    <div className="w-full h-full p-[2.5px] bg-poison_green button_header_octagon">
                                        <div className="start_icon">
                                            <div className="">
                                                <img src={left} />
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="relative w-[96px] xl:mr-[16px] md:mr-[14px] mr-[12px]"
                                    onClick={t_right}
                                >
                                    <div className="corner_up_icon"></div>
                                    <div className="corner_down_icon"></div>
                                    <div className="w-full h-full p-[2.5px] bg-poison_green button_header_octagon">
                                        <div className="start_icon">
                                            <div className="">
                                                <img src={right} />
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>    
                    </div> 
                // :
                // <div className="hidden"></div>
            }
        </>        
    )
}

export default Slider
import React, {useState, useEffect, useRef} from "react"

import darkSide from "../../darkSide"

const StartPopUp = () => {

    const [show, setShow] = useState(false)
    let menuRef = useRef();

    const content = darkSide.popup

    useEffect(() => {
        let handler = (e)=>{
          if(menuRef.current.contains(e.target)){
            setShow(false)
            let but_ef = document.getElementById("but").style
            but_ef.backgroundColor = "#408080"
            setTimeout(() => {
                but_ef.backgroundColor = "#0FF"
            }, 300)
          }     
        }
    
        document.addEventListener("mousedown", handler)
    
        return() =>{
          document.removeEventListener("mousedown", handler)
        }   
    });

    return (
        <div className={!show ? "fixed h-[100vh] w-full z-[9999]" : "hidden"} ref={menuRef}>
            <div id="popupp" className={!show ? "fixed flex w-full xl:h-[270px] md:h-[292px] h-[348px] z-[10000] justify-center bottom-0 bg-special_pop_up duration-1000" : "fixed w-full flex z-[1000] justify-center duration-1000 bottom-[-300px]"}>
                <div className="xl:w-[1200px] md:w-[90%] w-[90%]">
                    <div className="xl:mt-[40px] md:mt-[32px] mt-[24px]">
                        <div className="text-white xl:text-[18px] md:text-[16px] text-[14px] xl:leadig-[26px] md:leadig-[24px] leadig-[22px]">
                            {content.title}
                        </div>
                    </div>
                    <div className="xl:mt-[12px] md:mt-[8px] mt-[4px]">
                        <div className="text-white xl:text-[16px] md:text-[14px] text-[12px] xl:leadig-[24px] md:leadig-[22px] leadig-[20px]">
                            {content.content}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex mt-[24px]">
                            <div className="xl:flex cursor-pointer xl:w-[201px] md:w-[173px] w-[175px] mr-[14px]" onClick={() => setShow(true)}>
                                <div id={"but"} className="flex justify-center w-full bg-trapezoid hover:bg-poison_green duration-700 py-[14px] button_header_octagon">
                                    <div className="font-exo xl:text-[21px] md:text-[18px] text-[15px] xl:leadig-[28px] md:leading-[24px] leading-[20px] w-max text-turbid_black uppercase font-semibold">
                                        {content.button}
                                    </div>
                                </div>
                            </div>
                            <div className="relative xl:flex cursor-pointer w-max h-max">
                                <div className="py-[14px] xl:px-[28px] md:px-[24px] px-[20px] button_header_octagon bg-back_icon opacity-45">
                                    <div className="corner_up_icon"></div>
                                    <div className="corner_down_icon"></div>
                                    <div className="font-exo font-semibold w-max text-trapezoid xl:text-[21px] md:text-[18px] text-[15px] xl:leadig-[28px] md:leading-[24px] leading-[20px] uppercase">
                                        {content.cookie}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}


export default StartPopUp
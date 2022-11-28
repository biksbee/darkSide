import React, {useState, useEffect} from "react"

import close from "../../icon/close.png"
import darkSide from "../../darkSide"

const CheckData = ({i, send_ans}) => {

    const content = darkSide.form.forms
    const text = [i.name, i.phone, i.box, i.time]

    useEffect(() => {
        document.addEventListener("click", function(e){
            var x = e.clientX;
            var y = e.clientY;
            var elementMouseIsOver = document.elementFromPoint(x, y);
            if(elementMouseIsOver.id=="question"){
                console.log("answer");
                console.log("id = " + elementMouseIsOver.id)
                i.setShow(false)
            }
            else{
                console.log("not answer");
            }
        })
    }, []) 

    const user_answer = () => {
        send_ans(true)
        i.setShow(false)
    }

    const close_slider = () => {
        i.setShow(false)
    }

    return (
        <div id="question" className={i.show ? "fixed top-0 left-0 flex justify-center items-center h-full w-[100%] z-[7999] bg-special_pop_up" : "hidden"}>
            <div className="relative w-max h-max p-[50px]">
                <div className="close_slider" onClick={close_slider}>
                    <img src={close} />
                </div>
                <div className="relative  xl:w-[528px] xl:h-[536px] md:w-[456px] md:h-[408px] w-[384px] h-[280px] bg-calendar_border xl:octagon md:octagon_md octagon_sm xl:p-[3px] md:p-[2.7px] p-[2.3px]">
                    <div className={"corner_up"}></div>
                    <div className={"corner_down"}></div>
                    <div className={"trapezoid_up_about"}></div> 
                    <div className={"trapezoid_down_about"}></div>
                    <div className="bg-back_page w-full h-full xl:octagon md:octagon_md octagon_sm xl:p-[40px] md:p-[32px] p-[24px]">
                        <div className="flex justify-center items-center mb-[20px]">
                            <div className="w-max h-max">
                                {
                                    text.map((item, index) => (
                                        <div key={index} className="flex">
                                            <div className="check_user_text mr-[15px] text-trapezoid">
                                                {content[index]}
                                            </div>
                                            <div className="check_user_text text-white">
                                                {item}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>  
                        </div>  
                        <div>    
                            <div className="cursor-pointer w-full mb-[25px]" onClick={user_answer}> 
                                <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                                    <div className="font-exo xl:text-[20px] md:text-[18px] text-[14px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">    
                                        ПРИНЯТЬ
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer w-full" onClick={close_slider}> 
                                <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                                    <div className="font-exo xl:text-[20px] md:text-[18px] text-[14px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">
                                        ИЗМЕНИТЬ
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

export default CheckData
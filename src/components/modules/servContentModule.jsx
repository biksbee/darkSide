import React, {useState} from "react"
import { Link } from "react-scroll"

import darkSide from "../../darkSide"
import SwitcherModule from "./switcherModule"
import DopInfModules from "./dopInfModules"

import whiteI from "../../icon/whiteI.png"
import blackI from "../../icon/blackI.png"


const ServContentModule = ({style, type_box}) => {
    const num = style    

    const blockContent = darkSide.services.content[Object('block' + num)]
    const [treker, setTreker] = useState(0)
    const [show, setShow] = useState(false)
    

    const choose_type = (note) => {
        setTreker(note)
    }

    const choose_box = () => {
        let box_type = ""
        if(treker === 0)
            box_type = "MAX"
        else
        box_type = "LIGHT"
    
        const data = blockContent.title + ' ' + box_type
        type_box(data)
    } 
    
    const detect_icon = (index) => {
        for(let i of blockContent.hover_point[0][treker])
            console.log(i)    
    
    }
    detect_icon()

    return (
        <div className="absolute z-[50] xl:w-[304px] md:w-[90%]">
            <div className="relative h-[24px] w-[100%] md:mb-[16px] mb-[8px]">
                {/* <div className={num !== 2 ? "border-[1px] border-[#000] absolute z-[100] h-full w-full box-border inline-flex switcher_corner" : null}></div> */}
                <div className={num !== 2 ? "corner_up_switcher" : null}></div>
                <div className={num !== 2 ? "corner_down_switcher" : null}></div>
                <div className="flex flex-shrink-0 h-full w-full bg-poison_green switcher_octagon">
                    <div id="max" className={num !== 2 ? "switcher_content bg-back_block" : "switcher_content bg-trapezoid"}>
                        <SwitcherModule n={num} submit={choose_type}/>    
                    </div>
                </div>
            </div>    
            <div className="flex justify-center md:mb-[16px] mb-[8px] w-full">
                <div className={num !== 2 ? "xl:text-[40px] md:text-[32px] text-trapezoid font-bold w-max" : "xl:text-[40px] md:text-[32px] font-bold w-max text-turbid_black"}>
                    {blockContent.title}
                </div>
            </div>
            <div className="xl:h-[336px] md:h-[156px] h-[264px]">
                <div className="xl:h-[238px]">
                    <div className={num !== 2 ? "service_question_title text-deep_grey" : "service_question_title text-less_turbid_black"}>
                        {blockContent.question_title[0]}
                    </div>
                    <ul className={num !== 2 ? "service_content text-white" : "service_content text-turbid_black"}>
                        {blockContent.list_serv[0][treker].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <li className="list-disc ml-[30px]">{item}</li>
                                <DopInfModules submit={num} detect={treker} cheker={index}/>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <div className={num !== 2 ? "service_question_title text-deep_grey" : "service_question_title text-less_turbid_black"}>
                        {blockContent.question_title[1]}
                    </div>
                    <ul className={num !== 2 ? "service_content text-white " : "service_content text-turbid_black"}>
                        {blockContent.list_serv[1][treker].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <li className="list-disc ml-[30px]">{item}</li>
                                <DopInfModules submit={num} detect={treker} cheker={index}/>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex w-full justify-center mb-[16px] xl:mt-[24px] md:mt-[16px] mt-0">
                <div className={num !== 2 ? "service_price text-white" : "service_price text-turbid_black"}>
                    {blockContent.price[treker]}
                </div>            
            </div>
            <div className="flex justify-center mb-[12px]">
                <div className={num !== 2 ? "service_user_text text-white" : "service_user_text text-less_turbid_black"}>
                    {blockContent.user_text}
                </div>
            </div>
            <Link className="cursor-pointer" onClick={choose_box}
                to={"cont"} spy={true} smooth={true} offset={50} duration={500}
            >
                <div className={num !== 2 ? "flex justify-center w-full bg-trapezoid hover:bg-poison_green duration-700 py-[14px] button_octagon" : "flex justify-center w-full bg-turbid_black hover:bg-hover_turbid_black duration-700 py-[14px] button_octagon"}>
                    <div className={num !== 2 ? "service_button text-turbid_black" : "service_button text-trapezoid "}>
                        {blockContent.button}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ServContentModule
import React, {useState, useEffect} from "react"

import Slider from "../slider/Slider"
import PortModule from "../modules/PortModule"
import darkSide from "../../darkSide"

const Portfolio = ({open}) => {

    const content = darkSide.portfolio

    const [select, setSelect] = useState(0)
    const [show, setShow] = useState(false)
    const [select_for_port, setSelect_for_port] = useState("")

    const open_slide = (a) => {
        setShow(a)
    }
    const number_slide = (a) => {
        setSelect_for_port(a)
    } 

    return (
        <div id="port" className="flex w-full justify-center pt-[200px]">
                <div className="w-full m-0">
                    <div className="pre_title flex justify-center">
                        <div className="pre_style  xl:text-[18px] md:text-[16px] text-14px text-trapezoid uppercase font-bold w-max">
                            {content.preTitle}
                        </div>
                    </div>
                    <div className="custom_title flex justify-center mb-[64px]">
                        <div className="title_style xl:text-[56px] md:text-[48px] text-[40px] text-white text-center font-bold w-max">
                            {content.title}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center mb-[16px]">
                            <div className="flex xl:w-[1200px] md:w-[704px] w-[312px]">
                                <div className={select === 0 ? "text-white hover:text-trapezoid portfolio_selector cursor-pointer" :
                                    "text-white opacity-[0.74] hover:text-trapezoid portfolio_selector cursor-pointer"}
                                    onClick={() => setSelect(0)}
                                >
                                    {content.selector[0]}
                                </div>
                                <div className={select === 1 ? "mx-[32px] text-white hover:text-trapezoid portfolio_selector cursor-pointer" :
                                    "mx-[32px] text-white hover:text-trapezoid opacity-[0.64] portfolio_selector cursor-pointer"}
                                    onClick={() => setSelect(1)}
                                >
                                    {content.selector[1]}
                                </div>
                                <div className={select === 2 ? "text-white hover:text-trapezoid portfolio_selector cursor-pointer" :
                                    "text-white hover:text-trapezoid opacity-[0.64] portfolio_selector cursor-pointer"}
                                    onClick={() => setSelect(2)}
                                >
                                    {content.selector[2]}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="md:grid block grid-rows-2 grid-flow-col gap-6 xl:w-[1200px] md:w-[704px]">
                                <PortModule type={select} setType={setSelect} submit={open_slide} send={number_slide}/>
                            </div>
                        </div>
                    </div>
                </div>
            <Slider submit={show} setSubmit={setShow} choose={select_for_port} type={select}/>        
        </div>            
    )
}

export default Portfolio
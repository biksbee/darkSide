import React, {useState} from "react"

import darkSide from "../../darkSide"

import ModuleCustomBorder from "../modules/MouduleCustomBorder"

const Services = ({type_box}) => {
    
    const serviceContent = darkSide.services

    const send = (note) => {
        type_box(note)
    }

    return (
        <div id="serv" className="pt-[200px]">
            <div className="pre_title flex justify-center">
                <div className="pre_style  xl:text-[18px] md:text-[16px] text-14px text-trapezoid uppercase font-bold w-max">
                    {serviceContent.preTitle}
                </div>
            </div>
            <div className="custom_title flex justify-center mb-[64px]">
                <div className="title_style xl:text-[56px] md:text-[48px] text-[40px] text-white font-bold w-max text-center">
                    {serviceContent.title}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="xl:flex xl:w-max xl:h-max md:w-[90%] w-max h-full ">
                    <ModuleCustomBorder submit={1} user_choose={send}/>
                    <ModuleCustomBorder submit={2} user_choose={send}/>
                    <ModuleCustomBorder submit={3} user_choose={send}/> 
                </div>
            </div>
        </div>
    )
}

export default Services
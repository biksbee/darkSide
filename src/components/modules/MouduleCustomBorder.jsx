import React from "react"

import ServContentModule from "./servContentModule"

const ModuleCustomBorder = ({submit, user_choose}) => {

    const num = submit

    const send = (note) => {
        user_choose(note)
    }

    return (
        <div className={num !== 2 ? "main_custom_border bg-poison_green" : "main_custom_border bg-trapezoid"}>
            <div className={num !== 2 ? "corner_up" : null}></div>
            <div className={num !== 2 ? "corner_down" : null}></div>
            <div className={"shape_outer"}>
                <div className={num !== 2 ? "shape_inner bg-back_block xl:m-[2.9px] md:m-[2.6px] m-[2.3px]" : "shape_inner bg-trapezoid"}>
                    <ServContentModule style={num} type_box={send}/>
                </div>
            </div>    
            <div className={num !== 2 ? "trapezoid_up_about" : null}></div> 
            <div className={num !== 2 ? "trapezoid_down_about" : null}></div>    
        </div>           
    )
}

export default ModuleCustomBorder
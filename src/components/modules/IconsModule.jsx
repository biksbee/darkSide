import React from "react"

import inst from "../../icon/inst.png"
import vk from "../../icon/vk.png"
import tg from "../../icon/tg.png"
import tik from "../../icon/tik.png"
import darkSide from "../../darkSide"


const IconsModule = ({submit}) => {

    const content = darkSide.link
    const determinant = submit
    const icons = [inst, vk, tg, tik]
    const links = [content.inst, content.vk, content.tg, content.tik]

    return (
        <div className={!determinant ? "flex xl:w-[432px] md:w-[100%] w-[100%] xl:justify-between" : "flex w-full justify-between"}>
            {
                icons.map((item, index) => (
                    <a key={index} href={links[index]} target="_blank" className={!determinant ? "relative w-[96px] xl:mr-0 md:mr-[10px] mr-[8px]" : "relative w-[23%]"}>
                        <div className="corner_up_icon"></div>
                        <div className="corner_down_icon"></div>
                        <div className="w-full h-full p-[2.5px] bg-poison_green button_header_octagon">
                            <div className="start_icon">
                                <div className="">
                                    <img src={item} />
                                </div>
                            </div>
                        </div>    
                    </a>
                ))
            }
        </div>
    )
}

export default IconsModule
import React from "react"

import darkSide from "../../darkSide"
import location from "../../icon/location.png"
import equepment from "../../icon/equipment.png"
import light from "../../icon/light.png"
import geo from "../../icon/geo.png"
import comfort from "../../icon/comfort.png"
import pure from "../../icon/pure.png"

const Why = () => {

    const content = darkSide.why 
    const icons = [location, equepment, light, geo, comfort, pure]

    return (
        <div className="flex w-full justify-center pt-[200px] md:pl-0 pl-[24px]">
                <div className="md:w-full w-[90%] m-0">
                    <div className="pre_title flex justify-center">
                        <div className="pre_style  xl:text-[18px] md:text-[16px] text-14px text-trapezoid uppercase font-bold w-max">
                            {content.preTitle}
                        </div>
                    </div>
                    <div className="custom_title flex justify-center mb-[64px]">
                        <div className="title_stylexl:text-[56px] md:text-[48px] text-[40px] text-white font-bold w-max">
                            {content.title}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid xl:grid-rows-2 grid-flow-col xl:gap-x-[177px] gap-x-[24px] gap-y-[56px] md:grid-rows-3 grid-rows-6">
                            {
                                icons.map((item, index) => (
                                    <div key={index} className="">
                                        <div className="mb-[26px]">
                                            <div>
                                                <img src={item} />
                                            </div>
                                        </div>
                                        <div className="mb-[8px]">
                                            <div className="md:text-[24px] text-[18px] text-white font-bold">
                                                {content.sub_title[index]}
                                            </div>
                                        </div>
                                        <div className="xl:w-[282px] w-[340px]">
                                            <div className="md:text-[18px] text-[16px] text-white opacity-[0.74] font-normal">
                                                {content.content[index]}
                                            </div>
                                        </div>        
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Why
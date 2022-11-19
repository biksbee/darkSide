import React from "react"

import darkSide from "../../darkSide"
import about from "../../image/about.png"

const About = () => {

    const content = darkSide.about

    return (
        <div id="about" className="flex w-full justify-center pt-[200px]">
            <div className="xl:flex block xl:w-[1200px] md:w-[90%] w-[90%] justify-between">
                <div className="lx:pb-0 md:pb-0 pb-[32px]">
                    <div className="pre_title flex">
                        <div className="pre_style xl:text-[18px] md:text-[16px] text-14px text-trapezoid leading-[26px] uppercase font-bold w-max">
                            {content.preTitle}
                        </div>
                    </div>
                    <div className="custom_title flex mb-[64px]">
                        <div className="title_style xl:text-[56px] xl:leading-[64px] md:text-[48px] text-[40px] text-white font-bold w-max">
                            {content.title}
                        </div>
                    </div>
                    <div>
                        <div className="mb-[26px]">
                            <div className="about_description">
                                {content.content[0]}
                            </div>
                        </div>
                        <div className="mb-[26px]">
                            <div className="about_description">
                                {content.content[1]}
                            </div>
                        </div>
                        <div className="">
                            <div className="about_description">
                                {content.content[2]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="about_image">
                        <div className={"corner_up"}></div>
                        <div className={"corner_down"}></div>
                        <div className={"trapezoid_up_about"}></div> 
                        <div className={"trapezoid_down_about"}></div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default About
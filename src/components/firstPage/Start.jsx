import React from "react"
import { Link } from "react-scroll"

import darkSide from "../../darkSide"
import IconsModule from "../modules/IconsModule"

const Start = () => {

    const content = darkSide.start

    return (
        <div id="first" className="first_page xl:pl-[100px] md:pl-[32px] pl-[24px]">
            <div className="flex pt-[160px]">
                <div className="xl:text-[72px] md:text-[56px] text-[40px] text-white font-bold xl:leading-[80px] md:leading-[64px] leading-[48px]">
                    {content.slogan}
                </div>
            </div>
            <div>
                <div className="xl:text-[72px] md:text-[56px] text-[40px] text-white font-bold xl:leading-[80px] md:leading-[64px] leading-[48px]">
                    {content.slogan_con}
                </div>
            </div>
            <div className="mb-[32px]">
                <div className="xl:text-[72px] md:text-[56px] text-[40px] text-trapezoid font-bold xl:leading-[80px] md:leading-[64px] leading-[48px]">
                    {content.blue_slogan}
                </div>
            </div>
            <div className="md:w-[588px] w-[312px] mb-[64px]">
                <div className="xl:text-[18px] md:text-[16px] text-[14px] text-white font-notmal xl:leading-[26px] md:leading-[24px] leading-[22px]">
                    {content.explanation}
                </div>
            </div>
            <Link className="cursor-pointer w-[261px] mb-[124px] inline-block"
                to={"serv"} spy={true} smooth={true} offset={50} duration={500}
            >
                <div className="flex justify-center w-full bg-trapezoid py-[14px] button_header_octagon hover:bg-poison_green duration-700">
                    <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] text-turbid_black uppercase w-max font-semibold">
                        {content.button}
                    </div>
                </div>
            </Link>
            <div className="pb-[96px] xl:block hidden">
                <IconsModule className="" />    
            </div>
        </div>
    )
}

export default Start
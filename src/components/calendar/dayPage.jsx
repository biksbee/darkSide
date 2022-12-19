import React from "react"

import vector_right from "../../icon/vector_right.png"
import vector_left from "../../icon/vector_left.png"
import vector_left_s from "../../icon/vector_left_s.png"
import vector_right_s from "../../icon/vector_right_s.png"

import Day from "./Day"

const DayPage = ({day_of_the_week, days_start_month, setDd, show, d, setNext}) => {



    return(
        <>
            <div className="w-full h-max flex justify-center xl:mb-[8px] md:mb-[4px] mb-[2px]">
                <div className="w-max font-bold xl:text-[18px] md:text-[16px] text-[14px] text-trapezoid xl:leading-[26px] md:leading-[24px] leading-[22px]">
                    ВЫБЕРИТЕ ДАТУ
                </div>
            </div>
            
            <div className="w-full flex">
                {
                    day_of_the_week.map((item, index) => (
                        <div key={index} className="xl:h-[64px] xl:w-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px] flex justify-center items-center">
                            <div className={`${index < 5 ? "text-footer_line" : "text-calendar_border"} time_day_week`}>
                                {item}                                               
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-7">
                {
                    d.map((item, index) =>(
                        <Day key={index} i={{item, index, days_start_month, show}} get={setDd} />    
                    ))
                }       
            </div>
            <div className="cursor-pointer w-full mt-[30px]" onClick={() => setNext(2)}> 
                <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                    <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">
                        ДАЛЕЕ
                    </div>
                </div>
            </div>
        </>
    )
}

export default DayPage
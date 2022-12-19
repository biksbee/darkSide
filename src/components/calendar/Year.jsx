import React from "react"

import vector_right from "../../icon/vector_right.png"
import vector_left from "../../icon/vector_left.png"
import vector_left_s from "../../icon/vector_left_s.png"
import vector_right_s from "../../icon/vector_right_s.png"

const Year = ({current_month, setCurrent_month, setCurrent_year, current_year, month_rus, setNext}) => {

    const t_left_year = () => {
        setCurrent_year(current_year - 1)
    }
    const t_right_year = () => {
        setCurrent_year(current_year + 1)
    }
    const t_left = () => {
        if(current_month === 0){
            setCurrent_month(11)
            setCurrent_year(current_year - 1)
        } else 
            setCurrent_month(current_month - 1)
    }
    const t_right = () => {
        if(current_month === 11) {
            setCurrent_month(0)
            setCurrent_year(current_year + 1)
        } else 
            setCurrent_month(current_month + 1)
    }

    return(
        <>
            <div className="w-full h-max flex justify-center">
                <div className="w-max font-bold xl:text-[18px] md:text-[16px] text-[14px] text-trapezoid xl:leading-[26px] md:leading-[24px] leading-[22px]">
                    ВЫБЕРИТЕ ГОД
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="xl:w-[48px] xl:h-[48px] md:w-[40px] md:h-[40px] w-[32px] h-[32px] flex justify-center items-center" onClick={t_left_year}>
                    <img src={vector_left} className="xl:block hidden"/>
                    <img src={vector_left_s} className="xl:hidden block"/>
                </div>
                <div className="w-max font-bold text-white xl:text-[40px] md:text-[32px] text-[24px] xl:leading-[48px] md:leading-[40px] leading-[32px]">
                    {current_year}
                </div>
                <div className="xl:w-[48px] xl:h-[48px] md:w-[40px] md:h-[40px] w-[32px] h-[32px] flex justify-center items-center" onClick={t_right_year}>
                    <img src={vector_right} className="xl:block hidden"/>
                    <img src={vector_right_s} className="xl:hidden block"/>
                </div>
            </div>
            <div className="w-full h-max flex justify-center mt-[30px]">
                <div className="w-max font-bold xl:text-[18px] md:text-[16px] text-[14px] text-trapezoid xl:leading-[26px] md:leading-[24px] leading-[22px]">
                    ВЫБЕРИТЕ МЕСЯЦ
                </div>
            </div>
            <div className="w-full flex justify-between xl:mb-[8px] md:mb-[4px] mb-0">
                <div className="xl:w-[48px] xl:h-[48px] md:w-[40px] md:h-[40px] w-[32px] h-[32px] flex justify-center items-center" onClick={t_left}>
                    <img src={vector_left} className="xl:block hidden"/>
                    <img src={vector_left_s} className="xl:hidden block"/>
                </div>
                <div className="w-max font-bold text-white xl:text-[40px] md:text-[32px] text-[24px] xl:leading-[48px] md:leading-[40px] leading-[32px]">
                    {month_rus[current_month]}
                </div>
                <div className="xl:w-[48px] xl:h-[48px] md:w-[40px] md:h-[40px] w-[32px] h-[32px] flex justify-center items-center" onClick={t_right}>
                    <img src={vector_right} className="xl:block hidden"/>
                    <img src={vector_right_s} className="xl:hidden block"/>
                </div>
            </div>
            <div className="cursor-pointer w-full mt-[30px]" onClick={() => setNext(1)}> 
                <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                    <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">
                        ДАЛЕЕ
                    </div>
                </div>
            </div>
        </>
    )
}

export default Year
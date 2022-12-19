import React from "react"

import Time from "./Time"

const TimePage = ({setTt, show, time, setNext={setNext}}) => {
    
    return(
        <>
            <div className="w-full h-max flex justify-center">
                <div className="w-max font-bold xl:text-[18px] md:text-[16px] text-[14px] text-trapezoid xl:leading-[26px] md:leading-[24px] leading-[22px]">
                    ВЫБЕРИТЕ ВРЕМЯ
                </div>
            </div>
            <div className="grid grid-cols-4">
                {
                    time.map((item, index) => (
                        <Time key={index} i={{item, index, show}} set={setTt}/>
                    ))
                }        
            </div>
            <div className="cursor-pointer w-full mt-[30px]" onClick={() => setNext(3)}> 
                <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                    <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">
                        ДАЛЕЕ
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimePage
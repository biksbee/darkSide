import React, {useState, useEffect} from "react"

const Day = ({i, get}) => {

    const click_user_on_day = () => {
        get(i.item)
    }

    return (
        <>
        {
            i.index === 0 ?
                <div 
                    className={`${i.days_start_month === 0 ? "col-span-7" :  `col-span-${i.days_start_month}`} flex justify-end`} 
                    onClick={click_user_on_day}
                > 
                    <div className={`border_day_calendar hover:border-[2px] hover:button_header_octagon hover:border-trapezoid`}>
                        <div className={`text-white hover:text-trapezoid" time_day_week`}>
                            {i.item}
                        </div>
                    </div>
                </div>
            :   
            <div 
                className={`border_day_calendar hover:border-[2px] hover:button_header_octagon hover:border-trapezoid`} 
                onClick={click_user_on_day}
            >
                <div className={`text-white hover:text-trapezoid time_day_week`}>
                    {i.item}
                </div>
            </div>    
        }
        <div className="hidden col-span-1"></div>
        <div className="hidden col-span-2"></div>
        <div className="hidden col-span-3"></div>
        <div className="hidden col-span-4"></div>
        <div className="hidden col-span-5"></div>
        <div className="hidden col-span-6"></div>
        <div className="hidden col-span-7"></div>           
        </>
    )
}

export default Day
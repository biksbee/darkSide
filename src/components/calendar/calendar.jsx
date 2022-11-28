import React, {useState, useEffect} from "react"

import close from "../../icon/close.png"
import vector_right from "../../icon/vector_right.png"
import vector_left from "../../icon/vector_left.png"
import vector_left_s from "../../icon/vector_left_s.png"
import vector_right_s from "../../icon/vector_right_s.png"
import Time from "./Time"
import Day from "./Day"

const Calendar = ({show, setShow, choose_time}) => {

    const today = new Date()
    const monthNow = today.getMonth() + 1
    const year = today.getFullYear()
    const month_rus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] 
    const day_of_the_week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const time = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",]
    
    const [current_month, setCurrent_month] = useState(monthNow - 1)

    const create_days_month = (mon) => {
        const days_array = []
        const days = new Date(year, mon, 0).getDate()
        for(let i = 1; i<=days; i++)
            days_array.push(i)
        return days_array
    }
    const d = create_days_month(current_month+1)
    let days_start_month = new Date(year, current_month, 1).getDay()

    useEffect(() => {
        document.addEventListener("click", function(e){
            var x = e.clientX;
            var y = e.clientY;
            var elementMouseIsOver = document.elementFromPoint(x, y);
            if(elementMouseIsOver.id=="calendar"){
                console.log("calendar");
                console.log("id = " + elementMouseIsOver.id)
                setShow(false)
            }
            else{
                console.log("not calendar");
            }
        })
    }, []) 

    const [dd, setDd] = useState('')
    const [mm, setMm] = useState('')
    const [tt, setTt] = useState('')

    const close_slider = () => {
        setShow(false)
    }

    const t_left = () => {
        if(current_month !== 0)
            setCurrent_month(current_month - 1)
        else 
            setCurrent_month(11)
    }
    const t_right = () => {
        if(current_month !== 11)
            setCurrent_month(current_month + 1)
        else 
            setCurrent_month(0)
    }

    useEffect(() => {
        if(dd !== '' && tt !== '')
            sendDate()
    }, [dd, tt])

    const sendDate = () => {
        console.log("DD " + dd)
        console.log("month = " + current_month)
        const month = current_month + 1
        const val = dd + '-' + month + '-' + '|' + tt + '|'
        setDd('')
        setTt('')
        choose_time(val)
        setShow(false)
    }

    return (
        <div id="calendar" className={show ? "fixed top-0 flex justify-center items-center h-full w-full z-[7999] bg-special_pop_up" : "hidden"}>
            <div className="relative w-max h-max p-[50px]">
                <div className="close_slider" onClick={close_slider}>
                    <img src={close} />
                </div>
                <div className="relative  xl:w-[528px] xl:h-[810px] md:w-[456px] md:h-[708px] w-[384px] h-[580px] bg-calendar_border xl:octagon md:octagon_md octagon_sm xl:p-[3px] md:p-[2.7px] p-[2.3px]">
                    <div className={"corner_up"}></div>
                    <div className={"corner_down"}></div>
                    <div className={"trapezoid_up_about"}></div> 
                    <div className={"trapezoid_down_about"}></div>
                    <div className="bg-back_page w-full h-full xl:octagon md:octagon_md octagon_sm xl:p-[40px] md:p-[32px] p-[24px]">
                            <div className="w-full h-max flex justify-center xl:mb-[8px] md:mb-[4px] mb-[2px]">
                                <div className="w-max font-bold xl:text-[18px] md:text-[16px] text-[14px] text-trapezoid xl:leading-[26px] md:leading-[24px] leading-[22px]">
                                    ВЫБЕРИТЕ ДАТУ
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
                            <div className="w-full h-max flex justify-center">
                                <div className="w-max font-bold xl:text-[18px] md:text-[16px] text-[14px] text-trapezoid xl:leading-[26px] md:leading-[24px] leading-[22px]">
                                    ВЫБЕРИТЕ ВРЕМЯ
                                </div>
                            </div>
                            <div className="grid grid-cols-4 xl:mb-[32px] md:mb-[24px] mb-[16px]">
                                {
                                    time.map((item, index) => (
                                        <Time key={index} i={{item, index, show}} set={setTt}/>
                                    ))
                                }        
                            </div>
                            {/* <div className="cursor-pointer w-full" onClick={sendDate}> 
                                <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                                    <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">
                                        ВЫБРАТЬ
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Calendar


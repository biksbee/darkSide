import React, {useState, useEffect} from "react"


import close from "../../icon/close.png"




import Year from "./Year"
import DayPage from "./dayPage"
import TimePage from "./timePage"

const Calendar = ({show, setShow, choose_time}) => {

    const today = new Date()
    const monthNow = today.getMonth() + 1
    const year = today.getFullYear()
    const month_rus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] 
    const day_of_the_week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const time = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",]
    
    
    const [current_month, setCurrent_month] = useState(monthNow - 1)
    const [current_year, setCurrent_year] = useState(year)

    const create_days_month = (mon) => {
        const days_array = []
        const days = new Date(current_year, mon, 0).getDate()
        for(let i = 1; i<=days; i++)
            days_array.push(i)
        return days_array
    }
    const d = create_days_month(current_month+1)
    let days_start_month = new Date(current_year, current_month, 1).getDay()

    useEffect(() => {
        document.addEventListener("click", function(e){
            var x = e.clientX;
            var y = e.clientY;
            var elementMouseIsOver = document.elementFromPoint(x, y);
            if(elementMouseIsOver.id === "calendar"){
                setShow(false)
            }
        })
    }, []) 

    const [dd, setDd] = useState('')
    const [mm, setMm] = useState('')
    const [tt, setTt] = useState('')
    const [next, setNext] = useState(0)

    const close_slider = () => {
        setShow(false)
    }


    // useEffect(() => {
    //     if(dd !== '' && tt !== '')
    //         sendDate()
    // }, [dd, tt])

    const sendDate = () => {
        const month = current_month + 1
        const val = dd + '-' + month + '-' + current_year + '|' + tt + '|'
        choose_time(val)
        setDd('')
        setTt('')
        setNext(0)
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
                    <div className="flex w-full justify-between mb-[20px]">
                        <div className="text-white hover:text-trapezoid opacity-[0.64] portfolio_selector cursor-pointer"
                            onClick={() => setNext(0)}
                        >
                            дата
                        </div>
                        <div className="text-white hover:text-trapezoid opacity-[0.64] portfolio_selector cursor-pointer"
                            onClick={() => setNext(1)}
                        >
                            день
                        </div>
                        <div className="text-white hover:text-trapezoid opacity-[0.64] portfolio_selector cursor-pointer"
                            onClick={() => setNext(2)}
                        >
                            время
                        </div>
                        <div className="text-white hover:text-trapezoid opacity-[0.64] portfolio_selector cursor-pointer"
                            onClick={() => setNext(3)}
                        >
                            готово
                        </div>
                    </div>
                    <div className="">
                        {next === 0 ? 
                            <div className="w-full">
                                <Year setNext={setNext} current_year={current_year} setCurrent_year={setCurrent_year} current_month={current_month} setCurrent_month={setCurrent_month} month_rus={month_rus}/>
                            </div>
                        :
                            null
                        }
                        {next === 1 ?
                            <div className="w-full">
                                <DayPage setNext={setNext} day_of_the_week={day_of_the_week} days_start_month={days_start_month} setDd={setDd} show={show} d={d} dd={dd} />        
                            </div>
                        :
                            null    
                        }
                        {next === 2 ? 
                            <div className="w-full h-[300px]">
                                <TimePage setNext={setNext} setTt={setTt} show={show} time={time}/>        
                            </div>
                        :
                            null    
                        }            
                    </div>
                    <div className="w-full flex justify-center mt-[30px]">
                        <div className="text-[40px] leading-[55px] text-calendar_border">
                        {current_year}.{current_month+1}.{dd}.{tt}
                        </div>
                    </div>
                    {next === 3 ?
                        <div className="cursor-pointer w-full mt-[30px]" onClick={sendDate}> 
                            <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700">
                                <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold">
                                    ВЫБРАТЬ
                                </div>
                            </div>
                        </div>
                    :
                        null    
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Calendar


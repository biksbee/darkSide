import React, {useState, useEffect} from "react"
import { Link } from "react-scroll"
import axios from "axios"
import { IMaskInput } from 'react-imask'

import darkSide from "../../darkSide"
import cal from "../../icon/cal.png"
import type_serv from "../../icon/type_serv.png"
import CheckData from "../contacts/CheckData" 

const FormModule = ({send, open_calendar, chose_user_date}) => {
    let box = send
    let time = chose_user_date
    const content = darkSide.form
    const PhoneContactMask = `+375(00)000-00-00-00`

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [serv, setServ] = useState(box)
    const [date, setDate] = useState(time)
    const [n, setN] = useState(0)
    const [t, setT] = useState(1)
    const [ch, setCh] = useState(true)
    const [show, setShow] = useState(false)
    const [ans, setAns] = useState(false)

    useEffect(() => {
        if(chose_user_date !== "")
            setT(0)    
    }, [date, chose_user_date, time])


    useEffect(() => {
        if(send !== "")
            setN(1)    
    }, [serv, send])

    const TOKEN = '5403416616:AAF7rU6Pmh3ASGtnwQV_qu1FbZuW2MCjT8A';
    const CHAT_ID = '-1001832888184';
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


    const form_data = [name, phone, serv, date]
    const form_hook = [setName, setPhone, setServ, setDate] 
    const form_placeholder = content.forms

    useEffect(() => {
        if(serv !== "")
            setN(1)  

    }, [serv, n, send, box])

    useEffect(() => {
        if(date !== "")
            setT(0)  

    }, [date, t, chose_user_date, time])

    const checkData = () => {
        if(name !== "" && phone !== "" && box !== "" && time !== ""){
            setShow(true)
        } else    
            showEror()
    }

    const call_send = (e) =>{
        if(e === true)
            sendData()
    }

    const sendData = () => {
        let message = `<b>Заявка с сайта!</b>\n`;
        message += `<b>Имя: </b> ${name}\n`;
        message += `<b>Телефон: </b> ${phone}\n`;
        message += `<b>Услуга: </b> ${box}\n`;
        message += `<b>Дата время: </b> ${time}\n`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
                text: message
        })
        setName('')
        setPhone('')
        setServ('')
        setDate('')
        setN(0)
        setT(1)
    }

    const showEror = () => {
        setCh(false)
        setTimeout(() => {
            setCh(true)
        }, 500)        
    }

    const open_pop_up = () => { //calendar
        open_calendar(true)
    }

    return (
        <div className="relative xl:w-[486px] w-[100%] xl:h-[464px] md:h-[400px] h-[336px]">
            <div className="absolute h-full w-full bg-poison_green p-[2.9px] xl:octagon md:octagon_md octagon_sm">
                <div className={"corner_up"}></div>
                <div className={"corner_down"}></div>    
                <div className="h-full w-full bg-back_block xl:octagon md:octagon_md octagon_sm xl:p-[40px] md:p-[32px] p-[24px]">
                    <div className="">    
                        {
                            form_placeholder.map((item, index) => (
                                <div key={index} className="relative xl:h-[64px] md:h-[56px] h-[48px] flex justify-center items-center xl:mb-[16px] md:mb-[14px] mb-[12px]">
                                    <div className="h-full corner_up_icon"></div>
                                    <div className="h-full corner_down_icon"></div>
                                    <div id="show_er" className={`w-full h-full ${ch === true ? "bg-poison_green" : "bg-red-600"}  xl:p-[2.7px] md:p-[2.5px] p-[2.3px] xl:input_octagon md:octagon_14 button_header_octagon`}>
                                            <div className="relative w-full h-full bg-back_block xl:input_octagon md:octagon_14 button_header_octagon">
                                                { index === 1 ?
                                                    <IMaskInput
                                                        id="phone_input"
                                                        mask={PhoneContactMask}
                                                        key={index}
                                                        className="form_input"
                                                        value={form_data[index]}
                                                        onChange={e => form_hook[index](e.target.value)}
                                                        type="text"
                                                        placeholder={item}
                                                        required={true}
                                                    />  
                                                    :  
                                                    index === 0 ? 
                                                        <input
                                                            key={index}
                                                            className="form_input"
                                                            value={form_data[index]}
                                                            onChange={e => form_hook[index](e.target.value)}
                                                            type="text"
                                                            placeholder={item}
                                                            required={true}
                                                        />
                                                        : 
                                                        index === 2 ?
                                                            <Link 
                                                                to={"serv"} 
                                                                spy={true} 
                                                                smooth={true} 
                                                                offset={50} 
                                                                duration={500} 
                                                            >
                                                                <div className="h-full flex items-center">
                                                                    {
                                                                        n === 0 ?
                                                                            <div className="form_input text-turbid_grey flex items-center">
                                                                                {form_placeholder[index]}
                                                                            </div>
                                                                        :
                                                                            <div className="form_input flex items-center">
                                                                                {box}
                                                                            </div>         
                                                                    }
                                                                </div>
                                                            </Link>
                                                        :
                                                            <div className="h-full flex items-center cursor-pointer" onClick={open_pop_up}>
                                                                {
                                                                    t !== 0 ?
                                                                        <div className="form_input text-turbid_grey flex items-center">
                                                                            {form_placeholder[index]}
                                                                        </div>
                                                                    :
                                                                        <div className="form_input flex items-center">
                                                                            {time}
                                                                        </div>         
                                                                }
                                                            </div>              
                                                }
                                                {
                                                    index === 2 ?
                                                        <div className={"cursor-pointer absolute flex justify-center items-center w-[32px] h-[32px] z-[1100] xl:top-4 md:top-2 top-1 xl:right-5 md:right-[10px] right-[10px]"}> 
                                                            <Link 
                                                                to={"serv"} 
                                                                spy={true} 
                                                                smooth={true} 
                                                                offset={50} 
                                                                duration={500} 
                                                            >
                                                                <img src={type_serv} />
                                                            </Link>
                                                        </div>    
                                                    : index === 3 ? 
                                                        <div className={"cursor-pointer absolute flex justify-center items-center w-[32px] h-[32px] z-[1100] xl:top-4 md:top-2 top-1 xl:right-5 md:right-[10px] right-[10px]"} onClick={open_pop_up}>
                                                            <img src={cal} />
                                                        </div>
                                                    : null
                                                }    
                                            </div>    
                                    </div>
                                </div>            
                            ))
                        }
                    </div>
                    <button className="cursor-pointer w-full" onClick={checkData}>
                        <div className="flex justify-center w-full bg-trapezoid xl:py-[16px] md:py-[14px] py-[12px] xl:input_octagon md:octagon_14 button_header_octagon hover:bg-poison_green duration-700" onClick={checkData}>
                            <div className="font-exo xl:text-[24px] md:text-[21px] text-[18px] xl:leading-[32px] md:leading-[28px] leading-[24px] w-max text-turbid_black uppercase font-semibold" onClick={checkData}>
                                {content.button}
                            </div>
                        </div>
                    </button>    
                </div>
                <div className={"trapezoid_up_about"}></div> 
                <div className={"trapezoid_down_about"}></div>
            </div>
            <CheckData i={{show, setShow, name, phone, box, time, setAns, ans}} send_ans={call_send}/>
        </div>
    )
}

export default FormModule

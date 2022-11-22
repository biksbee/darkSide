import React, {useState} from "react"

import darkSide from "../../darkSide"
import IconsModule from "../modules/IconsModule"
import FormModule from "../modules/FormModule"
import ContactsModule from "../modules/ContactsModule"
import Calendar from "../calendar/calendar"


const Contacts = ({submit}) => {

    const content = darkSide.form
    const box_type = submit

    const [open_calendar, setOpen_calendar] = useState(false)

    const open_cal = (e) => {
        setOpen_calendar(e)
        console.log("calendar = " + open_calendar)
    }

    return (
        <div id="cont" className="flex justify-center w-full py-[200px]">
            <div className="xl:flex block justify-between xl:w-[1200px] w-[90%]">
                <div className="xl:block md:hidden hidden">
                    <FormModule send={box_type} open_calendar={open_cal}/>
                </div>
                <div className="xl:flex block xl:w-[588px] w-[90%] justify-between">
                    <div className="lx:pb-0 md:pb-[40px] pb-[32px]">
                        <div className="pre_title flex">
                            <div className="pre_style  xl:text-[18px] md:text-[16px] text-14px text-trapezoid uppercase font-bold w-max">
                                {content.preTitle}
                            </div>
                        </div>
                        <div className="custom_title flex mb-[64px]">
                            <div className="title_style xl:text-[56px] md:text-[48px] text-[40px] text-white font-bold w-max">
                                {content.title}
                            </div>
                        </div>
                        <div className="mb-[24px] xl:w-[588px]">
                            <div className="text-[18px] text-white font-normal opacity-[0.74]">
                                {content.description}
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <IconsModule />
                        </div>
                        <div>
                            <ContactsModule checker={1}/>
                        </div>
                    </div>
                </div>
                <div className="xl:hidden md:visible">
                    <FormModule send={box_type} open_calendar={open_cal}/>
                </div>
            </div>        
            <Calendar show={open_calendar} setShow={setOpen_calendar}/> 
        </div>
    )
}

export default Contacts
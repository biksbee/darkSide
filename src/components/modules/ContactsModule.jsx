import React from "react"

import darkSide from "../../darkSide"
import Mail from "../../icon/mail.png"
import Phone from "../../icon/phone.png"
import Clock from "../../icon/clock.png"
import Address from "../../icon/addres.png"

const ContactsModule = ({checker}) => {


    const num = checker
    const content = darkSide.form
    const iconsContacts = [Mail, Phone, Clock, Address]

    return (
        <div className={num === 1 ? "xl:block md:grid md:grid-cols-2 md:gap-[24px] block" : ""}>
            {
                iconsContacts.map((item, index) => (
                    <div key={index} className="flex">
                        <div className="flex justify-center items-center mr-[8px] mb-[8px] xl:w-[26px] md:w-[24px] w-[22px]">
                            <img src={item} />
                        </div>
                        <div className="text-[18px] text-white font-normal">
                            {content.inf[index]}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactsModule
import React, {useState, useEffect} from "react"

import Slider from "./slider/Slider"
import Start from "./firstPage/Start"
import About from "./about/About"
import Why from "./why/Why"
import Services from "./service/Services"
import Portfolio from "./portfolio/Portfolio"
import Contacts from "./contacts/Contacts"


const Body = () => {

    const [box, setBox] = useState("")
    const [show, setShow] = useState(false)

    const send = (note) => {
        console.log(note)
        setBox(note)
    }

    return (
        <div className="bg-back_page">
            <Start />
            <About />
            <Why />
            <Services type_box={send}/>
            <Portfolio />
            <Contacts submit={box}/>
        </div>
    )
}

export default Body
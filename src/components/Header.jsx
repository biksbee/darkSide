import React, {useState, useEffect} from "react"
import { Link } from "react-scroll"

import darkSide from "../darkSide"
import logo from "../image/logo2.svg"
import menu from "../icon/menu.png"
import close from "../icon/close.png"
import LiModule from "./modules/LiModule"
import IconsModule from "./modules/IconsModule"

const Header = () => {

    const blockContent = darkSide.header
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [bottomMon, setBottomMon] = useState('-100%')

    var scrollPrev = window.pageYOffset;
    const showNav = () => {
        var scrollCur = window.pageYOffset;
            if(scrollPrev < scrollCur) {
                setShow(true) 
            } else {
                setShow(false)
            }
            scrollPrev = scrollCur;
    }
    window.addEventListener('scroll', showNav)

    const func_close = (data) => {
        setOpen(data)
    }
    const fake_func = (data) => {

    }

    return (
        <nav id="header" className={!show ? "fixed xl:bg-transparent bg-back_page w-full h-[78px] z-[1000] top-0 custom_animation" : "fixed z-[10000] w-full h-[80px] top-[-80px] custom_animation"}>
            <div id="myBlock" className="flex justify-between w-full h-full items-center px-[32px]">
                <div className="h-[48px] w-[216px]">
                    <Link to="first" spy={true} smooth={true} offset={50} duration={500}>
                        <img src={logo} alt={"hi"}/>
                    </Link>
                </div>
                <div className="xl:flex hidden">
                    <ul className={"xl:flex hidden h-[48px] items-center custom_animation"}>
                        {
                            blockContent.menu.map((item, index) => (
                                <LiModule key={index} submit={item} ind={index} send={fake_func}/>                               
                            ))
                        }
                    </ul>
                </div>
                <Link className="xl:flex hidden cursor-pointer w-[230px]"
                    to={"serv"} spy={true} smooth={true} offset={50} duration={500}
                >
                    <div className="flex justify-center w-full bg-trapezoid hover:bg-poison_green duration-700 py-[14px] button_header_octagon">
                        <div className="font-exo xl:text-[18px] md:text-[16px] text-[1px] xl:leading-[24px] md:leading-[20px] leading-[16px] w-max text-turbid_black uppercase font-semibold">
                            {blockContent.button}
                        </div>
                    </div>
                </Link>
                <div 
                    className="xl:hidden flex cursor-pointer w-[60px] h-[60px] justify-center items-center hover:scale-[1.1] duration-500"
                    onMouseEnter={() => setActive(true)} 
                    onMouseLeave={() => setActive(false)}
                    onClick={() => {setOpen(!open)}}
                >
                    <div>
                        {!open ? <img src={menu} /> : <img src={close} />}
                    </div>
                </div>
            </div>
            <div id="mobMenu" className={`${open ? "bottom-[-78px]" : `bottom-[-100%]`} mobile_menu`}>
                <div className="w-[90%]">
                    <ul>
                        {
                            blockContent.menu.map((item, index) => (
                                <div key={index} className="w-full flex justify-center">
                                    <LiModule key={index} submit={item} ind={index} detect={true} send={func_close}/>                               
                                </div>
                            ))
                        }
                    </ul>
                    <Link className="flex justify-center w-full pt-[150px]"
                        to={"serv"} spy={true} smooth={true} offset={50} duration={500} onClick={() => setOpen(!open)}
                    >
                        <div className="w-[704px]">
                            <div className="xl:flex cursor-pointer w-full mb-[14px]">
                                <div className="flex justify-center w-full bg-trapezoid hover:bg-poison_green duration-700 py-[14px] button_header_octagon">
                                    <div className="font-exo text-[18px] w-max text-turbid_black uppercase font-semibold">
                                        {blockContent.button}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>     
                    <div className="flex justify-center w-full">
                        <div className="w-[704px]">
                            <IconsModule submit={true}/>
                        </div>
                    </div>   
                </div>    
            </div>

        </nav>
    )
}

export default Header
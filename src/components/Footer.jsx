import React, {useState} from "react"
import { Link } from "react-scroll"

import darkSide from "../darkSide"
import ContactsModule from "./modules/ContactsModule"
import FooterIconModule from "./modules/footerIconModule"

import visa from "../icon/visa.png"
import master from "../icon/master.png"
import apple from "../icon/apple.png"
import miniInst from "../icon/miniInst.png"
import miniVk from "../icon/miniVk.png"
import miniTg from "../icon/miniTg.png"
import miniTik from "../icon/miniTik.png"


import logo from "../image/logo2.png"

const Footer = () => {

    const content = darkSide.footer
    const footer_network = [miniInst, miniVk, miniTg, miniTik]
    const href_link = ["about", "serv", "port", "cont"]
    

    return (
        <div className="bg-footer_back pt-[80px] pb-[40px] md:pl-0 pl-[24px]">
            <div className="flex w-full justify-center">
                <div className="w-max">
                    <div className="xl:flex">
                        <div className="xl:mb-0 mb-[32px]">
                            <div className="footer_title">
                                <img src={logo} />
                            </div>
                            <div className="footer_data xl:w-[282px]">
                                {content.inspiration}
                            </div>
                            <div className="flex justify-between w-[152px] mt-[24px] items-center">
                                {
                                    footer_network.map((item, index) => (
                                        <FooterIconModule key={index} item={item} index={index}/>
                                    ))
                                }             
                            </div>
                        </div>
                        <div>
                            <div className="md:flex xl:justify-center md:justify-between">
                                <div className="xl:ml-[88px]">
                                    <div className="footer_title">
                                        {content.titels[0]}
                                    </div>
                                    <div>
                                        {
                                            content.menu.map((item, index) => (
                                                <div key={index}>
                                                    <Link 
                                                        className="footer_data hover:text-trapezoid"
                                                        to={href_link[index]} spy={true} smooth={true} offset={50} duration={500}    
                                                    >
                                                        {item}
                                                    </Link>
                                                </div>    
                                            ))
                                        }
                                      
                                    </div>
                                </div>
                                <div className="xl:mx-[88px] md:mx-[61px] md:mt-0 my-[24px]">
                                    <div className="footer_title">
                                        {content.titels[1]}
                                    </div>
                                    <div>
                                        <div className="footer_data hover:text-trapezoid">
                                            {content.links[0]}
                                        </div>
                                        <div className="footer_data hover:text-trapezoid">
                                            {content.links[1]}
                                        </div>
                                        <div className="footer_data hover:text-trapezoid">
                                            {content.links[2]}
                                        </div>
                                        <div className="footer_data hover:text-trapezoid">
                                            {content.links[3]}
                                        </div>
                                        <div className="footer_data hover:text-trapezoid">
                                            {content.links[4]}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[210px]">
                                    <div className="footer_title">
                                        {content.titels[2]}
                                    </div>
                                    <div>
                                        <ContactsModule />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-[1px] border-t-footer_line mt-[40px] pt-[40px]">
                        <div className="md:flex justify-between">
                            <div className="footer_data md:mb-0 mb-[8px]">
                                {content.privasy}
                            </div>
                            <div className="flex">
                                <div>
                                    <img src={visa}/>
                                </div>
                                <div className="mx-[12px]">
                                    <img src={master}/>
                                </div>
                                <div>
                                    <img src={apple}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

    )
}

export default Footer
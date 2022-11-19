import React, {useState} from "react"

import miniInst from "../../icon/miniInst.png"
import inst from "../../icon/inst.png"
import miniVk from "../../icon/miniVk.png"
import vk from "../../icon/vk.png"
import miniTg from "../../icon/miniTg.png"
import tg from "../../icon/tg.png"
import miniTik from "../../icon/miniTik.png"
import tik from "../../icon/tik.png"


const FooterIconModule = ({item, index}) => {

    const footer_network = [miniInst, miniVk, miniTg, miniTik]
    const footer_network_hover = [inst, vk, tg, tik]
    const [show, setShow] = useState(false)


    return (
        <>
            {
                                    
                <div className="mr-[8px]" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    {!show ? 
                        <img src={footer_network[index]} />
                    :
                        <img src={footer_network_hover[index]} />
                    }    
                </div>
            }
        </>
    )
}

export default FooterIconModule
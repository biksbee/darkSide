import React, {useState} from "react"
import { Link } from "react-scroll"

const LiModule = ({submit, ind, send, detect}) => {


    const [active, setActive] = useState(false)
    const href = ["about", "serv", "port", "cont"]
    const item = submit
    const index = ind
    const detected = detect

    const cheker = () => {
        const close = false
        send(close)
    }

    return (
        <>
            <Link to={href[index]} spy={true} smooth={true} offset={50} duration={500} onClick={cheker}>
                <li className={!detected ? "header_element text-[18px] leading-[24px]" : "header_element text-[21px]"} 
                    onMouseEnter={() => setActive(true)} 
                    onMouseLeave={() => setActive(false)}
                >
                    <div className={active ? "corner_up_icon" : null}></div>
                    <div className={active ? "corner_down_icon" : null}></div>
                    {item}
                </li>
            </Link>
        </>
    )
}

export default LiModule
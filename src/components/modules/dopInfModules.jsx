import React, {useState} from "react"

import darkSide from "../../darkSide"
import whiteI from "../../icon/whiteI.png"
import blackI from "../../icon/blackI.png"

const DopInfModules = ({submit, detect, cheker}) => {

    const [show, setShow] = useState(false)

    const num = submit
    const treker = detect
    const index = cheker
    const blockContent = darkSide.services.content[Object('block' + num)]

    return (
        <>
            {
                blockContent.hover_point[0][treker].includes(index) ? 
                    <div className="relative flex justify-center items-center w-[20px] h-[20px] ml-[4px]"
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                    >
                        <div className={show ? "triangle_dop_inf" : null}
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                        ></div>
                        <div className={show ? "absolute z-[10000] xl:w-[172px] xl:h-[90px] md:w-[154px] md:h-[84px] w-[130px] h-[78px] right-[20px] bottom-[14px]" : "hidden"}>
                            <div className="relative bg-border_dop_inf p-[1.2px] popup_octagon">
                                <div className="corner_popup_tl"></div>
                                <div className="corner_popup_tr"></div>
                                <div className="corner_popup_br"></div>
                                <div className="bg-back_page popup_octagon p-[12px]">
                                    {blockContent.hover_content[0][0].map((item, index) => (
                                        <div key={index} className="style_dop_inf_text">
                                            {item}
                                        </div>
                                    ))}
                                </div>    
                            </div>
                        </div>
                        {
                            num !== 2 ? 
                                <img src={whiteI} /> : <img src={blackI} />
                        }
                    </div>
                :
                    null
            }
        </>
    )
}

export default DopInfModules
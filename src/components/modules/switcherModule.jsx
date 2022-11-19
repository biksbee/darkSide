import React, {useState} from "react"


const SwitcherModule = ({n, submit}) => {

    const num = n

    const [active, setActive] = useState(true)

    const switcher = () => {
        setActive(!active)
        if(active === true){
            submit(1)
        } else 
            submit(0)        
    }

    return(
        <>
            {
                active ?
                    <div className={num !== 2 ? "switcher_back bg-trapezoid" : "switcher_back bg-turbid_black"}
                        onClick={switcher}
                    >
                        <div className={num !== 2 ? "switcher_text_active text-black" : "switcher_text_active text-trapezoid"}>
                            MAX
                        </div>
                    </div>
                :     
                    <div className={num !== 2 ? "switcher_back opacity-[0.38] hover:opacity-[1]" : "switcher_back opacity-[0.38] hover:opacity-[1]"}
                        onClick={switcher}
                    >
                        <div className={num !== 2 ? "switcher_text_active text-trapezoid" : "switcher_text_active text-black"}>
                            MAX
                        </div>
                    </div>
            }
            {
                !active ? 
                    <div className={num !== 2 ? "switcher_back bg-trapezoid" : "switcher_back bg-turbid_black"}
                        onClick={switcher}
                    >
                        <div className={num !== 2 ? "switcher_text text-turbid_black" : "switcher_text text-trapezoid"}>
                            LIGHT
                        </div>
                    </div>
                :
                    <div className={num !== 2 ? "switcher_back opacity-[0.38] hover:opacity-[1]" : "switcher_back bg-trapezoid opacity-[0.38] hover:opacity-[1]"}
                        onClick={switcher}
                    >
                        <div className={num !== 2 ? "switcher_text text-trapezoid" : "switcher_text text-back_page"}>
                            LIGHT
                        </div>
                    </div>
            }
            
        </>
    )
}

export default SwitcherModule
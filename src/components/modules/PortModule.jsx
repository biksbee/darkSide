import React, {useState} from "react"

const PortModule = ({submit, send, type, setType}) => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    
    const bg_exs = [
        ["alone", "femka", "matrix", "asia", "ugly"],
        ["portf1", "portf2", "portf3", "portf4", "portf5"],
        ["portf6", "portf7", "portf8", "portf9", "portf10"]
    ]


    const s1 = () => {
        submit(true)
        send(1)
    }
    const s2 = () => {
        submit(true)
        send(2)
    }
    const s3 = () => {
        submit(true)
        send(3)
    }
    const s4 = () => {
        submit(true)
        send(4)
    }
    const s5 = () => {
        submit(true)
        send(5)
    }

    return (
        <>
            {

            }
            <div className="relative row-span-1 md:mb-0 mb-[24px]"
                onMouseEnter={() => setShow1(true)}
                onMouseLeave={() => setShow1(false)}
                onClick={s1}        
            >
                <div className={!show1 ? "corner_portfolio1" : null}></div>
                <div className={!show1 ? "corner_portfolio2" : null}></div>
                <div className={!show1 ? "corner_portfolio3" : null}></div>
                <div className={!show1 ? "corner_portfolio4" : null}></div>
                <div className={`bg-${bg_exs[type][0]} def_size_port`}></div>    
            </div>
            <div className="relative col-span-2 md:mb-0 mb-[24px]"
                onMouseEnter={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
                onClick={s3}    
            >
                <div className={!show2 ? "corner_portfolio1" : null}></div>
                <div className={!show2 ? "corner_portfolio2" : null}></div>
                <div className={!show2 ? "corner_portfolio3" : null}></div>
                <div className={!show2 ? "corner_portfolio4" : null}></div>
                <div className={`bg-${bg_exs[type][1]} def_size_port`}></div>
            </div>
            <div className="relative col-span-2 md:mb-0 mb-[24px]"
                onMouseEnter={() => setShow3(true)}
                onMouseLeave={() => setShow3(false)}
                onClick={s2}    
            >
                <div className={!show3 ? "corner_portfolio1" : null}></div>
                <div className={!show3 ? "corner_portfolio2" : null}></div>
                <div className={!show3 ? "corner_portfolio3" : null}></div>
                <div className={!show3 ? "corner_portfolio4" : null}></div>
                <div className={`bg-${bg_exs[type][2]} def_size_port`}></div>
            </div>
            <div className="relative row-span-1 md:mb-0 mb-[24px]"
                onMouseEnter={() => setShow4(true)}
                onMouseLeave={() => setShow4(false)}
                onClick={s4}
            >
                <div className={!show4 ? "corner_portfolio1" : null}></div>
                <div className={!show4 ? "corner_portfolio2" : null}></div>
                <div className={!show4 ? "corner_portfolio3" : null}></div>
                <div className={!show4 ? "corner_portfolio4" : null}></div>
                <div className={`bg-${bg_exs[type][3]} def_size_port`}></div>
            </div>
            <div className="relative row-span-2"
                onMouseEnter={() => setShow5(true)}
                onMouseLeave={() => setShow5(false)}
                onClick={s5}
            >
                <div className={!show5 ? "corner_portfolio1" : null}></div>
                <div className={!show5 ? "corner_portfolio2" : null}></div>
                <div className={!show5 ? "corner_portfolio3" : null}></div>
                <div className={!show5 ? "corner_portfolio4" : null}></div>
                <div className={`bg-${bg_exs[type][4]} def_size_port xl:h-[588px] md:h-[340px] h-[145px] bg-cover bg-center bg-no-repeat port_hover`}></div>
            </div>
            
            <div className={`bg-alone hidden`}></div>
            <div className={`bg-matrix hidden`}></div>
            <div className={`bg-femka hidden`}></div>
            <div className={`bg-asia hidden`}></div>
            <div className={`bg-ugly hidden`}></div>
            <div className={`bg-portf1 hidden`}></div>
            <div className={`bg-portf2 hidden`}></div>
            <div className={`bg-portf3 hidden`}></div>
            <div className={`bg-portf4 hidden`}></div>
            <div className={`bg-portf5 hidden`}></div>
            <div className={`bg-portf6 hidden`}></div>
            <div className={`bg-portf7 hidden`}></div>
            <div className={`bg-portf8 hidden`}></div>
            <div className={`bg-portf9 hidden`}></div> 
            <div className={`bg-portf10 hidden`}></div>
        </>
    )
}

export default PortModule
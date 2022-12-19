import React, {useState} from "react"

const Time = ({i, set}) => {

    const [click_on_time, setClick_on_time] = useState(i.show)

    const click_user_on_time = () => {
        setClick_on_time(!click_on_time)
        console.log("time = " + i.item)
        set(i.item)
    }

    return (
        <>
            <div className={`time_block hover:text-trapezoid`} onClick={click_user_on_time}>
                <div className={`text-white hover:text-trapezoid time_day_week`}>
                    {i.item}
                </div>
            </div>
        </>
    )
}

export default Time
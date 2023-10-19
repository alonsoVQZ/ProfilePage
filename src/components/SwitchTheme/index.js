import { useState } from "react";
import "./SwitchTheme.css";
import { useEffect } from "react";

const SwitchTheme = () => {
    const [theme, setTheme] = useState(true)
    const [wrapperTransform, setWrapperTransform] = useState()
    const [childTransform, setChildTransform] = useState()
    const [gChild1, setGChild1] = useState()
    const [gChild2, setGChild2] = useState()
    const changeTheme = () => setTheme(!theme)
    useEffect(() => {
        setWrapperTransform(theme === true ? "translate(0%, -50%)" : "translate(100%, -50%)")
        setChildTransform(theme === true ? "translateX(0%)" : "translateX(-100%)")
        setGChild1(theme === true ? "gChildDay1" : "gChildNight1")
        setGChild2(theme === true ? "gChildDay2" : "gChildNight2")
    }, [theme])
    return (
        // <div id="SwitchTheme" onClick={() => changeTheme()}>
        //     <div id="SwitchTheme-d1" className={test2}>
        //         <div className={`SwitchTheme-d1d1 ${test1}`}>
        //             <div id="SwitchTheme-d1d1d1" />
        //             <div id="SwitchTheme-d1d1d2" />
        //         </div>
        //     </div>
        // </div>
        <div id="parent" onClick={() => changeTheme()}>
            <div id="wrapper" style={{transform: wrapperTransform}}>
                <div id="child" style={{transform: childTransform}}>
                    <div id="gChild1" className={gChild1} />
                    <div id="gChild2" className={gChild2} />
                </div>
            </div>
        </div>
    )
};

export default SwitchTheme;
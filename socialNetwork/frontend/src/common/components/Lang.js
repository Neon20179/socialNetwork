import React, { useEffect, useRef } from 'react'

const Lang = (ruText, enText, userLang) => {
    let enNode = useRef(null)
    let ruNode = useRef(null)

    useEffect(() => {
        if (userLang === "EN") {
            enNode.style.transform = 'translateY(60px)'
            ruNode.style.transform = 'none'
        } else if (userLang === "RU") {
            enNode.style.transform = 'none'
            ruNode.style.transform = 'translateY(60px)'
        }
    }, [userLang])

    return (
        <div className="lang">
            <span className="en" ref={el => { enNode = el }}>{enText}</span>
            <span className="ru" ref={el => { ruNode = el }}>{ruText}</span>
        </div>
    )
}

export default Lang

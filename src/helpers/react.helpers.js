import React from "react";

export const getStateFromProps = (location, payload)=> {
    if(location.state !== undefined) {
       return payload =location.state[payload];
    }else {
        return payload = null
    };
};

export const SekxReactAlert = ({children, info, styles={}})=> {
    return <div 
        style={{
            color: styles.color || "white", 
            backgroundColor: styles.background || "rgba(197, 12, 0, 0.45)", 
            padding: styles.padding || "0.3em 1em", 
            fontWeight: styles.padding || "600"}}>{children || info}</div>
}

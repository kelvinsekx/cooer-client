export const getStateFromProps = (location, payload)=> {
    if(location.state !== undefined) {
       return payload =location.state[payload];
    }else {
        return payload = null
    };
}
 const log = (v)=> console.log(v);

 const getLink = (txt) => {
     txt = txt.toLowerCase()
    txt = txt.replaceAll(/\?/g, '')
          txt= txt.trim()
          txt = txt.replaceAll(/ /g, '-')
    return `${txt}`
}

export const baseUrl = `https://shrouded-thicket-19388.herokuapp.com`
 export default {
     log, getLink
 }

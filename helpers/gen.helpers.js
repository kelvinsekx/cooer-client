 const log = (v)=> console.log(v);

 const getLink = (txt) => {
     txt = txt.toLowerCase()
    txt = txt.replaceAll(/\?/g, '')
          txt= txt.trim()
          txt = txt.replaceAll(/ /g, '-')
    return `${txt}`
}
 export default {
     log, getLink
 }
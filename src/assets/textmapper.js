import config from "../../config"
export default function textmapper(text){
    if(typeof config.Mapping[text] !== "undefined") return config.Mapping[text]
    else return text
}
import { atom, selector } from "recoil";


export const countAtom = atom({
    key:"countAtom",
    default:0
})


export const evenSelector = selector({
    key:"evenSelector",
    get : (props)=>{
        const value = props.get(countAtom);
        return value % 2;
    }
})
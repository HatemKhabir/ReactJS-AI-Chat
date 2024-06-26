import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context=createContext();

const ContextProvider=(props)=>{
        const [input,setInput]=useState("");
        const [recentPrompt,setRecentPrompt]=useState("")
        const [prevPrompt,setPrevPrompts]=useState([])
        const [showResult,setShowResult]=useState(false);
        const [loading,setLoading]=useState(false);
        const [resultData,setResultData]=useState("");


    const onSent=async()=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        const response=await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
        

    }
    onSent()
    const contextValue={
        prevPrompt,setPrevPrompts,onSent,recentPrompt,setRecentPrompt,input,setInput,loading,resultData,showResult
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
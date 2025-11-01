import {useEffect, useState} from "react";
import axios from "axios";

let AiPage=()=>{


 let [prompt, setPrompt] = useState('')

    let buttonClick=async ()=>{

        let r=await axios.post("http://localhost:3000/ai/story",prompt)
        console.log(r)
    }


    return (


        <>
        write prompt<input type={'text'} name={'name'} value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>

        <button onClick={buttonClick}>ai story</button>
        </>


    )




}

export default AiPage
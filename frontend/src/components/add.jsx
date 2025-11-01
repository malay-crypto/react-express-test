import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

let Add=()=>{


    let [data, setData]=useState({name:'',profileImage:'',backgroundImage:''});

    let addButtonClick=async ()=>{

        let fd=new FormData();
        fd.append('name',data.name);
        fd.append('profileImage',data.profileImage);
        fd.append('backgroundImage',data.backgroundImage);

       await axios.post('http://localhost:3000/add',fd,{headers:{'Content-Type':'multipart/form-data'}})

        toast.success('Successfully add profile')
    }

    let onChangeHandler=(e)=>{

        let d={...data,[e.target.name]:e.target.value};
        setData(d);
    }

    let onChangeHandlerForImage=(e)=>{

        let d={...data,[e.target.name]:e.target.files[0]};
        setData(d);
    }

    return (


        <>
            <div className='flex flex-col  items-center justify-center w-screen h-screen bg-blue-100'>

                <h2 className="text-5xl text-red-500 ">Entry Form</h2>

                <div className="w-200 h-100 border border-red-200 rounded-lg text-center text-green-400
                text-3xl flex flex-col items-center justify-center gap-4">
                    <input onChange={onChangeHandler} name='name'  value={data.name} type='text' className="border border-rounded-lg" placeholder='enter name'/>
                    <input onChange={onChangeHandlerForImage} name='profileImage' type='file' className="border border-rounded-lg" />
                    <input onChange={onChangeHandlerForImage} name='backgroundImage'  type='file' className="border border-rounded-lg" />

                    <button onClick={addButtonClick} className="rounded-lg bg-red-500 w-100 h-10 cursor-pointer" >add</button>

                </div>
            </div>
        </>


    )



}

export default Add
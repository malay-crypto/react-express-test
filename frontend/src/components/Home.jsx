import {useEffect, useState} from "react";
import axios from "axios";

let Home=()=>{


    let [allData,setAllData]=useState([])

    useEffect(()=>{

        let fetchData = async () => {
            let r=await axios.get('http://localhost:3000')
            console.log(r.data)
            setAllData(r.data)
        }
        fetchData()

    },[])



    return (

        <>

            <div className="flex justify-between items-center ">

                {
                    allData.map((item,index)=>


                                    item?.profileImage ?
                                        <img className={'w-48 h-48 rounded-2xl'} src={`http://localhost:3000/uploads/${item.profileImage}`} alt=""/>
                                        :
                                        <img className={'w-50 h-50 rounded-2xl'} src={`http://localhost:3000/uploads/1.jpg`} alt=""/>




                    )
                }
            </div>






        </>


    )



}

export default Home
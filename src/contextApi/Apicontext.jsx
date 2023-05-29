import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Apicontext = createContext();

export const MycontextProvider = ({ children }) => {
    const [state, setstate] = useState("data")
    useEffect(() => {
        axios.post("https://zincubate.in/api/MovieTicketChecker?action=getAllDetails",{
            user_mail_id:"sathishsandy8124@gmail.com"
        })
            .then((res)=>{
                setstate(res.data)
            })
    }, [])
  return (
    <Apicontext.Provider value={state}>
        {children}
    </Apicontext.Provider>
  )
};
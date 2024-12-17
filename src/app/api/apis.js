import toast from "react-hot-toast";

export const login=async(data)=>{
    try {return res=await axiosconfig.post('/authenticate/login',data);} catch (err) { console.log(err); toast.error("error while login")}
}

export const Signup=async(data)=>{
    return res=await axiosconfig.post('/authenticate/signup',data);
}

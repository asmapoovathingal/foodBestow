import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

//  api for registration by auth
export const registerAPI =async(reqBody)=>{
 return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginApi = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addFoodAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-food`,reqBody,reqHeader)
}


export const getFoodAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/foods`,"",reqHeader)
}

export const deleteFoodAPI = async(fid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/foods/${fid}`,{},reqHeader)
}
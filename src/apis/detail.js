import httpInstance from "@/utils/http.js";

export const getDetail = (id)=>{
  return httpInstance({
    url:'/goods',
    params:{
      id
    }
  })
}

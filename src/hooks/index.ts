// import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

const useAxios = (api : String, token ?: string) => {

    let url : String = (api === 'Login') ? 'Login' : 'LoginDevedor';

    const instance = url === 'Login' ?
    axios.create({
        baseURL: `https://c139-2804-4ec-1205-8400-e4ad-fa8b-a5d4-625.ngrok-free.app/api/${url}/`,
    }) :
    axios.create({
        baseURL: `https://c139-2804-4ec-1205-8400-e4ad-fa8b-a5d4-625.ngrok-free.app/api/${url}/`,
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    return { axios: instance };


};


export default useAxios;

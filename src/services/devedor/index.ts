// import { useAuth } from "@/contexts/AuthContext";
import { LoginDevedor } from "@/lib/utils";


async function loginDevedor({axios} : any, credentials : LoginDevedor) {
    const {data} = (
        await axios.post('/', credentials)
    );
    // const { setToken } = useAuth();
    // setToken(data.token);
    return data;

}

async function getDadosContratoDevedor({axios} : any, hash = 'sashaushas') {
    const {data} = (
        await axios.post(`/DadosContratoDevedor/?hash=${hash}`)
    );
    return data;
}
async function downloadContract({axios} : any, hash = 'sashaushas') {
    console.log(axios.defaults.baseURL)
    const {data} = (
        await axios.post(`/BaixarContrato/?hash=${hash}`)
    );
    return data;
}

async function downloadInvoice({axios} : any, hash = 'sashaushas') {
    console.log(axios.defaults.baseURL)
    const {data} = (
        await axios.post(`/BaixarBoleto/?hash=${hash}`)
    );
    return data;
}
async function downloadPix({axios} : any, hash = 'sashaushas') {
    console.log(axios.defaults.baseURL)
    const {data} = (
        await axios.post(`/BaixarPix/?hash=${hash}`)
    );
    return data;
}

export {
    loginDevedor,
    getDadosContratoDevedor,
    downloadContract,
    downloadInvoice,
    downloadPix
}
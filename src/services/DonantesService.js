import {AxiosInstance} from "../config/axios-config"

class DonantesService {
    get(){
        return AxiosInstance.get("Donantes" );
    }
}

export default new DonantesService;
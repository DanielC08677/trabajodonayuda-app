import {AxiosInstance} from "../config/axios-config"

class FundacionesService {
    get(){
        return AxiosInstance.get("Fundaciones" );
    }

    delete(idIdentificacion)
    {
        return AxiosInstance.delete(`Fundaciones/${idIdentificacion}`);
    }

    create(Fundaciones){
        return AxiosInstance.post('Fundaciones/create', Fundaciones);
    }

    update(idIdentificacion,Fundaciones){
        return AxiosInstance.put(`Fundaciones/update/${idIdentificacion}`,Fundaciones);
    }
}

export default new FundacionesService;
import React,{useState, useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import CreateFundacionesModal from '../components/CreateFundacionesModal';
import FundacionesService from '../services/FundacionesService';
import Swal from 'sweetalert2';

function FundacionesView() {
    const [show, setshow] = useState(false);

    useEffect(()=>{

    },[]);   

    const handleClose = () => {
        setshow(false)
    }

    const handleOpenModal =  () => {
        setshow(true)
    }

    const handleSaveFundaciones = async (Fundaciones) => {
        Swal.fire({
            allowOutsideClick: false,
            icon :'info',
            text: 'Por Favor Espere ',
        })

        Swal.showLoading();
        
        console.log(Fundaciones);
        FundacionesService.create(Fundaciones)
                       .then((resp) => {
                           Swal.close();
                           console.log(resp)
                           handleClose();
                       }, (error) => {
                           console.log(error)
                           Swal.fire({
                               tittle: 'Error',
                               icon: 'error',
                               text: 'Ocurrio Un Error Al Guardar Los Datos!'
                           })
                       })
    }

    return (
        <Container>
            <Button onClick={handleOpenModal}variant="primary">Crear Fundacion</Button>
            {
                show && <CreateFundacionesModal 
                show={show} 
                handleClose={handleClose}
                handleSaveFundaciones={handleSaveFundaciones} />
             
            }
        </Container>
    );

}

export default FundacionesView;
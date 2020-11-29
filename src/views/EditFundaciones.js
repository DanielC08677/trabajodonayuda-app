import React, { useState } from "react";
import {Button, Container, Navbar, Form} from 'react-bootstrap';
import EditFundacionesModal from '../components/EditFundacionesModal';
import FundacionesService from '../services/FundacionesService';
import Swal from 'sweetalert2';

export const EditFundaciones = (props) => {

    const handleEditFundaciones = async (idEdit,fundaciones,handleGetFundaciones) =>{

        Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Por favor espere...',
        })

        Swal.showLoading();
                            Swal.fire({
                                allowOutsideClick: false,
                                title: '¿Quieres Guardar La Fundacion?',
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonText: `Guardar`,
                                denyButtonText: `Cancelar`,
                                icon: 'question'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                   

                                    FundacionesService.update(idEdit,fundaciones)
                                    .then((resp) =>{
                                        Swal.close()
                                        console.log(resp);
                                        Swal.fire( {   
                                            allowOutsideClick: false,
                                            title:'Guardado exitosamente', 
                                            icon: 'success'})
                                            handleGetFundaciones();
                                            props.handleClose();
                                        
                                    }, (error) =>{
                                        Swal.close()
                                        console.log(error);
                                        Swal.fire({
                                            title: 'Error',
                                            icon: 'error',
                                            text: 'Se Presentó Un Error Al Guardar La Fundacion'
                                        })
                                    });
                                } else if (result.isDenied) {
                                    Swal.fire({ 
                                        allowOutsideClick: false,
                                        title: 'Los Cambios No Se Han Guardado',
                                        icon: 'info'})                                
                                }
                              })
                      
    }

return (
    <Container>
        {
            (props.show) && 
                <EditFundacionesModal
                fundaciones= {props.fundaciones}
                show={props.show}
                handleClose={props.handleClose}
                handleEditFundaciones = {handleEditFundaciones}/>  
        }
    </Container>
)
}

export default EditFundaciones;

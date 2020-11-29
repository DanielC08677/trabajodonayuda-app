import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Swal from 'sweetalert2'


function DonarModal(props){

    const {show,handleClose} = props;
    const [idIdentificacion, setFundacionesId] = useState(props.fundaciones.idIdentificacion);
    const [nombreFundacion, setFundacionesNombre]= useState(props.fundaciones.nombreFundacion);
    const [dinero, setDinero] = useState(null);

    const handleOnChange = (e) =>{
      
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);
      
      switch(name){
        case "idIdentificacion":
          setFundacionesId(value ? value :null)
        break;
        case "nombreFundacion":
          setFundacionesNombre(value ? value : null )
          break;
        case "dinero":
            setDinero(value ? value : null )
        break;
    
      }
    }

    const guardarDonacion = () =>{
        Swal.fire({
            allowOutsideClick: false,
            title: '¿Quieres guardar El producto?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Guardar`,
            denyButtonText: `No Guardar`,
            icon: 'question'
          }).then((result) => {
            if (result.isConfirmed) {
                    Swal.fire({
                    allowOutsideClick: false,
                    title: 'Donación Realizada exitosamente ',
                    confirmButtonText: `OK`,
                    icon: 'check',
                    text: `${idIdentificacion} /n  ${idIdentificacion} /n ${idIdentificacion} `,
                    timer: 2000,
                  });
            } else if (result.isDenied) {
                Swal.fire({ 
                    allowOutsideClick: false,
                    title: 'Los Cambios no se an guardado',
                    icon: 'info'})                                
            }
          })
    }
    return(
        <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <FormGroup>
                    <FormLabel>Identificacion</FormLabel>
                    <FormControl
                    name="idIdentificacion"
                    onChange={handleOnChange}
                    value={idIdentificacion ? idIdentificacion:"" } />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Nombre Fundacion</FormLabel>
                    <FormControl
                    name="nombreFundacion"
                    onChange={handleOnChange}
                    value={nombreFundacion ? nombreFundacion:"" } />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Cantidad Dinero a Donar</FormLabel>
                    <FormControl
                    name="dinero"
                    onChange={handleOnChange}
                    value={dinero ? dinero:"" } />
                </FormGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button 
            variant="primary" 
            onClick={() => guardarDonacion()}
            disabled={!idIdentificacion || !nombreFundacion || !dinero}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DonarModal;
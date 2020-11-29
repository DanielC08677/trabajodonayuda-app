import React, { useState } from 'react';
import { Modal, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';


function EditFundacionesModal(props){

    const {show,handleClose} = props;

    const [idIdentificacion, setFundacionesId] = useState(props.fundaciones.idIdentificacion);
    const [nombreFundacion, setFundacionesNombre]= useState(props.fundaciones.nombreFundacion);
    const [proposito, setFundacionesProposito] = useState(props.fundaciones.proposito);
    const [direccion, setFundacionesDireccion] = useState(props.fundaciones.direccion);
    const [telefo, setFundacionesTelefo]=useState(props.fundaciones.telefo);

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
        case "proposito":
          setFundacionesProposito(value ? value : null )
          break; 
        case "direccion":
          setFundacionesDireccion(value ? value : null )
          break;   
          case "telefo":
            setFundacionesTelefo(value ? value : null )
          break;  
      }
    }
    return(
        <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Fundacion</Modal.Title>
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
                    <FormLabel>Proposito</FormLabel>
                    <FormControl
                    name="proposito"
                    onChange={handleOnChange}
                    value={proposito ? proposito:"" } />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Direccion</FormLabel>
                    <FormControl
                    name="direccion"
                    onChange={handleOnChange}
                    value={direccion ? direccion:"" } />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Telefono</FormLabel>
                    <FormControl
                    name="telefo"
                    onChange={handleOnChange}
                    value={telefo ? telefo:"" } />
                </FormGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button 
            variant="primary" 
            onClick={() => props.handleEditFundaciones(
                idIdentificacion,
                {
                idIdentificacion,
                nombreFundacion,
                proposito,
                direccion,
                telefo,
                },
                props.fundaciones.handleGetFundaciones
            )}
            disabled={!idIdentificacion || !nombreFundacion || !proposito || !direccion || !telefo}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditFundacionesModal;
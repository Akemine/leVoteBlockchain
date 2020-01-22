import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';


function Accueil() {
    
  return (
      
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
      <Button variant="flat" size="xxl">
        flat button
      </Button>
    </Alert>
    
  )
}

export default Accueil;
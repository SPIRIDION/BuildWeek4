import { Container, Nav, Navbar, InputGroup, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const CustomNav = () => {
const Navigate=useNavigate()
  return (

    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='d-flex justify-space-between'>
          <div className='d-flex align-items-center'>
            <Navbar.Brand href="#home">LinkedIn</Navbar.Brand>
            <InputGroup>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder='Cerca'
              />
            </InputGroup>
            <Button className='btn btn-info ms-3 text-white'>Cerca</Button>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Rete</Nav.Link>
              <Nav.Link href="#home">Lavoro</Nav.Link>
              <Nav.Link href="#link">Messaggistica</Nav.Link>
              <Nav.Link onClick={() => Navigate('/tu') }>Tu</Nav.Link>
              <Nav.Link href="#link">Per le aziende</Nav.Link>
              <Nav.Link href="#link">Pubblicizza</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNav
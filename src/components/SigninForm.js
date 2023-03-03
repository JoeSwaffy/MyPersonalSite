import './Signin.css'
import { Container, Form, Button } from 'react-bootstrap';


function SigninForm () {
    return(
        <>
            <Container>
            
            <div className="login">
            <center>
                <h3>Login</h3>
                <br />
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
            </center>
            </div>
            </Container>
        </>
    )
}
export default SigninForm;
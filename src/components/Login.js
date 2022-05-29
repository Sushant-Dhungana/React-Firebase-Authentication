import React,{useState} from "react";
import { Button, Alert } from "react-bootstrap";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, googleSignIn} = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");

    try {
        await login(email, password);
        navigate("/home");
        
    }catch(err){
        setError(err.message);
    }

  };


  const handleGoogleSignIn = async(e) => {
    e.preventDefault();


    try{
      await googleSignIn();
      navigate("/home");

    } catch(err) {
        setError(err.message);
    }


  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div><GoogleButton 
      onClick={handleGoogleSignIn}
      /></div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account?<Link to="/signup">Sign up</Link> 
      </div>
    </>
  );
}

export default Login;

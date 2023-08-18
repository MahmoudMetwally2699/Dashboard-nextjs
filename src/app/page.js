'use client'
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Image from 'next/image'
import'./login.css'
import Logo from "../../public/Logo.png";
import { login } from "../../src/redux/features/login";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <section>
      <div className="login-box">
        <div className="logo__login">
          <Image width={60} height={60} src={Logo} alt="Logo" />
        </div>
        <p className="title">Login</p>
        <Form method="post">
          <Form.Group className="user-box">
            <Form.Control
              required="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <Form.Label>User Name</Form.Label>
          </Form.Group>
          <Form.Group className="user-box">
            <Form.Control
              required="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Form.Label>Password</Form.Label>
          </Form.Group>
          <Link
          href=''
            onClick={(event) => {
              event.preventDefault();
              const formData = {
                username,
                password,
              };
              const jsonData = JSON.stringify(formData);
              console.log(jsonData);
              dispatch(login(jsonData));
              const user = dispatch(login(jsonData)).then(
                (data) => {
                  const data1=data?.payload?.status;
                  if (data1 === 'success'){
                    router.push('/Dashboard')
                  }
                  
                },
                (error) => {
                  console.log(error);
                }
              );
            }}  
            type="submit"
            className="btn-submit "
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </Form>
        <p>
          Don't have an account?
          <Link href="/signup" className="a2">
            Sign up!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
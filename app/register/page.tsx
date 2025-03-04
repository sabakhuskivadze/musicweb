"use client"
import styles from './page.module.scss'
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';
import { Button, message, Space } from 'antd';
import LoginFormInput from '../components/loginformInput/loginforminput';
export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [messageApi, contextHolder] = message.useMessage();

    const change1 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const change2 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const change3 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSubmit = async () => {
        console.log(email);
        
        axios.post("http://localhost:3001/register",{
            name:name,
            email:email,
            password:password
        })
        .then((data)=> {
            console.log(data.data);
            messageApi.open({
                type: 'success',
                content: 'This is a success message',
              });
        }).catch(() => {
            console.log('error');
            messageApi.open({
                type: 'error',
                content: 'This is an error message',
              });
        })
    }
    return(
        <>
              {contextHolder}
        <div className={styles.Login}>
                <div className={styles.LoginContainer}>
                    <Image
                        src="/images/loginimg.png"
                        alt="Login Image"
                        width={559}
                        height={469}
                        className={styles.loginPhoto}
                    />
                    <div className={styles.container}>
                        <div className={styles.card}>
                            <div className={styles.text}>
                                <h1 className={styles.cardTitle}>Log In to Your Account</h1>
                                <p className={styles.cardDescription}>Enter The email and password you used
                                    to register</p>
                            </div>
                            <div className={styles.groupInput}>
                            <LoginFormInput
                                    title={"Name"}
                                    placeholder={"Enter Name"}
                                    type={"text"}
                                    change1={change3}
                                />
                                <LoginFormInput
                                    title={"Email"}
                                    placeholder={"Enter Email"}
                                    type={"text"}
                                    change1={change1}
                                />
                                <LoginFormInput
                                    title={"Password"}
                                    placeholder={"Enter Password"}
                                    type={"password"}
                                    change1={change2}
                                />
                            </div>
                            <p className={styles.forgetpassword}>Forgot Your Password?</p>
                            <Space>
                            <button className={styles.btn1} onClick={handleSubmit}>Sign In</button>
                            </Space>
                            <p className={styles.switch}>Don’t Have An Account? <span className={styles.span1}> Create An Account</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
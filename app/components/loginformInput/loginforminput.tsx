"use client"
import styles from "./loginforminput.module.scss"

type Props = {
    title:string,
    placeholder:string
    type:string,
    change1?:()=>{},
}

export default function LoginFormInput(props:Props){
    return(
        <>
        <div className={styles.loginFormInput}>
            <div className={styles.text}>
                <p>{props.title}</p>
            </div>
            <div className={styles.input}>
                <input onChange={props.change1} className={styles.input1} type={`${props.type}`} placeholder={`${props.placeholder}`} />
            </div>
        </div>
        </>
    )
}
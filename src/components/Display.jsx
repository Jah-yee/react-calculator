import styles from "./Display.module.css"
let Display=({display}) =>{
    return (
        <>
            <input type="text" id={display} className={styles.input} readOnly value={display}></input>
        </>
    );
}
export default Display;
import styles from "./ButtonSection.module.css"
let ButtonSection=({buttons,buttonHandling})=>{
    return(
        <>
            <div className={styles.container}>
                {
                    buttons.map((button)=>(
                        <button key={button} className={styles.sajidBt} onClick={buttonHandling}>{button}</button>
                    ))
                }
            </div>
        </>
    );
}
export default ButtonSection
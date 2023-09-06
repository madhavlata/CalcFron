import styles from "../styles/SignupStyles.module.css";

export function Loader(){
    return(<div style={{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundImage:"url('./1.png')",display:"flex",backgroundSize:"cover",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <img src="./anc-logo.png" style={{width:"150px",height:"150px"}}></img>
        <div>
        <div className={styles.loaderwrapper}>
        <div className={styles.loadercircle}></div>
        <div className={styles.loadercircle}></div>
        <div className={styles.loadercircle}></div>
        <div className={styles.loadershadow}></div>
        <div className={styles.loadershadow}></div>
        <div className={styles.loadershadow}></div>
        <span  className={styles.loaderspan} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Academics and Career Council</span>
        </div>
        </div>

    </div>)
}
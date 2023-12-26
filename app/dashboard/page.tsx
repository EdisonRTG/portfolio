import { lusitana } from './fonts'
import styles from './homedashboard.module.css'
import Link from "next/link"

export default function PageDashboard(){

return(
    <div className="py-18 flex justify-center">
    <p className= {`${lusitana.className}`}>
        <strong>
        Bienvenido
        </strong>
        </p>
        
    <Link href="/">
    <button className={styles.shap}></button>
    </Link>
    <div>
<p>
    Hola Putos
</p>
</div>
</div>
)

}
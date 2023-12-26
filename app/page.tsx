import { lusitana } from './fonts'
import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image'



export default function Page(){
    return (
        <div className="py-18 flex justify-center">
            <p className= {`${lusitana.className}`}>
                <strong>
                Bienvenido
                </strong>                
            </p>
            <div>

            <Link href="/dashboard">
            <button className={styles.shap}></button>
            </Link>
            <div className='= "flex items-center justify-center
            p-6 md:w=3/5 md:px-0 md:py-0 "'>
                <Image
                src='/foto.png'
                alt="Image"
                width={150}
                height={100}
                quality="100"
                
                style={{
                    
                    border: 'solid 1px black ',
                    borderRadius: '100% 100%', 
                    maxWidth: '75%',
                    height: 'auto',      
                  }}
                className={'hidden md:block' }
                
                />

                <Image
                src='/foto.png'
                alt="Image"
                width={100}
                height={76}
                quality="100"
                className='block md:hidden'
                />
                </div>



</div>
</div>



    )
    
    }


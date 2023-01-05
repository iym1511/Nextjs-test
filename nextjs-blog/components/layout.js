import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children, home}) => {
    return (  
        <div className={styles.container}>
            <Head>
                <Link rel='icon' href=""></Link>
                <title>layout next</title>
            </Head>
            <header>
                {home ? <h1>home</h1> : <h1>not home</h1>}
            </header>
            <div>{children}</div>
        </div>
    );
}
 
export default Layout;
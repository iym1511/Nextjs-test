import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({children, home}) => {
    return (  
        <div className={styles.container}>
            <Head>
                <Link rel='icon' href=""></Link>
                <title>layout next</title>
            </Head>
            <header>
                {home ? 
                <div>
                    <Image src='/images/profile.jpg'
                    height={100}
                    width={100}
                    alt="프로필사진"
                    ></Image>
                    <h2>Green blog</h2>
                </div> 
                : 
                <h1>not home</h1>}
            </header>
            <div>{children}</div>
            <footer>
                <p>개인 블로그입니다</p>
            </footer>
        </div>
    );
}
 
export default Layout;
import Link from 'next/link'

const About = () => {
    return (  
        <div>
            <h1>about페이지 입니다</h1>
            <Link href='/'>홈으로 이동</Link>
            <hr />
            <Link href='/user/profile'>프로필로 이동</Link>
        </div>
    );
}
 
export default About;
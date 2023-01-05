// 컴포넌트로 사용하는 이름규칙은 대문자
// Next.js에서 pages안의 내용은 주소를 따라가기에

import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

const Firstpost = () => {
    return (   // Layout에 적용된 css는 여기서 먹힘
            <Layout>
                <h1>First Post</h1>
                <Link href="/">back to home</Link>
                <Image 
                    src='/images/profile.jpg'
                    width={144}
                    height={144}
                    > 
                </Image>
            </Layout>
    );
}
 
export default Firstpost;
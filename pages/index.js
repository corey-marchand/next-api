import Link from 'next/link';
import Header from '../components/Header';
import MyLayout from '../components/MyLayout';

export default function Home(props){
    return (
        <MyLayout>
            <h1>I am home</h1>
            <Header />
            <h2>{props.comic.title}</h2>
            <img src={props.comic.img} alt={props.comic.alt} />
            <Footer comicNumber={props.comic.num} />
        </MyLayout>
    )
}

function Footer(props){
    const currentNumber = props.comicNum;

    const nums = [];

    for(let n = currentNumber; n > currentNumber - 10; n--){
        nums.push(n);
    }

    return (
        <>
            <footer>
                <h2> Previous {nums.length}</h2>
                <ul>
                    {nums.map(num => (
                        <Link href="/num/[id].js" as={`/num/${num}`} key={num}>
                            <a>#{num}</a>
                        </Link>
                    ))}
                </ul>
                    <style jsx>{`
                        a {
                            margin-right: 5px;
                        }
                    `}</style>
            </footer>
        </>
    )
}

export async function getServerSideProps(context){
    const response = await fetch('https://xkcd.com/info.0.json');

    const data = await response.json();

    return {
        props: {
            comic: data
        }
    }
}

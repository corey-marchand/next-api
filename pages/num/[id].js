export default function ComicDetail(props){
    return (
    <h1>{props.comic.title}</h1>
    )
}

export async function getServerSideProps(context){
    const number = context.query.id;

    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);

    const comic = await response.json();

    return {
        props: {
            comic
        }
    }
}
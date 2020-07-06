import Header from './Header';

export default props => (
    <div>
        {props.children}
        <style jsx>{`
            margin: 20px;
            padding: 20px;
            border: 1px solid #DDD;
            background-color: green;
        `}</style>
    </div>
)
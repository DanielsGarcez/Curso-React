import Item from './Item';

function List(){
    return(
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Ferrari"></Item>
                <Item marca="Lamborghini"></Item>
                <Item marca="Porsche"></Item>
            </ul>
        </>
    )
}

export default List
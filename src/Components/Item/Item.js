const Item = ({img, name}) => {
    return(
        <li>
            <img src={img} alt={name}/>
            {name}
            <button>See more</button>
        </li>
    )
}

export default Item
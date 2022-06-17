import './Item.css'
const Item = ({img, name}) => {
    return(
        <li className="ItemDiv">
            <img src={img} alt={name}/>
            {name}
        </li>
    )
}
export default Item

const VechicleItem = (props) => {
    const {name, color} = props.vehicle;

    return (
        <>
        <h2>{name}</h2>
        <p>{color}</p>
        </>
    )
}

export default VechicleItem;
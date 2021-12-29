import VechicleItem from "./VehicleItem";

const Vechicles = () => {
    const cars = [
        {
            id: 1,
            name: "volvo", 
            color: "red",
        },
        {
            id: 2,
            name: "ford", 
            color: "blue"
        }
    ]

    const bikes = [
        {
            id: 1,
            name: "honda",
            color: "green",
        },
        {
            id: 2,
            name: "yamaha",
            color: "silver",
        }
    ]

    return (
        <>
        {cars.map((car) => (
            <VechicleItem key={car.id} vehicle={car} type="car"/>
        ))}

        {bikes.map((bike) => (
            <VechicleItem key={bike.id} vehicle={bike} type="bike"/>
        ))}
        </>
    )
}

export default Vechicles;
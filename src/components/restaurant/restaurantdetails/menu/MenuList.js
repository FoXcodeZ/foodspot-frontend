import {useEffect, useState} from "react";
import Menu from "./Menu";
import {useApi} from "../../../../hooks/useApi";


const MenuList = ({restaurant}) => {

    const [menu, setMenu] = useState([])
    const {get} = useApi()
    // const {openRestaurant} = useContext(RestaurantContext)
    // const restaurantId = openRestaurant.id

    useEffect(() => {
        get("api/v1/dishes", {restaurantId: restaurant.id})
            .then(response => setMenu(response))
    }, []);

    return (
        <>
            {menu.length === 0 ? (
                <div>Menu not added yet</div>
            ) : (
                menu.map((profile, index) => <Menu key={index} menu={profile}/>)
            )}
        </>
    )
}

export default MenuList

import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="p-4 m-4 text-lg">
      <h1 className="font-bold">{name}</h1>
      <p>
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      <h2 className="font-bold text-lg py-4">Menu</h2>
      <ul className="p-4 m-4">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className=" p-2 m-2 bg-g w-[450px] justify-between bg-orange-100 rounded-lg"
          >
            {item.card.info.name} - RS.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

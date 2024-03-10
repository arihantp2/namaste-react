import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="p-4 m-4 text-lg text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {/* <h2 className="font-bold text-lg py-4">Menu</h2> */}
      {/* <ul className="p-4 m-4">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className=" p-2 m-2 bg-g w-[450px] justify-between bg-orange-100 rounded-lg"
          >
            {item.card.info.name} - RS.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

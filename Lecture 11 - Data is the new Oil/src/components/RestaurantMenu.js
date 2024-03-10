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

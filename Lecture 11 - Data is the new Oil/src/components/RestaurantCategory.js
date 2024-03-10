import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(true);
    // setShowItems(!showItems); //toggle feature
    setShowIndex(null);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

type RoomProps = {
  houseItems: string[];
}

function HouseItems({houseItems}:RoomProps):JSX.Element {
  return(
    <>
      {houseItems.map((item, itemId) => {
        const keyValue = itemId;
        return(
          <li className="property__inside-item" key={keyValue}>
            {item}
          </li>
        );
      })}
    </>
  );
}

export default HouseItems;

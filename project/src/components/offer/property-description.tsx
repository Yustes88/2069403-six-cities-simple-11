type RoomProps = {
  propertyDescription: string[];
}

function PropertyDescription({propertyDescription}:RoomProps):JSX.Element {
  return(
    <>
      {propertyDescription.map((description, itemId) => {
        const keyValue = itemId;
        return(
          <p className="property__text" key={keyValue}>
            {description}
          </p>
        );
      })}
    </>
  );
}

export default PropertyDescription;

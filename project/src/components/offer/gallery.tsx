type RoomProps = {
  pictures: string[];
}

function Gallery({pictures}: RoomProps):JSX.Element {
  return(
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {pictures.slice(0, 6).map((picture, itemId) => {
          const keyValue = itemId;
          return(
            <div className="property__image-wrapper" key={keyValue}>
              <img className="property__image" src={picture} alt="Studio"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

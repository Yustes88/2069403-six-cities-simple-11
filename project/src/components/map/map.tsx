import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { City, OfferType } from '../../types/types';

type MapProps = {
  city: City;
  offers: (OfferType | undefined)[];
  selectedOffer: OfferType | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, offers, selectedOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(!map) {
      return;
    }
    map.setView([city.location.latitude, city.location.longitude],
      city.location.zoom);
  }, [city.location.latitude, city.location.longitude, city.location.zoom, map]);


  useEffect(() => {
    if (map) {
      offers.forEach((offer: OfferType | undefined) => {
        if(offer) {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });
          marker
            .setIcon(
              selectedOffer !== undefined && offer.id === selectedOffer.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(map);
        }
      });
    }
  }, [map, city, offers, selectedOffer]);


  return <div style={{ height: '600px' }} ref={mapRef}></div>;
}

export default Map;

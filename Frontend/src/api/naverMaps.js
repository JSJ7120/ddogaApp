import maker from "../assets/icon/serviceDetail/maker.svg";

export const fetchMapsData = async (address, naverMap) => {
  const response = await fetch(`/map-geocode/v2/geocode?query=${address}`, {
    method: "GET",
    headers: {
      "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVERMAP_API_KEY_ID,
      "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVERMAP_API_KEY,
    },
  });
  const data = await response.json();

  const { addresses } = data;

  const { naver } = window;

  const y = Number(addresses[0]?.y);
  const x = Number(addresses[0]?.x);

  const location = new naver.maps.LatLng(y, x);

  const mapOptions = {
    center: location,
    zoom: 17,
    zoomControl: false,
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
    draggable: false,
    pinchZoom: false,
    scrollWheel: false,
    keyboardShortcuts: false,
    disableDoubleTapZoom: false,
    disableDoubleClickZoom: true,
    disableTwoFingerTapZoom: false,
  };

  const map = new naver.maps.Map(naverMap.current, mapOptions);
  new naver.maps.Marker({
    position: location,
    map,
    icon: {
      url: maker,
      size: new naver.maps.Size(64, 64),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(25, 26),
    },
  });

  return map;
};

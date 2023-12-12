import maker from "../assets/icon/serviceDetail/maker.svg";

export const fetchMapsData = async (locations, naverMap) => {
  try {
    const { x, y } = locations;

    const { naver } = window;

    const location = new naver.maps.LatLng(Number(y), Number(x));

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
  } catch (error) {
    console.error("JSON 파싱 오류:", error);
  }
};

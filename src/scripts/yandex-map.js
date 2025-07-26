const INITIAL_MAP_COORDS = [55.731175, 37.568262];
const DEFAULT_ZOOM_MAP = 12;
const DEFAULT_PLACEMARK_URL = "/icons/marker.svg";
const DEBOUNCE_DELAY = 500;
const MOBILE_VIEWPORT = 768;

const mobileOffsetAndSizes = {
  size: [42, 42],
  offset: [-21, -21],
};

const desktopOffsetAndSizes = {
  size: [42, 42],
  offset: [-21, -21],
};

const updatePlacemarkIconSize = (width) =>
  width <= MOBILE_VIEWPORT ? mobileOffsetAndSizes : desktopOffsetAndSizes;

const debounce = (func, delay) => {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(args), delay);
  };
};

export class YandexMap {
  mapNode = null;
  placemark = null;
  map = null;
  initialCoords = INITIAL_MAP_COORDS;

  constructor(node, initialCoords) {
    if (initialCoords) {
      this.initialCoords = initialCoords;
    }

    if (typeof node === "string" && document.getElementById(node)) {
      this.mapNode = node;
      this.init();
    }
  }

  setPlacemark = () => {
    return new ymaps.Placemark(this.initialCoords, null, {
      iconLayout: "default#image",
      iconImageHref: DEFAULT_PLACEMARK_URL,
      iconImageSize: updatePlacemarkIconSize(window.innerWidth).size,
      iconImageOffset: updatePlacemarkIconSize(window.innerWidth).offset,
    });
  };

  updatePlacemark = () => {
    const newSizes = updatePlacemarkIconSize(window.innerWidth);
    this.placemark.options.set({
      iconImageSize: newSizes.size,
      iconImageOffset: newSizes.offset,
    });
  };

  setInitialMap = () => {
    return new ymaps.Map(this.mapNode, {
      center: this.initialCoords,
      zoom: DEFAULT_ZOOM_MAP,
      behaviors: ["drag", "pinchZoom", "dblClick"],
    });
  };

  updatePlacemark = () => {
    const newSizes = updatePlacemarkIconSize(window.innerWidth);
    this.placemark.options.set({
      iconImageSize: newSizes.size,
      iconImageOffset: newSizes.offset,
    });
  };

  removeMapControls = () => {
    this.map.controls.remove("geolocationControl");
    this.map.controls.remove("searchControl");
    this.map.controls.remove("trafficControl");
    this.map.controls.remove("typeSelector");
    this.map.controls.remove("fullscreenControl");
    this.map.controls.remove("rulerControl");
    this.map.controls.remove("routeEditor");
    this.map.controls.remove("zoomControl");
    this.map.controls.remove("routeButtonControl");
  };

  init() {
    ymaps.ready(() => {
      this.map = this.setInitialMap();
      this.placemark = this.setPlacemark();
      this.removeMapControls();

      window.addEventListener(
        "resize",
        debounce(this.updatePlacemark, DEBOUNCE_DELAY)
      );

      this.map.geoObjects.add(this.placemark);
    });
  }
}

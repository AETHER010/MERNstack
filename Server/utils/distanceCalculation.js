// calculate closest distance between donors and requestor location
import { getDistance } from "geolib";

const distance = getDistance(
  { latitude: donor.latitude, longitude: donor.longitude },
  { latitude: requestor.latitude, longitude: requestor.longitude }
);

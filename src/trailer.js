import tr1 from "./images/dv.jpg";
import tr2 from "./images/dv0.jpg";
import tr3 from "./images/dv1.jpg";
import Rt1 from "./images/Rt1.jpg";
import Rt2 from "./images/Rt2.jpeg";
import Rt3 from "./images/Rt3.jpeg";
import Ut1 from "./images/Ut1.jpg";
import Ut2 from "./images/Ut2.jpeg";
import Ut3 from "./images/Ut3.jpeg";
export const Trailers = [
  {
    id: 0,
    animation: "left",
    img: tr1,
    subImages: [tr1, tr2, tr3],
    title: "Full TruckLoad",
    date: "See more",
    Description:
      "At Kalway, we consolidate an extremely fragmented market by maintaining relationships with over 70,000 carriers to get you access across all equipment types and shipment needs. By maximizing truckload freight capacity, we help you achieve superior efficiency, wider reach and increased buying power.",
  },
  {
    id: 1,
    animation: "bottom",
    img: tr2,
    subImages: [Rt1, Rt2, Rt3],
    title: "LessThan Truck Load",
    date: "See more",
    Description:
      "Choose Less Than Truckload (LTL) to ship your goods efficiently, even when you don’t have a full truck to fill. Kalway will help you identify modal conversion opportunities to maximize savings.",
  },
  {
    id: 2,
    animation: "right",
    img: tr3,
    subImages: [Ut1, Ut2, Ut3],
    title: "Air And Ocean Freight",
    date: "See more",
    Description:
      "Kalway is an authorized reseller of UPS air services, with access to ocean services through UPS. This global footprint, combined with our massive centralized marketplace of carriers in North America, gives you the freedom to move freight anywhere your business demands—all with the same dedication, visibility and expertise you get from Kalway.",
  },
];

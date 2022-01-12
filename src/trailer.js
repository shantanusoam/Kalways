import tr1 from "./images/dv.jpg";
import tr2 from "./images/dv0.jpg";
import tr3 from "./images/dv1.jpg";
import Rt1 from "./images/Rt1.jpeg";
import Rt2 from "./images/Rt2.jpeg";
import Rt3 from "./images/Rt3.jpeg";
import Ut1 from "./images/Ut1.jpeg";
import Ut2 from "./images/Ut2.jpeg";
import Ut3 from "./images/Ut3.jpeg";
export const Trailers = [
  {
    id: 0,
    animation: "left",
    img: tr1,
    subImages: [tr1, tr2, tr3],
    title: "DRY VAN TRAILERS",
    date: "See more",
    Description:
      "Dry Van Trailers are used to haul non-temperature sensitive products and come in various sizes and specifications to accommodate our customer’s needs. BigRig keeps ready-to-go dry van trailers in its inventory at all times.",
  },
  {
    id: 1,
    animation: "bottom",
    img: tr2,
    subImages: [Rt1, Rt2, Rt3],
    title: "Reefer Trailers",
    date: "See more",
    Description:
      "Our refrigerated trailers have an insulated cargo body equipped with a refrigeration unit in order to control cargo temperature. BigRig keeps ready-to-go refrigerated trailers in its inventory at all times.",
  },
  {
    id: 2,
    animation: "right",
    img: tr3,
    subImages: [Ut1, Ut2, Ut3],
    title: "USED TRUCKS",
    date: "See more",
    Description:
      "Designed to reduce your cost of ownership, our trucks improved fuel economy, enhanced safety features and lead the way in technological advancements and driver comfort.",
  },
];

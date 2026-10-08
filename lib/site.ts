export const phoneDisplay = "98922 89987";
export const phoneTel = "+919892289987";
export const whatsappNumber = "919892289987";

export const addressLines = [
  "E6-203, 2nd floor,",
  "Bhumi World Industrial Park,",
  "near Mumbai-Nashik Highway,",
  "Bhiwandi, Thane, Maharashtra 421302",
];

export const fullAddress =
  "E6-203, 2nd floor, Bhumi World Industrial Park, near Mumbai-Nashik Highway, Bhiwandi, Thane, Maharashtra 421302";

export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Majestic+Seating+Solutions%2C+E6-203%2C+2nd+floor%2C+Bhumi+World+Industrial+Park%2C+near+Mumbai-Nashik+Highway%2C+Bhiwandi%2C+Thane%2C+Maharashtra%2C+421302&destination_place_id=ChIJ3yTfNm695zsRT612zXjuhlc";

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Majestic+Seating+Solutions%2C+E6-203%2C+2nd+floor%2C+Bhumi+World+Industrial+Park%2C+near+Mumbai-Nashik+Highway%2C+Bhiwandi%2C+Thane%2C+Maharashtra%2C+421302&query_place_id=ChIJ3yTfNm695zsRT612zXjuhlc";

export const mapEmbed =
  "https://maps.google.com/maps?q=Majestic%20Seating%20Solutions%20Bhumi%20World%20Industrial%20Park%20Bhiwandi%20421302&z=15&output=embed";

export const hours = [
  ["Monday", "9am–7pm"],
  ["Tuesday", "9am–7pm"],
  ["Wednesday", "9am–7pm"],
  ["Thursday", "9am–7pm"],
  ["Friday", "9am–7pm"],
  ["Saturday", "9am–7pm"],
  ["Sunday", "Not listed"],
] as const;

export const nav = [
  { href: "/collection", label: "Collection" },
  { href: "/materials", label: "Materials" },
  { href: "/about", label: "About" },
  { href: "/workshop", label: "Workshop" },
  { href: "/contact", label: "Contact" },
];

export const collection = [
  {
    id: "dining-chairs",
    num: "01",
    name: "Dining chairs",
    meta: "Wood, steel, fabric, rexine",
    interest: "Dining chairs",
    image: "/images/dining.jpg",
    alt: "Oak dining chair with a woven fabric seat",
    text: "Dining chairs are a core part of the workshop. Frames are made in wood or stainless steel, with seats and backs finished in fabric or rexine. Share the quantity, the room and the finish you have in mind.",
  },
  {
    id: "lounge-chairs",
    num: "02",
    name: "Lounge chairs",
    meta: "Made for longer sitting",
    interest: "Lounge chairs",
    image: "/images/lounge.jpg",
    alt: "Low lounge chair in oak with deep fabric cushions",
    text: "Lounge chairs are made for longer sitting, in the same material range: wood, stainless steel, fabrics and rexine. Tell the workshop how the chair will be used and what you need to know about options or availability.",
  },
  {
    id: "bar-stools",
    num: "03",
    name: "Bar stools",
    meta: "Bars and raised counters",
    interest: "Bar stools",
    image: "/images/stool.jpg",
    alt: "Bar stool with a steel frame and tan upholstered seat",
    text: "Bar stools are manufactured for bars and raised counters. Height, footrest, back and upholstery are confirmed with the workshop when you enquire, rather than taken from a fixed product page.",
  },
  {
    id: "puffy",
    num: "04",
    name: "Puffy",
    meta: "Ask for size and cover",
    interest: "Puffy",
    image: "/images/puffy.jpg",
    alt: "Low upholstered puffy in warm camel fabric",
    text: "Puffy seating — also listed as puffies — is part of the Majestic range. Size and cover, in fabric or rexine, are discussed when you enquire.",
  },
  {
    id: "benches",
    num: "05",
    name: "Benches",
    meta: "Length confirmed on enquiry",
    interest: "Benches",
    image: "/images/bench.jpg",
    alt: "Long oak dining bench beside a pale table",
    text: "Benches sit alongside dining chairs, lounge chairs, bar stools and puffy in the Majestic range. Share the length you need and where the bench will be used.",
  },
];

export const materials = [
  {
    id: "wood",
    num: "01",
    name: "Wood",
    interest: "Wood",
    image: "/images/wood.jpg",
    alt: "Close view of pale oak grain",
    text: "Wood is used in the dining chairs, lounge chairs, bar stools and related seating the workshop builds. Name the piece and the finish you want, and the team can say what is possible.",
  },
  {
    id: "stainless-steel",
    num: "02",
    name: "Stainless steel",
    interest: "Stainless steel",
    image: "/images/steel.jpg",
    alt: "Brushed stainless steel furniture frame",
    text: "Stainless steel is the other frame material Majestic works in, including seating for bars and busy rooms. Ask about it with the chair or stool you have in mind.",
  },
  {
    id: "fabrics",
    num: "03",
    name: "Fabrics",
    interest: "Fabrics",
    image: "/images/fabric.jpg",
    alt: "Oatmeal and sand upholstery fabrics",
    text: "Different types of fabrics are used for upholstery. The workshop can talk through options for dining chairs, lounge chairs, bar stools, puffy and benches when you get in touch.",
  },
  {
    id: "rexine",
    num: "04",
    name: "Rexine",
    interest: "Rexine",
    image: "/images/rexine.jpg",
    alt: "Tan rexine upholstery with a fine grain",
    text: "Rexine is offered alongside fabric as an upholstery choice. Include it in your enquiry if you want rexine as the cover.",
  },
];

export const interests = [
  "Dining chairs",
  "Lounge chairs",
  "Bar stools",
  "Puffy",
  "Benches",
  "Wood",
  "Stainless steel",
  "Fabrics",
  "Rexine",
  "General enquiry",
];

export function enquireHref(interest: string) {
  return `/contact?interest=${encodeURIComponent(interest)}`;
}

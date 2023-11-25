import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Details({ guests, bedrooms, beds, bathrooms }) {
  return (
    <Box shadow>
      <div className="details">
        <Heading border>Деталі властивості:</Heading>

        <ListItem imageSrc={guest}>
          <span>{guests} гості</span>
        </ListItem>

        <ListItem imageSrc={bedroom}>
          <span>{bedrooms} спальня</span>
        </ListItem>

        <ListItem imageSrc={bed}>
          <span>{beds} ліжко</span>
        </ListItem>

        <ListItem imageSrc={bathroom}>
          <span>{bathrooms} ванна кімната</span>
        </ListItem>
      </div>
    </Box>
  );
}

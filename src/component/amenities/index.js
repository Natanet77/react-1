import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import transfer from "./transfer.svg";
import service from "./service.svg";
import roomservice from "./roomservice.svg";
import forkids from "./forkids.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildrenFriendly,
}) {
  return (
    <Box shadow>
      <div className="amenities">
        <Heading border>Зручності</Heading>

        {hasPool ? <ListItem imageSrc={pool} children={"Басейн"} /> : ""}
        {hasGym ? <ListItem imageSrc={gym} children={"Спортивний зал"} /> : ""}
        {hasFreeBreakfast ? (
          <ListItem imageSrc={breakfast} children={"Безкоштовний сніданок"} />
        ) : (
          ""
        )}
        {hasFreeWiFi ? (
          <ListItem imageSrc={wifi} children={"Безкоштовний Wi-Fi"} />
        ) : (
          ""
        )}
        {hasParking ? (
          <ListItem
            imageSrc={parking}
            children={"Безкоштовний вуличний паркінг"}
          />
        ) : (
          ""
        )}
        {hasPetsAllowed ? (
          <ListItem
            imageSrc={pets}
            children={"Дозволено розміщення з домашніми тваринами"}
          />
        ) : (
          ""
        )}
        {hasAirportShuttle ? (
          <ListItem imageSrc={transfer} children={"Трансфер до/з аеропорту"} />
        ) : (
          ""
        )}
        {hasConciergeService ? (
          <ListItem imageSrc={service} children={"Консьєрж-сервіс"} />
        ) : (
          ""
        )}
        {hasRoomService ? (
          <ListItem
            imageSrc={roomservice}
            children={"Обслуговування номерів"}
          />
        ) : (
          ""
        )}
        {hasChildrenFriendly ? (
          <ListItem imageSrc={forkids} children={"Підходить для дітей"} />
        ) : (
          ""
        )}
      </div>
    </Box>
  );
}

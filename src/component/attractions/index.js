import { Fragment } from "react";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <Box shadow>
      <div className="attractions__block">
        <Heading>Пам'ятки поблизу</Heading>

        <div className="attractions__list">
          {list.map(({ id, name, link }) => (
            <Fragment key={id}>
              <a className="attractions__item" href={link}>
                <ListItem>{name}</ListItem>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

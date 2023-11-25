import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function GuestReviews({ list }) {
  return (
    <div className="reviews__block">
      <Heading border>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__header">
        <span className="reviews__title">{guestName}</span>
        <span className="reviews__info">Рейтинг {rating}</span>
      </div>
      <div className="reviews__text">{review}</div>
    </Box>
  );
}

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function AdditionalProperties({
  houseRules,
  cancellationPolicy,
  localTransportation,
  hostLanguages,
  specialOffers,
  checkInInstraction,
}) {
  return (
    <Box shadow>
      <div className="additional">
        <Heading border>Додаткові властивості</Heading>

        <ListItem title="Правила дому">
          <span>{houseRules}</span>
        </ListItem>

        <ListItem title="Політика скасування">
          <span>{cancellationPolicy}</span>
        </ListItem>

        <ListItem title="Місцевий транспорт">
          <span>{localTransportation}</span>
        </ListItem>

        <ListItem title="Мови хоста">
          <span>{hostLanguages}</span>
        </ListItem>

        <ListItem title="Спеціальні пропозиції:">
          <span>{specialOffers}</span>
        </ListItem>

        <ListItem title="Інструкції щодо реєстрації">
          <span>{checkInInstraction}</span>
        </ListItem>
      </div>
    </Box>
  );
}

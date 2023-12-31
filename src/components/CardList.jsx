import React from "react";
import Card from "./Card";

const CardList = ({ members }) => {
  const cardGenerator = members.map((member) => {
    return <Card member={member} key={member.id} />
  })

  return (
    <div>
      {cardGenerator}
    </div>
  );
}

export default CardList;
import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";


  // const cardIndexHelper = (cardIdx, total) => {
  //   if (cardIdx !== total) {
  //     // setCardIdx(cardIdx + 1);
  //     return cardIdx + 1
  //   } else {
  //     // setCardIdx(0);
  //     return 0
  //   }
  // };

function Carousel(props) {


  const cardIndexHelper = () => {
    if (cardIdx !== total) {
      // setCardIdx(cardIdx + 1);
      return cardIdx + 1;
    } else {
      // setCardIdx(0);
      return 0;
    }
  };

  const [cardIdx, setCardIdx] = useState(0);

  // let goForward = () => setCardIdx(cardIdx < total ? cardIdx + 1: 0);

  // let goForward = () => setCardIdx(cardIndexHelper(cardIdx, total))
  // const cardIndexHelper = () => {
  //   if (cardIdx < total) {
  //     setCardIdx(cardIdx + 1);
  //   } else {
  //     setCardIdx(0)
  //   }
  // }

    let goForward = cardIndexHelper();


      const card = props.cardData[cardIdx];
      const total = props.cardData.length;



      console.log(cardIdx);
      console.log(`total`, total);

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goForward}
          data-testid="left-arrow"
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;

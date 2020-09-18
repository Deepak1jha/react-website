import React from 'react';
import {Link} from "react-router-dom";

export default function CardItem() {
  return (
    <>
      <li className="cards_item">
        <Link className="cards__item__link" to="/">
          <figure className="cards__item__pic-wrap">
            <img
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}
              alt={"travel image"}
              className="cards__item__pic-wrap"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text"
            >CArd</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

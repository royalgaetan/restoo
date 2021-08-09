import { IonItem, IonThumbnail, IonLabel, IonRouterLink } from "@ionic/react";
import React from "react";

const ItemPlat = ({ img, subtext, text }) => {
  return (
    <>
      <IonRouterLink
        href="/inCommand"
        routerDirection="forward"
        className="ion-margin"
      >
        <IonItem detail>
          <IonThumbnail slot="start">
            <img src={img} alt="item_img" />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <b>{text}</b>
            </h3>
            <p>{subtext}</p>
          </IonLabel>
        </IonItem>
      </IonRouterLink>
    </>
  );
};

export default ItemPlat;

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonFooter,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonRouterLink,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonChip,
} from "@ionic/react";
import {
  cashOutline,
  checkmarkCircle,
  informationCircleOutline,
  locateOutline,
  locationOutline,
  map,
  paperPlaneOutline,
  pencilOutline,
  pin,
} from "ionicons/icons";
import React from "react";
import "./inCommand.css";

import img1 from "./../assets/img/WhatsApp Image 2021-08-09 at 10.43.07 - Copy.jpeg";
import logo1 from "./../assets/img/logo1.png";
import map1 from "./../assets/img/map1.png";

const inCommand = () => {
  return (
    <>
      {" "}
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Commander</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="Tab1" text="" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <img src={img1} alt="img__pub" style={{}} />

          <div className="margin_brand">
            <IonChip>
              <IonAvatar>
                <img src={logo1} alt="logo_seller" />
              </IonAvatar>
              <IonLabel>
                Chez <b>KASAM INDUSTRIES LLC</b>
              </IonLabel>
            </IonChip>
            <IonLabel slot="end" style={{ color: "#ffca22" }}>
              <b>3200 FCFA</b>
            </IonLabel>
          </div>

          <div className="ion-margin">
            <IonLabel>
              <h1>
                <b>Tudu: Piment en Poudre 10g</b>
              </h1>
            </IonLabel>
            <p>
              {" "}
              Une nouvelle façon de savourer vos plats. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Voluptatibus possimus inventore
              mollitia, placeat veritatis explicabo aut dolor repellat maxime
            </p>
          </div>
          <div>
            <div className="margin_item">
              <IonItem>
                <IonLabel>
                  <b>Quantité:</b>
                </IonLabel>
                <IonInput
                  type="number"
                  placeholder="Entrer votre quantité"
                  min="1"
                  max="100"
                ></IonInput>
              </IonItem>
              <IonCard>
                <IonItem>
                  <IonIcon icon={cashOutline} slot="start" />
                  <IonLabel>Prix Total:</IonLabel>
                  <IonLabel slot="end" style={{ color: "#ffca22" }}>
                    <b>3200 FCFA</b>
                  </IonLabel>
                </IonItem>
              </IonCard>
            </div>

            <div className="margin_item">
              <IonItem>
                <IonLabel>
                  <b>Lieu de livraison:</b>
                </IonLabel>
                <IonInput
                  type="text"
                  placeholder="Entrer votre lieu de livraison"
                ></IonInput>
                <IonButton fill="clear" slot="end">
                  <IonIcon slot="icon-only" icon={locationOutline} />
                </IonButton>
              </IonItem>
              <IonCard>
                <img src={map1} alt="img__pub" style={{}} />
              </IonCard>
            </div>

            <div className="ion-margin">
              <IonLabel>
                <b>Vos coordonnées de payement:</b>
                <IonRouterLink style={{ float: "right" }} href="./tab3">
                  <IonIcon icon={pencilOutline} /> Modifier
                </IonRouterLink>
              </IonLabel>
              <IonRadioGroup value="Mobile_Money">
                <IonItem>
                  <IonLabel>Mobile Money</IonLabel>
                  <IonRadio
                    slot="start"
                    color="warning"
                    value="Mobile_Money"
                  ></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>Airtel Money</IonLabel>
                  <IonRadio
                    slot="start"
                    color="danger"
                    value="Airtel_Money"
                  ></IonRadio>
                </IonItem>
              </IonRadioGroup>
            </div>

            <IonItem>
              <br />
            </IonItem>
          </div>
        </IonContent>
        <IonFooter mode="ios">
          <IonButton expand="block" mode="ios" color="primary">
            Commander
            <IonIcon slot="end" icon={paperPlaneOutline} />
          </IonButton>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default inCommand;

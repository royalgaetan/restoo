import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

import Brand__logo from "./../assets/img/iconDone2.png";
import {
  callOutline,
  heartCircleOutline,
  pin,
  sendOutline,
  settingsOutline,
  starOutline,
  warningOutline,
} from "ionicons/icons";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>A propos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonCard>
            <img src={Brand__logo} alt="Brand__logo" />
            <IonCardContent>
              <p className="ion-margin">
                Avec Restoo, vous pouvez maintenant commander vos plats préférés
                sans quitter votre canapé. <b>Le tout en un seul clic !</b>
              </p>
            </IonCardContent>
          </IonCard>
        </div>

        <section className="ion-margin">
          <h2 className="ion-margin">
            <b>Plus</b>
          </h2>
          <div style={{ textAlign: "center" }}>
            {" "}
            <IonButton size="small" color="primary">
              <IonIcon icon={settingsOutline} slot="start" />
              Paramètres
            </IonButton>
            <IonButton size="small" color="success">
              <IonIcon icon={callOutline} slot="start" />
              Nous contacter
            </IonButton>
            <IonButton size="small" color="medium">
              <IonIcon icon={warningOutline} slot="start" />
              Signaler
            </IonButton>
          </div>
        </section>

        <IonCard>
          <IonItem>
            <IonIcon icon={heartCircleOutline} slot="start" />
            <IonLabel>Nous noter</IonLabel>
          </IonItem>

          <IonCardContent>
            <div style={{ textAlign: "center" }}>
              {" "}
              <IonIcon
                icon={starOutline}
                className="Star_icon"
                size="large"
                color="medium"
              />
              <IonIcon
                icon={starOutline}
                className="Star_icon"
                size="large"
                color="medium"
              />
              <IonIcon
                icon={starOutline}
                className="Star_icon"
                size="large"
                color="medium"
              />
              <IonIcon
                icon={starOutline}
                className="Star_icon"
                size="large"
                color="medium"
              />
              <IonIcon
                icon={starOutline}
                className="Star_icon"
                size="large"
                color="medium"
              />
            </div>
            <div style={{ textAlign: "right" }}>
              {" "}
              <IonButton fill="outline" slot="end" size="small">
                <IonIcon icon={sendOutline} slot="start" />
                Noter
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

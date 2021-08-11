import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import ItemPlat from "../components/ItemPlat";

import iconDone2 from "./../assets/img/iconDone2.png";

import img1 from "./../assets/img/WhatsApp Image 2021-08-09 at 10.43.07 - Copy.jpeg";
import plat1 from "./../assets/img/plat1.jpg";
import plat2 from "./../assets/img/plat2.jpg";
import plat3 from "./../assets/img/plat3.jpg";
import plat4 from "./../assets/img/plat4.jpg";
import plat5 from "./../assets/img/plat5.jpg";
import plat6 from "./../assets/img/plat6.jpg";
import plat7 from "./../assets/img/plat7.jpg";
import plat8 from "./../assets/img/plat8.jpg";
import plat9 from "./../assets/img/plat9.jpg";
import plat10 from "./../assets/img/plat10.jpg";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img src={iconDone2} alt="Brand_logo" className="Brand_logo" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRouterLink color="secondary" href="/inCommand">
          <IonCard>
            <img src={img1} alt="img__pub" style={{}} />

            <IonCardHeader style={{ paddingBottom: "0" }}>
              <IonCardSubtitle>
                <IonBadge color="success">Nouveau</IonBadge>
              </IonCardSubtitle>
              <IonCardTitle>
                <b>Tudu</b>
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Une nouvelle façon de savourer vos plats.
              <IonRouterLink color="primary" href="/inCommand">
                <b>Disponible ici</b>
              </IonRouterLink>
            </IonCardContent>
          </IonCard>
        </IonRouterLink>

        <IonList>
          <IonListHeader>
            <h1 style={{ color: "gray" }}>
              <b>Suggestions</b>
            </h1>
          </IonListHeader>
          <ItemPlat
            img={plat1}
            subtext="Ricardo"
            text="Œufs au plat et légumes au sésame grillé"
          />
          <ItemPlat
            img={plat2}
            subtext="Les Foodies"
            text="Poulet biryani à ma façon (un plat en 15 minutes !..)"
          />
          <ItemPlat
            img={plat3}
            subtext="Public Domain Pictures"
            text="Plat aux oeufs de Shakshuka Photo stock libre - Public Domain Pictures"
          />
          <ItemPlat
            img={plat4}
            subtext="PxHere"
            text="Images Gratuites : tomate, menthe, aubergine, crème d'aubergine, concombre, salade"
          />
          <ItemPlat
            img={plat5}
            subtext="Régal"
            text="Boeuf carotte : recette traditionnelle"
          />
          <ItemPlat
            img={plat6}
            subtext="1ZOOM"
            text="Fonds d'ecran Les plats secondes Produit carné Frites Salades Légume"
          />
          <ItemPlat
            img={plat7}
            subtext="1ZOOM"
            text="Fonds d'ecran 7000x4667 Fruits de mer Poisson - Nourriture Légume"
          />
          <ItemPlat
            img={plat8}
            subtext="PxHere"
            text="Images Gratuites : plat, aliments, cuisine"
          />
          <ItemPlat
            img={plat9}
            subtext="Pinterest"
            text="Boeuf aux carottes et au vin rouge à l'autocuiseur"
          />
          <ItemPlat
            img={plat10}
            subtext="Trois fois par jour"
            text="Mijoté de bœuf & sauce aux carottes"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

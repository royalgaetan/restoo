import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { homeOutline, searchOutline } from "ionicons/icons";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

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
import ItemPlat from "../components/ItemPlat";

const Tab2: React.FC = () => {
  const [SearchContent, setSearchContent] = useState("");
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Rechercher</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="">
          {/* <IonTitle>Recherche</IonTitle> */}
          <IonSearchbar
            animated
            className="ion-padding-top"
            onIonChange={(e) => setSearchContent(e.detail.value!)}
            showCancelButton="never"
            placeholder="Recherchez un plat"
          ></IonSearchbar>
        </div>

        {SearchContent ? (
          <IonList>
            <IonListHeader>
              <h1 style={{ color: "gray" }}>
                <b>Résultats</b>
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
              text="Mijoté de bœuf et sauce aux carottes"
            />
          </IonList>
        ) : (
          <div className="no_result">
            <h2>
              <b>Aucune recherche</b>
            </h2>
            <p>Lancer une recherche pour voir les résultats</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

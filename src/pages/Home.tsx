import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Развитие детского здравоохранения, включая создание современной инфраструктуры оказания медицинской помощи</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
              <IonLabel color="light">Light Label</IonLabel><br />
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>



)};

export default Home;

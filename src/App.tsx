import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonItemDivider,
    IonLabel,
    IonPage,
    IonRow,
    IonTextarea
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {useState} from 'react';

function App() {

    let [message, setMessage] = useState()

    let sendMessage = () => {
        alert('Hey!')
    }

    return (
        <IonPage>
            <IonContent>

                <IonItemDivider>

                    <IonGrid>
                        <IonRow>
                            <IonCol className={'message'}>
                                <IonImg  src={''}/>
                                <b>Elya</b> <span>Hello guys</span>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className={'message'}>
                                <IonImg  src={''}/>
                                <b>Lena</b> <span>Yo</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonItemDivider>
                <IonLabel className={'footer'}>
                </IonLabel>
                <IonTextarea color={'tertiary'}>{message}</IonTextarea>
                <IonButton onClick={sendMessage}>Send</IonButton>

            </IonContent>
        </IonPage>
    )
}


/*const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);*/

export default App;

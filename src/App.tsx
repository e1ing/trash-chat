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
import {FormEvent, FormEventHandler, useEffect, useState} from 'react';

type ResponseType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

function App() {
    const [mesageText, setMessageText] = useState("")
    const [ws, setWS] = useState<null | WebSocket>(null)
    let [users, setUsers] = useState<ResponseType[]>([{userId: 1, userName: 'Elya', photo: "", message: "yoyy"}])

    useEffect(() => {
        let localWS = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

        localWS.onmessage = (messageEvent) => {
            let messages = JSON.parse(messageEvent.data)
            console.log(messageEvent)
            setUsers(messages)
        }
        setWS(localWS);
    }, [])

    //@ts-ignore
    let onMessageChange = (e) => setMessageText(e.currentTarget.value)

    let sendMessage = () => ws && ws.send(mesageText)


    return (
        <IonPage>
            <IonContent>

                <IonItemDivider>

                    <IonGrid>
                        <IonRow className={'messages'}>
                            {users.map(u =>
                                <IonCol className={'message'}>
                                    <IonImg src={u.photo}/>
                                    <b>{u.userName}</b>
                                    <span>{u.message}</span>
                                </IonCol>
                            )}

                        </IonRow>
                        <IonRow>
                            <IonCol className={'message'}>
                                <IonImg src={''}/>
                                <b>Lena</b>
                                <span>Yo</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonItemDivider>
                <IonLabel className={'footer'}>
                </IonLabel>
                <IonTextarea onChange={onMessageChange} color={'tertiary'}>{mesageText}</IonTextarea>
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

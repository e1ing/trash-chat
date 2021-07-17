import {IonButton, IonContent, IonImg, IonItem, IonLabel, IonList, IonPage, IonTextarea} from '@ionic/react';

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
import {ChangeEvent, useEffect, useRef, useState} from 'react';

type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

function App() {
    let messagesBlockRef = useRef(null);
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<Array<MessageType>>()
    const [ws, setWS] = useState<null | WebSocket>(null)
    const [users, setUsers] = useState<MessageType[]>([])
    if (ws) {
        ws.onmessage = (event: MessageEvent) => {
            let messages = JSON.parse(event.data)
            console.log(event)
            setUsers([...users, ...messages])
            //@ts-ignore
            messagesBlockRef.current.scrollTo(0,  messagesBlockRef.current.scrollHeight);
        };
    }
    useEffect(() => {
        let localWS = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
        setWS(localWS);
    }, [])


    const onMessageChange = (e: ChangeEvent<HTMLIonTextareaElement>) => setMessage(e.target.value)

    const sendMessage = () => {
        ws && ws.send(message)
        setMessage("")
    }


    return (
        <IonPage>
            <IonContent>

                <IonList className="messages" ref={messagesBlockRef}>
                    {users.map((u, index) =>
                        <IonItem className='message' key={index}>
                            <IonImg src={u.photo}/>
                            <IonLabel>{u.userName}</IonLabel>
                            <IonLabel>{u.message}</IonLabel>
                        </IonItem>
                    )}
                </IonList>
                <IonLabel className={'footer'}> </IonLabel>
                <IonTextarea onChange={onMessageChange} value={message} color={'tertiary'}/>
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

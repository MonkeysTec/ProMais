import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Axios } from "axios";
import api from "../services/api";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Alert, Platform } from "react-native";
import * as Device from "expo-device";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function handleRegistrationError(errorMessage: string) {
  Alert.alert(errorMessage);
  throw new Error(errorMessage);
}

async function registerForPushNotificationsAsync() {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      handleRegistrationError(
        "Permission not granted to get push token for push notification!",
      );
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("Project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  } else {
    handleRegistrationError("Must use physical device for push notifications");
  }
}
interface User {
  username: string;
  id: number;

  // Adicione outros campos do usuário, se necessário
}

interface AuthContextType {
  user: User | null;
  expoPushToken: string | null;
  userName: string | null;
  login: (userData: User) => void;
  logout: () => void;
  sendPushNotification: (data: any) => void;
  selectPdvStore: (store: string) => void;
  pdvSelectedStore: string;
}
interface AuthProviderType {
  children: any;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderType) => {
  interface NotificationsData {
    title: string;
    body: string;
  }
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [pdvSelectedStore, setPdvSelectedStore] = useState("");
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  const [pushNotification, setPushNotification] = useState<NotificationsData[]>(
    [
      {
        title: "Clube Pro +",
        body: "Você acabou de entrar no aplicativo Clube Pro +",
      },
    ],
  );
  async function sendPushNotification(data: any) {
    const newNotification = { title: data.title, body: data.body };
    setPushNotification([...pushNotification, newNotification]);
    const message = {
      to: expoPushToken,
      sound: "default",
      title: data.title,
      body: data.body,
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  useEffect(() => {
    // Verifica o localStorage ao iniciar o aplicativo
    async function loadUserFromLocalStorage() {
      const storedUser = await AsyncStorage.getItem("user");
      const storedUserName = await AsyncStorage.getItem("userName");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      if (storedUserName) {
        setUserName(JSON.parse(storedUserName));
      } else {
        if (user) {
          getNameUser();
        }
      }
    }
    loadUserFromLocalStorage();
    registerForPushNotificationsAsync()
      .then((token) => {
        setExpoPushToken(token ?? "");
      })
      .catch((error: any) => setExpoPushToken(`${error}`));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current,
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const getNameUser = async () => {
    const { data } = await api.get("/users/me/v1/");

    if (data) {
      let nameUser = "";
      nameUser += data.token.user.firstName;
      nameUser += " ";
      nameUser += data.token.user.lastName;
      setUserName(nameUser);
      AsyncStorage.setItem("userName", JSON.stringify(nameUser));
      
    }
  };

  const login = (userData: User) => {
    // Lógica para autenticar o usuário (por exemplo, fazer uma chamada à API)
    setUser(userData);
    // Armazena o usuário no localStorage
    AsyncStorage.setItem("user", JSON.stringify(userData));

    getNameUser();
  };

  const logout = async () => {
    // Lógica para fazer logout (por exemplo, limpar o usuário da sessão)
    setUser(null);
    // Remove o usuário do localStorage
    AsyncStorage.removeItem("user");
    AsyncStorage.removeItem("userName");
    try {
      const { data } = await api.post("/users/system/logout/v1");
    } catch (error) {
      // Exibir mensagem de erro

      console.error(error);
    }
  };
  const selectPdvStore = async (store: string) => {
    setPdvSelectedStore(store);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userName,
        expoPushToken,
        selectPdvStore,
        pdvSelectedStore,
        login,
        logout,
        sendPushNotification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import firebase from '../services/firebaseConnection.js';

interface User {
  uid: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  loadingAuth: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const storagedUser = await AsyncStorage.getItem('@User');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(
    async (email, password) => {
      setLoadingAuth(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async value => {
          const { uid }: any = value.user;
          await firebase
            .database()
            .ref('users')
            .child(uid)
            .once('value')
            .then(async snapshot => {
              const data: any = {
                uid,
                name: snapshot.val().name,
                email: value.user?.email,
              };

              setUser(data);
              await AsyncStorage.setItem('@User', JSON.stringify(user));
              setLoadingAuth(false);
            });
        })
        .catch(error => {
          Alert.alert(error.code);
          setLoadingAuth(false);
        });
    },
    [user],
  );

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ loading, loadingAuth, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

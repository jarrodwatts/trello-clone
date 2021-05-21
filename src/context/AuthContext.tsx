import React, { ReactElement, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { CognitoUserExt } from '../types/UserAttributes';

type UserContextType = {
  user: CognitoUserExt | null;
  setUser: React.Dispatch<React.SetStateAction<CognitoUserExt | null>>;
};

// This feels so dumb that you need to have default values for TypeScript contexts
const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUserExt | null>(null);
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen('auth', () => {
      // regardless of what auth event happens (e.g. sign in, sign out checkUser will handle it.)
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      setUser(null);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context
export const useUser = (): UserContextType => useContext(UserContext);

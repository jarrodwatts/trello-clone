import React, { ReactElement, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

type UserContextType = {
  user: CognitoUser | null;
  setUser: React.Dispatch<React.SetStateAction<CognitoUser | null>>;
};

// TODO: This feels so dumb that you need to have default values
const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        console.log('Yes user');
        setUser(user);
      }
    } catch (error) {
      console.log('No user');
      setUser(null);
    }
  }

  console.log('From context:', user);

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

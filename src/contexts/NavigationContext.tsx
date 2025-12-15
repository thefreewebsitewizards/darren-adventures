import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { NavigationState } from '../types';

interface NavigationContextType {
  state: NavigationState;
  navigate: (path: string) => void;
  goBack: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

type NavigationAction = 
  | { type: 'NAVIGATE'; payload: string }
  | { type: 'GO_BACK' };

const initialState: NavigationState = {
  currentPath: '/',
  previousPath: '/',
  navigationHistory: ['/']
};

function navigationReducer(state: NavigationState, action: NavigationAction): NavigationState {
  switch (action.type) {
    case 'NAVIGATE':
      const newPath = action.payload;
      return {
        ...state,
        previousPath: state.currentPath,
        currentPath: newPath,
        navigationHistory: [...state.navigationHistory, newPath]
      };
    case 'GO_BACK':
      if (state.navigationHistory.length <= 1) return state;
      const previousPath = state.navigationHistory[state.navigationHistory.length - 2];
      return {
        ...state,
        currentPath: previousPath,
        previousPath: state.navigationHistory[state.navigationHistory.length - 3] || '/',
        navigationHistory: state.navigationHistory.slice(0, -1)
      };
    default:
      return state;
  }
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  const navigate = (path: string) => {
    dispatch({ type: 'NAVIGATE', payload: path });
  };

  const goBack = () => {
    dispatch({ type: 'GO_BACK' });
  };

  return (
    <NavigationContext.Provider value={{ state, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
import React from 'react';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export const Provider = Context.Provider;

export const state = {
  appName: 'Ghint',
  appNameLowerCase: 'ghint'
}

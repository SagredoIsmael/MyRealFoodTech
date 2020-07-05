import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configStore'
import { PersistGate } from 'redux-persist/es/integration/react'
import AppNavigator from './src/screens/Navigation'

export default () =>
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>

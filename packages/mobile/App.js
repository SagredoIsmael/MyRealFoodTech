import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from 'commons/src/constants/colors'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/configStore'
import { PersistGate } from 'redux-persist/es/integration/react'

export default () =>
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>

const AppNavigator = () =>
  <View style={styles.container}>

  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: colors.primary,
  },
})

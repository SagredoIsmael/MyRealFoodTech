import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import colors from 'commons/src/constants/colors'
import { screens } from 'commons/src/constants/navigation'

const { MAIN } = screens


export default ({navigate}) =>
  <View style={styles.container}>
    <Button
      title="Go Main"
      onPress={() => navigate(MAIN)}
    />
  </View>



const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.secondary,
  },
})
import React from 'react'
import colors from 'common/constants/colors'
import { View, StyleSheet } from 'react-native'


export default () =>
  <View style={styles.container}>

  </View >

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:100,
    width: 100,
    backgroundColor: colors.primary,
  },
})

import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from 'commons/src/constants/colors'


export default () =>
 <View style={styles.container}>

 </View>



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 100,
      width: 300,
      backgroundColor: colors.secondary,
    },
  })
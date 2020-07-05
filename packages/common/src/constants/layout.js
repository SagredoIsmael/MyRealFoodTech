import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height

export const platforms = {
  WEB: 'web',
  IOS: 'ios',
  ANDROID: 'android'
}

const scale = width / 320

export const sizeNormalize = (size) => {
  const newSize = size * scale
  switch (Platform.OS) {
    case platforms.IOS:
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
  
    case platforms.ANDROID:
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  
}

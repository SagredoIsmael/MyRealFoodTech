import React from 'react'
import NavigationWrapper from '@sagredoismael/navigation_rn'
import { screens } from 'commons/src/constants/navigation'
import colors from 'commons/src/constants/colors'
import SignScreen from '../redux/containers/sign'

const { SIGN, MYTODOS, MAIN, OTHERSTODOS, CREATETODO} = screens

export default () =>
  <NavigationWrapper screens={configScreens} headerCommonsOptions={headerCommonsOptions} />

  const configScreens = [ 
  {
    name: SIGN,
    component: SignScreen,
  },
  {
    name: CREATETODO,
    component: SignScreen,
  },
  {
    name: MAIN,
    hasDrawer: true,
    tabs: [  
      {
        name: MYTODOS,  
        component: SignScreen, 
        icon: 'search', 
        iconColor: 'blue', 
        iconSize: 50, 
      },
      {
        name: OTHERSTODOS,
        component: SignScreen,
        icon: 'insert-chart'
      },
    ],
    tabCommonOptions: { 
      activeTintColor: colors.white,
      inactiveTintColor: colors.grey,
      activeBackgroundColor: colors.primary,
      inactiveBackgroundColor: colors.secondary
    },
 }
]

const headerCommonsOptions = {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
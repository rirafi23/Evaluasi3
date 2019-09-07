import React from 'react'
import {} from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Home from '../Component/Home'
import Lodash from '../Component/Lodash'
import inHome from '../Component/inHome'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;



const AppNavigatin = createBottomTabNavigator({
    FlatList:{
        screen:Home,

    },
    Lodash:{
        screen:Lodash
    }
})

const AppPageNavigation = createStackNavigator({
    RootAppnavigation:{
        screen:AppNavigatin,
        navigationOptions: ()=>({
        title:'Tugas Evaluasi #3'
      }),
    },
    inHome:{
        screen:inHome
    }
})

const Beranda = createAppContainer (AppPageNavigation)
export default Beranda;
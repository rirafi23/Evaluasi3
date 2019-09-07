import React from 'react'
import {View, Text, Image} from 'react-native'


export default class inHome extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                
                <Image style={{width:'100%', height:200}} source={{uri:this.props.navigation.state.params.detil[1]
}}/>
<View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
<Text style={{fontSize:20}}>{this.props.navigation.state.params.detil[0]}.</Text>
      </View>
            </View>
        )
    }
}
import React from 'react'
import {View, Text, FlatList, TextInput, Dimensions, Button, ScrollView} from 'react-native'
import Data from '../DataBase/index.json'
import _ from 'lodash'

const {width:WIDTH} = Dimensions.get('window')

export default class Lodash extends React.Component{
    state={
        Data
    }

    test = () => {
       if (_.isEmpty(this.state.Data)) {
           alert('data ini kosong')
       }
       else {
           alert('data ini ada')
       }
   }

    renderItems=({item, index})=>{
        const {Username} = item
        return (
            <Text style={{fontSize:16}}>{Username}</Text>
        )
    }
  render(){
    return(
        
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        
      
      <ScrollView>
      <View style={{alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:25, width:WIDTH - 50, marginTop:50}}>Divisi Pondok Programmer.</Text>
          <FlatList style={{width:WIDTH - 80, marginTop:15}}
              data={_.take(this.state.Data,3)}
              keyExtractor={item=>item.toString()}
              renderItem={this.renderItems}
          />
          <TextInput style={{marginTop:100, marginBottom:20, borderBottomWidth:1, height:45, fontSize:18, width:WIDTH - 150 }}
              placeholder="Username"
              backgroundColor='white'
          />
          <Button
              title="Test"
              onPress={this.test}
          />
          </View>
          </ScrollView>
      </View>
      
      
      
    )
  }
}
import React from 'react'
import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Data from '../DataBase/index.json'

export default class Home extends React.Component{
    state={
        Data
    }
    onButtomDetail=(dataItem) => {
        this.props.navigation.navigate('inHome', {detil : dataItem})
    }
  render(){
    return(
      <View>
        <FlatList
            data={this.state.Data}
            keyExtractor={(index, item)=> index.toString()}
            renderItem={({index, item})=>{
                return(
                    <View>
                        <TouchableOpacity style={{borderBottomWidth:0.3, marginBottom:3}}
                        onPress={() => this.onButtomDetail([`${item.Username}`, `${item.Image}`, `${item.PPImage}`, `${item.Location}`, `${item.pesan}`, `${item.diskripsi}`])}>
                            <View style={{flexDirection:'row', alignItems:'center', paddingLeft:10, marginBottom:10, marginTop:10}}>
                                <Image style={{width:50, height:50, borderRadius:50}} source={{uri: item.PPImage}}/>
                                <View style={{paddingLeft:10}}>
                                    <Text style={{fontSize:18}}>{item.Username}</Text>
                                    <Text style={{fontSize:13}}>{item.Location}</Text>
                                </View>
                                </View>
                                <Image style={{width:'100%', height:200, marginBottom:3}} source={{uri: item.Image}}/>
                                <Text style={{paddingLeft:5}}>{item.pesan}</Text>
                                <Text style={{marginBottom:10, marginTop:3, paddingLeft:5}}>{item.diskripsi}</Text>
                            

                        </TouchableOpacity>
                    </View>
                )
            }}
        />
      </View>
    )
  }
}

const Styles=StyleSheet.create({

})
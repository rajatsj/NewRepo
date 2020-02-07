import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput, Image,TouchableWithoutFeedback} from 'react-native';

export default class signup extends React.Component
{
    constructor(props)
{
    super(props)
    this.state={
      signin:true,
      mdata:
      [{Image:require('./components/username.png'),Text:'FirstName'},
      {Image:require('./components/username.png'),Text:'Lastname'},
      {Image:require('./components/password.png'),Text:'Passsword'},
      {Image:require('./components/password.png'),Text:'ConfirmPassword'},
      {Image:require('./components/address.png'),Text:'Address'},
      {Image:require('./components/Phone.png'),Text:'Contact'}]
    }
}

_register=()=>{
    this.setState({signin:true})
  };
  _signin=()=>{
    this.setState({signin:false})
  }
  
  renderItem(){
    return this.state.mdata.map((data)=>{
      return(
   <View style = {[styles.cstyle,{flexDirection:'row',marginBottom:8}]}>
        <Image source={data.Image} style={[styles.istyle,{flex:.1}]} />
        <TextInput style={{flex:.7}}  placeholder={data.Text}></TextInput>
        </View>
      )
    })
  }
render()
{
  return(

    <View style = {{flexDirection:'column'}}>
    <View style = {styles.container}>
   { this.renderItem()}
    <TouchableOpacity style={styles.button}><Text style = {styles.textstyle}>Register</Text></TouchableOpacity>
    <View style = {{flexDirection:'row',marginBottom:8}}>
    <Text> Existing user?   </Text>
    <TouchableWithoutFeedback onPress={()=>this._signin()} ><Text style = {{color:'rgb(62,171,186)'}}>Signin</Text></TouchableWithoutFeedback>
    </View>
    </View>
    </View>
  )}

}



const styles = StyleSheet.create({
cstyle:
{
justifyContent:'center',
height:45,
borderRadius:50,
borderWidth:1,
width:'70%'
},
istyle:
{
height: 30,
width: 30,
marginTop:10,
marginLeft:0,
marginRight:5,
},


});


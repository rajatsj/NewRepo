import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput, Image,TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component {
 
constructor(props)
{
    super(props)
    this.state={
      signin:false,
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

render(){
  return(
  <View>
       <View style = {{flexDirection:'row',}}>
      <TouchableWithoutFeedback onPress={()=>this._signin()}><Text style = {{color:'rgb(62,171,186)',fontSize:45,marginLeft:50}}>Signin</Text></TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>this._register()}><Text style = {{color:'rgb(234,243,245)',fontSize:45,marginLeft:50}}>Registeration</Text></TouchableWithoutFeedback>
      </View>
      <View style={{flexDirection:'column'}}>
      </View>
      {
      
      
this.state.signin=== false    ?




 <View style = {styles.container}>
 <View style = {[styles.cstyle,{flexDirection:'row',marginBottom:8}]}>
 <Image source={require('./components/username.png')} style={[styles.istyle,{flex:.1}]} />
 <TextInput style={{flex:.8}}  placeholder="EmailID"></TextInput>
 </View>
 <View style = {[styles.cstyle,{flexDirection:'row',marginBottom:8}]}>
 <Image source = {require('./components/password.png')} style = {[styles.pstyle,{flex:.1}]}/>
 <TextInput style =  {{flex:.8}} placeholder="Password"secureTextEntry={true}></TextInput>
 </View>
 <TouchableOpacity style={styles.button}><Text style = {styles.textstyle}>Login</Text></TouchableOpacity>
 <View style = {{flexDirection:'row',marginBottom:8}}>
 <Text> New user?   </Text>
 <TouchableOpacity onPress={()=>this._register()}><Text style = {{color:'rgb(62,171,186)'}}>Registernow</Text></TouchableOpacity>
 </View>
 </View>

:
//Register
 <View style = {{flexDirection:'column'}}>
 <View style = {styles.container}>


{this.renderItem()}
 
 <TouchableOpacity style={styles.button}><Text style = {styles.textstyle}>Register</Text></TouchableOpacity>
 <View style = {{flexDirection:'row',marginBottom:8}}>
 <Text> Existing user?   </Text>
 <TouchableWithoutFeedback onPress={()=>this._signin()} ><Text style = {{color:'rgb(62,171,186)'}}>Signin</Text></TouchableWithoutFeedback>
 </View>
 </View>
 </View>


}

 </View>


);
}

}


const styles = StyleSheet.create({
cstyle:
{
justifyContent:'center',
height:45,
width:45,
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
pstyle:
{
height: 30,
width: 30,
marginLeft:0,
marginRight:5,
},
container:{
marginTop:50,
justifyContent:'center',
alignItems:'center',
backgroundColor:'white',
fontFamily:'cochin',

},

button:{
width:250,
marginTop:20,
paddingTop:4,
fontFamily:'cochin',
alignItems:'center',
borderRadius:30,
backgroundColor:'rgb(200,105,155)',
},

textstyle:
{
fontSize:25,
fontFamily:'cochin',
},

});


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image, Alert,ScrollView, ActivityIndicator } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      array1: [],
      status: false
    }
    this.getapi();
  }


  getapi() {
    fetch('https://koinex.in/api/ticker', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        this.setState({ array1: responseJson });
        console.log(this.state.array1);
        this.setState({ status: true })

      })
      .catch((error) => {
        console.error(error);
      });



  }

  Htmlfunc() {
    console.log('here');
    this.state.array1;
    var temp = [];
    // console.log(Object.values(userdata.stats.inr));
    temp = Object.values(this.state.array1.stats.inr);

    temp.forEach(function (value, key) {
      console.log(value);
      return (
        <View>
          <View > Listing </View>
          <View style={styles.fullsec}>
            <View style={styles.halfsec}>
              <Text>ECR</Text>
              <Text>JHBJ</Text>
              <Text>EE</Text>
            </View>
            <View style={styles.halfsec}>
           
              <Text>JHBJ</Text>
              <Text>EE</Text>
            </View>
          </View>
        </View>
      )
    })

  }

  render() {

    if (this.state.status == true) {
      this.state.array1;
      var temp = [];
      var temmp = [];
      // console.log(Object.values(userdata.stats.inr));
      temp = Object.values(this.state.array1.stats.inr);
      console.log(temp);
      for(var i =0; i<temp.length; i++){
       
        temmp.push(

          <View style={styles.fullsec} key={i}>
          <View style={styles.halfsec}>
            <Text style={{fontSize:16, color: 'black'}}>{temp[i].currency_full_form}</Text>
            <Text style={styles.textt}>{temp[i].currency_short_form}</Text>
            <Text style={styles.textt}>Last Price</Text>
            <Text style={styles.textt}>{temp[i].last_traded_price}</Text>
          </View>
          <View style={styles.halfsec1}>
       
         <Image style={{height:20 , width:20,padding:12}}  source={require('./arrow.png')}></Image>
         <View  style={styles.repsec}> 
            <Text style={styles.textt}>{temp[i].highest_bid}</Text>
            <Text style={styles.textt}>{temp[i].lowest_ask}</Text>
            </View>
          </View>
          
        </View>

        )
      }
      return (
        <View>
          <ScrollView>
            <View style={styles.container}>
            <View style={styles.header}>
            <Text  style={styles.textthead}> Demo Listing</Text>
            <Text  style={styles.textthead1}> React Native</Text>
             </View>
          <View style={styles.heading}>
          <Text style={styles.textt1} >INR</Text>
             </View>
              {temmp}
       
          </View>
          </ScrollView>
        </View>
    );
    } else {
      return (
    
        <ActivityIndicator
          animating={true}
          color="black"
          size="large"
          style={{ alignItems:'center',justifyContent:'center',height:'100%',flex:1,backgroundColor:'#3C77BD' }}>
        </ActivityIndicator>
      
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  heading:{
    flex: 1,
  padding:17,
  borderBottomWidth: 1,
  borderColor:'#ccc',
  },
  fullsec: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'flex-start',
    borderBottomWidth: 1,
   
    borderColor:'#ccc',
    paddingRight: 17,
    paddingLeft: 17
  },
  halfsec: {
    flex: 1,

  },
  halfsec1:{
    flex: 1,
    justifyContent:'center',
    display:'flex',
    flexDirection:'row',
    alignItems:'center'

  },
  header:{
    backgroundColor:'#3C77BD',
  padding:17,
    width:'100%',
    height: 150,
    alignItems:'center'
   
  },
  textt:{
    fontSize:14,
    color: 'black'
  },
  textt1:{
    fontSize:17,
    color: '#168549'
  },
  textthead:{
    fontSize:22,
    color: 'white',
    padding:17,
    },
    textthead1:{
      fontSize:18,
    color: 'white',
    padding:10,
    }
    ,
    repsec:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }
});

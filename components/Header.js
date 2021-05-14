import React from 'react'
import { Text, Image } from 'react-native';
import NavigationBar from 'react-native-navbar';

const rightButtonConfig = {
  title: <Text style={{flex: 2}}>New Bathroom</Text>,
  handler: () => alert('hello!'),
};
 
const titleConfig = {
  title: <Text style={{ flex: 1 }}>When you gotta, we got ya!</Text>,
};

function Header(){
  return (
    <>
      <Image style={{height:`30%`, width: `40%`}} source={require('./../img/logo.png')} />
      <NavigationBar
        style={{height:`10%`, width: `90%`}}
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
    </>
  )
}

export default Header;
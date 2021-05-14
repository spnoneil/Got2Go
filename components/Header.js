import React from 'react'
import { Text, Image } from 'react-native';
// import NavigationBar from 'react-native-navbar';

// const rightButtonConfig = {
//   title: 'Next',
//   handler: () => alert('hello!'),
// };
 
// const titleConfig = {
//   title: 'When you gotta, we got ya!',
// };

function Header(){
  return (
    <>
      <Image style={{height:`30%`, width: `40%`}} source={require('./../img/logo.png')} />
      <Text>THIS IS A HEADERrrrr</Text>
      {/* <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
      /> */}
    </>
  )
}

export default Header;
import { createSwitchNavigator } from 'react-navigation';
import Loading from './Loading.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';

const AuthNav = createSwitchNavigator(
  {
    Loading: { screen: Loading },
    SignUp: { screen: SignUp },
    SignIn: { screen: SignIn }
  },
  { initialRouteName: 'Loading' }
);
export default AuthNav;
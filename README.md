# important


## install the dependencies
npm install react-native-vector-icons
npx expo install expo-linear-gradient

## verifiy the paths of the components from the screen and the icons


## in file :
PhoneModal.js

need to replace this line:
import { LinearGradient } from "expo-linear-gradient";

with this:
import LinearGradient from "react-native-linear-gradient";

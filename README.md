# Important !


## Install the Dependencies

`npm install react-native-vector-icons`

`npx expo install expo-linear-gradient`

## Verifiy The Paths
of all the imports and images

screens / components / image


## In File :
PhoneModal.js

need to replace this line:

```
import { LinearGradient } from "expo-linear-gradient";
```

with this:
```
import LinearGradient from "react-native-linear-gradient";
```

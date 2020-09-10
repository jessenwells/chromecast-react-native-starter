import { registerRootComponent } from 'expo'
import App from './src/App'

//dev
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Setting a timer', 'Remote debugger'])

registerRootComponent(App)

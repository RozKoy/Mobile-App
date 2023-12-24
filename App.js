import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home_page';
import Detail from './components/detail_page';

const Stack = createNativeStackNavigator();

export default function App () {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
				<Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
	createDrawerNavigator,
	createStackNavigator,
	DrawerActions
} from 'react-navigation';
import MapScreen from './screens/MapScreen';
import NewsScreen from './screens/NewsScreen';

const BurgerMenu = navigation => (
	<Text
		onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
		style={styles.menu}
	>
		Menu
	</Text>
);

const MapStack = createStackNavigator(
	{
		MapScreen: { screen: MapScreen }
	},
	{
		navigationOptions: ({ navigation }) => ({
			title: 'Map',
			headerStyle: { backgroundColor: '#fbad28' },
			headerTintColor: 'white',
			headerLeft: BurgerMenu(navigation)
		})
	}
);

const NewsStack = createStackNavigator(
	{
		NewsScreen: { screen: NewsScreen }
	},
	{
		navigationOptions: ({ navigation }) => ({
			title: 'News',
			headerStyle: { backgroundColor: '#fbad28' },
			headerTintColor: 'white',
			headerLeft: BurgerMenu(navigation)
		})
	}
);

const DrawerNavigator = createDrawerNavigator({
	MapStack: { screen: MapStack, navigationOptions: { drawerLabel: 'Map' } },
	NewsStack: { screen: NewsStack, navigationOptions: { drawerLabel: 'News' } }
});

const PrimaryNav = createStackNavigator(
	{
		drawerStack: { screen: DrawerNavigator }
	},
	{
		headerMode: 'none'
	}
);

const styles = StyleSheet.create({
	menu: {
		marginLeft: 10,
		color: '#fff'
	}
});

export default PrimaryNav;

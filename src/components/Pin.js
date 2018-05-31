import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

export default class Pin extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={{
					height: 180,
					position: 'absolute',
					bottom: 0,
					left: this.props.left,
					flexDirection: 'row'
				}}
			>
				<View
					style={{
						backgroundColor: '#fff',
						width: 2,
						height: 180,
						opacity: 0.5
					}}
				/>
				<TouchableHighlight
					onPress={this.props.onClick}
					activeOpacity={0.5}
					underlayColor="#fff"
					style={{
						backgroundColor: this.props.color,
						opacity: 0.5,
						width: 50,
						height: 30,
						borderRadius: 5,
						borderWidth: 1,
						borderColor: this.props.color
					}}
				>
					<View style={{}} />
				</TouchableHighlight>
			</View>
		);
	}
}

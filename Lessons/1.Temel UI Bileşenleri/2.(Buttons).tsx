import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Pressable } from 'react-native'

function Index() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			
			<TouchableOpacity style={{ margin: 20, backgroundColor: "green", padding: 10 }}>
				<Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>Hello React Native!</Text>
			</TouchableOpacity>
			<TouchableHighlight style={{ margin: 20, backgroundColor: "green", padding: 10 }}>
				<Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>Hello React Native!</Text>
			</TouchableHighlight>

			<Text style={{ textAlign: "center" }}>#####################</Text>

			<TouchableNativeFeedback
				style={{ margin: 20, padding: 10, alignSelf: "flex-end" }}
				background={TouchableNativeFeedback.Ripple('#2196F3', false)}
				onPress={() => alert('TouchableNativeFeedback')}>
				<View style={{ width: 150, height: 50, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
					<Text>Hello React Native!</Text>
				</View>
			</TouchableNativeFeedback>

			<Text style={{ textAlign: "center" }}>#####################</Text>

			<Button 
			// style={{ margin: 20, backgroundColor: "green", padding: 10, fontSize: 20, color: "black", textAlign: "center", width: 100 }} 
			title="Hello React Native!" color={"red"} />

			<Text style={{ textAlign: "center" }}>#####################</Text>

			<Pressable
				style={(obj) => [
					{
						backgroundColor: obj.pressed ? 'darkblue' : 'blue',
						padding: 15,
						borderRadius: 10,
						width: 200
					}
				]}
				onPress={() => console.log('Touch to Button.')}
				onLongPress={() => console.log('Long touch to Button.')}

			>
				<Text style={{ color: 'white', fontWeight: 'bold',textAlign:"center" }}>Ulgama gir</Text>
			</Pressable>
		</View>
	)
}

export default Index;
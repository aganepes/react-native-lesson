import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as SplashScreen from "expo-splash-screen";


// SplashScreen.preventAutoHideAsync();
SplashScreen.hide();
function Index() {
	const [isShow, setIsShow] = useState<boolean>(true);
	useEffect(() => {
		const time = setTimeout( () => {
			// await SplashScreen.hideAsync();
			setIsShow(false);
		}, 5000);
		return ()=>{
			clearTimeout(time);
		}
	}, [])
	if (isShow) {
		return (<View style={{ flex:1,justifyContent:"center",alignItems:"center"}}>
			<Text style={{ fontSize: 30, color: "red", fontWeight:"bold" }}>Hello React Native!</Text>
		</View>)
	} else
		return (
			<>
				<View style={{ margin: 20 }}>
					<Text style={{ fontSize: 20, color: "green" }}>Hello React Native!</Text>
				</View>
				<View style={{ margin: 20 }}>
					<Text style={{ fontSize: 20, color: "green" }}>Hello React Native!</Text>
				</View>
			</>
		)
}

export default Index;
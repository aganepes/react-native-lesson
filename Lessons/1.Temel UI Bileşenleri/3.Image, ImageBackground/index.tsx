import React from 'react';
import { Image, ImageBackground, Text } from 'react-native';
import img from '../assets/images/react-logo.png';
function Index() {
	return (
		<ImageBackground
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
			source={require("../assets/images/android-icon-monochrome.png")} >
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, necessitatibus mollitia deleniti asperiores ratione laborum nostrum blanditiis illo molestias accusantium facere possimus dolores similique libero aut animi? Quaerat, illo molestias?</Text>
			<Image
				source={{ uri: "https://www.turkmenistan.gov.tm/storage/app/media/Images/2025/02-2025/05022025/OFFICIAL/06-02-002.jpg" }}
				width={200} height={400} 
				blurRadius={5}
				/>
			<Image source={img} width={200} height={200} />
		</ImageBackground>
	)
}

export default Index;
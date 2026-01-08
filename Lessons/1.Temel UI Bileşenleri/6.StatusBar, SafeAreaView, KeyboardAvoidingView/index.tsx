import React, { useState } from 'react';
import { Text, TextInput, StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Index() {
	const [value, setValue] = useState<string>('')
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

			<SafeAreaView style={{ flex: 1 }}>

				<StatusBar />

				<TextInput placeholder='Ýazmaly ... ' />
				<Text style={{ fontFamily: "Time new", fontSize: 100, flex: 1 }}>{value}</Text>

				<KeyboardAvoidingView
					style={{ backgroundColor: 'gray' }}
					behavior={Platform.OS === 'ios' ? "height" : "padding"}
				>

					<TextInput
						placeholder='parolyňy bu ýerik ýaz...'
						passwordRules="minlength: 8;" value={value}
						onChangeText={(text) => setValue(text)}
						style={{ padding: 10, borderWidth: 1, borderColor: "blue" }}
						placeholderTextColor='black' />

				</KeyboardAvoidingView>

			</SafeAreaView>

		</TouchableWithoutFeedback>
	)
}

export default Index;
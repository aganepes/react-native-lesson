import React, { useRef, useState } from 'react'
import { TextInput, Switch, Text, View, type InputModeOptions, InputAccessoryView, Keyboard, Button } from 'react-native'

function Index() {
	const [name, setName] = useState<string>('');
	const [value, setValue] = useState<boolean>(false);
	const inputMode : InputModeOptions = "tel";
	{/*  only IOS */}
	// const inputAccessoryViewID = 'uniqueID';
	// focuslanma
	const forFocus = useRef<TextInput>(null)
	return (
		<View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
			{/*  only IOS */}
			{/* <TextInput
				inputAccessoryViewID={inputAccessoryViewID}
				placeholder="Bu ýerik ýaz..."
			/>

			<InputAccessoryView nativeID={inputAccessoryViewID}>
				<View style={{ backgroundColor: '#f9f9f9', padding: 10 }}>
					<Button title="Soňlandyr" onPress={() => Keyboard.dismiss()} />
				</View>
			</InputAccessoryView> */}
			{/* only IOS */}
			<View style={{ margin: 20, marginLeft: 0 }}>
				<Text onPress={()=>forFocus.current?.focus()}>Adyňy giriz:</Text>
					<TextInput
						inputMode={inputMode}
						placeholder='Adyňy giriz...'
						placeholderTextColor='red'
						style={{ borderColor: "black", borderWidth: 1, borderStyle: "dashed", margin: 10, marginLeft: 0,padding:15, borderRadius:10  }}
						onChangeText={(text) => setName(text)}
						ref={forFocus}
					/>
			</View>
			<Text style={{ color: "green" }}>{name}</Text>
			<View style={{ flexDirection: "row-reverse", gap: 20, alignItems: "center", justifyContent: "center" }}>
				<Switch 
				value={value} 
				onChange={(e) => setValue(e.nativeEvent.value)} style={{ backgroundColor: "yellow" }} 
				// onValueChange
				trackColor={{true:"rgba(110, 110, 5, 1)",false:"rgba(36, 36, 10, 1)"}}
				thumbColor="red"
				/>
				<Text style={{ color: 'red' }}>{value ? "Basyldy." : "Basylmady..."}</Text>
			</View>
		</View>
	)
}

export default Index;
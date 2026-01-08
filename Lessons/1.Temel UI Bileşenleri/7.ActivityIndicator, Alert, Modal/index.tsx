import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, StatusBar, Platform, ActivityIndicator, Button, Alert, Pressable, Modal, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Index() {
	const [visible, setVisible] = useState<boolean>(true);
	const [input, setInput] = useState<string>('');
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	useEffect(() => {
		const time = setTimeout(() => setVisible(false), 2000);
		return () => clearTimeout(time);
	}, [])
	return (
		<SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
			<StatusBar />
			{/* ActivityIndicator */}
			{
				visible ? <ActivityIndicator size="large" color="green" />
					: <View style={{ alignItems: "center", paddingInline: 10 }}>
						<Text style={{ marginBlock: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam, rerum minus neque perferendis corrupti cupiditate iure praesentium ducimus rem quisquam. Sint repellendus numquam sit pariatur nam repudiandae possimus consequuntur?</Text>
						{
							Platform.OS === "ios"
								? <>
									<Pressable onPress={() => Alert.prompt('Input - y giriz:')}>
										<Text style={{ padding: 10, backgroundColor: "green", color: "white", width: 200 }}>Input almak üçin basmalysyň.</Text>
									</Pressable>

									{
										input && <Text style={{ color: "green" }}>
											Input: <Text style={{ color: 'red', fontWeight: "bold" }}>{input}</Text>
										</Text>
									}
								</>
								: <>
									<Modal
										transparent={true}
										visible={modalVisible}
										animationType="fade"
										onRequestClose={() => setModalVisible(false)}
									>

										<View style={styles.centeredView}>
											<View style={styles.modalView}>
												<Text>Input-y giriz:</Text>
												<TextInput
													style={styles.input}
													onChangeText={setInput}
													value={input}
												/>
												<Button title="Soňlandyr"
													onPress={() => setModalVisible(false)}
												/>
											</View>
										</View>

									</Modal>

									<Pressable onPress={() => setModalVisible(true)}>
										<Text style={{ padding: 10, backgroundColor: "green", color: "white", width: 200 }}>Modal açmak</Text>
									</Pressable>

									{
										input && <Text style={{ color: "green" }}>
											Input: <Text style={{ color: 'red', fontWeight: "bold" }}>{input}</Text>
										</Text>
									}

								</>
						}

					</View>
			}
		</SafeAreaView>
	)
}

export default Index;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.7)'
	},
	modalView: {
		backgroundColor: 'white',
		padding: 20, borderRadius: 10,
		width: '80%'
	},
	input: {
		borderBottomWidth: 1,
		marginBottom: 15,
		padding: 5
	},
	buttonText: {
		padding: 10,
		backgroundColor: "green",
		color: "white",
		width: 200,
		textAlign: 'center'
	}
});
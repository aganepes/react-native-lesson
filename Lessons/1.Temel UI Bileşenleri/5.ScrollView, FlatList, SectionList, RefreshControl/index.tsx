import React, { useCallback, useState } from 'react'
import { ScrollView, Text, View, FlatList, RefreshControl, SectionList } from 'react-native'

const DATA = [
	{
		title: 'Esasy naharlar',
		data: ['Pizza', 'Burger', 'Risotto'],
	},
	{
		title: 'Kantiner',
		data: ['Tort', 'Baklawa'],
	},
];

function Index() {
	const [refreshing, setRefreshing] = useState(false);
	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 2000)
	}, []);

	return (
		<View style={{ flex: 1, justifyContent: "center", paddingBlock: 50, paddingInline: 10, gap: 30 }}>

			<ScrollView horizontal style={{ width: 300, height: 80, flexBasis: 80, flexGrow: 0 }}>
				<View style={{ backgroundColor: "green", width: 100, height: 60 }}></View>
				<View style={{ backgroundColor: "red", width: 100, height: 60 }}></View>
				<View style={{ backgroundColor: "yellow", width: 100, height: 60 }}></View>
				<View style={{ backgroundColor: "blue", width: 100, height: 60 }}></View>
			</ScrollView>

			{/* FlatList */}
			<Text>FlatList başy:</Text>
			<FlatList
				ListFooterComponent={<Text>FlatList soňy</Text>}
				ListFooterComponentStyle={{ borderColor: "green", borderBottomWidth: 2, marginBottom: 20, padding: 10 }}
				style={{ height: 100, flexGrow: 0, width: 260, borderWidth: 1, borderColor: 'red', padding: 10 }}
				data={[
					{ id: 1, name: 'Men' },
					{ id: 2, name: 'Sen' },
					{ id: 3, name: 'Biz' },
					{ id: 4, name: 'Siz' }
				]}
				keyExtractor={(item) => item.name}
				renderItem={(obj) => (
					<Text style={{ fontSize: 40, marginBottom: 10 }}>
						{obj.index} | {obj.item.id}: {obj.item.name}
					</Text>
				)}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={['#ff0000', '#00ff00']}
					/>
				}
			/>
			
			<SectionList
				style={{ borderWidth: 2, borderStyle: "dotted", flexGrow: 0, height: 200 }}
				contentContainerStyle={{ padding: 10 }}
				sections={DATA}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => (
					<View style={{ padding: 10 }}>
						<Text style={{ color: "yellow" }}>{item}</Text>
					</View>
				)}
				renderSectionHeader={({ section: { title } }) => <Text style={{ color: "green" }}>{title}</Text>}
			/>

		</View>
	)
}

export default Index;
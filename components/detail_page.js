import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Schedule = [{
		id: '1',
		from_loc: 'Sumatera',
		to_loc: 'Jawa',
		plane_type: 'Elang',
		time : 'January 14, 2023. 08:00',
	}, {
		id: '2',
		from_loc: 'Sumatera',
		to_loc: 'Kalimantan',
		plane_type: 'Tapis Air',
		time : 'January 14, 2023. 10:00',
	}, {
		id: '3',
		from_loc: 'Sumatera',
		to_loc: 'Papua',
		plane_type: 'Majapahit Air',
		time : 'January 14, 2023. 14:30',
	},
];

const Detail = ({ navigation }) => {
	const renderItem = ({ item }) => (
	<View style = { styles.item }>
		<Text>{ item.from_loc } - { item.to_loc }</Text>
		<View style = { styles.info }>
			<MaterialIcons name = "flight" size={24} color="#5CA454" />
			<Text style = { styles.plane_type }>{ item.plane_type }</Text>
			<Text style = { styles.date_info }>{ item.time }</Text>
		</View>    
	</View>
	);
	
	return (
		<View style = { styles.container }>
			<View style = { styles.header }>
					<View style = { styles.top }>
						<TouchableOpacity
							style = { styles.button }
							onPress={ () => navigation.goBack()}>
						<AntDesign name="arrowleft" size={24} color="white" />
						</TouchableOpacity>
						<Text style = { styles.heading }>Hiling.id</Text>
						<FontAwesome5 name="user" size={24} color="white" />
					</View>
					<Text style = { styles.heading2 }>Hasil Pencarian Penerbangan</Text>
					<Text style = { styles.heading2 }>January 14, 2023</Text>
			</View>
			<SafeAreaView>
				<FlatList
					data={Schedule}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
			</SafeAreaView>
			<Text style = {styles.copyright}>Copyright Muhammad Rozin Asy Syaddad - 120140006</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E5E4E2',
	},
	header:{
		width:'100%',
		backgroundColor: '#6fb23e',
		padding:20,
		height: 130,
		
	},
	heading: {
		color: '#ffff',
		fontSize: 30,
		fontWeight : "bold",
		
	},
	heading2: {
		color: '#ffff',
		textAlign: 'center',
		top : 20,
	},
	top: {
		top : 20,
		flexDirection: "row",
		alignItems:"center",
		justifyContent:"space-between",
		marginBottom:10,
	},
	item: {
		backgroundColor: '#ffff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius:10,
	},
	info:{
		marginTop: 20,
		marginBottom:10,
		flexDirection: "row",
		alignItems:"center",
		justifyContent:"space-between"
	},
	plane_type:{
		marginLeft:-80,
		fontSize:20,
		fontWeight: "bold",
	},
	date_info:{
		color:'blue',
	},
	copyright: {
		color : '#797979',
		fontWeight: 'bold',
		marginBottom: 20,
		padding:20,
		marginTop: 50,
		textAlign: 'center',
	},
});

export default Detail;
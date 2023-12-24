import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
const [ departure, set_departure ] = useState("");
const [ location, set_location ] = useState("");
const [ date, set_date ] = useState("");

	return(
		<View style = { styles.container }>
			<View style={ styles.header }>
				<Feather name="menu" size={24} color="white" />
				<Text style = { styles.title }>Hiling.id</Text>
				<FontAwesome5 name="user" size={24} color="white" />
			</View>
			
			<View style = { styles.card }>
				<Text style = { styles.head_sec }>Lokasi Keberangkatan</Text>
				<View style = { styles.input_place }>
					<MaterialIcons name="flight-takeoff" size={24} color="#5CA454" />
					<TextInput
						style = { styles.input }
						onChangeText = { set_departure }
						value = { departure }
						placeholder = "Masukan lokasi keberangkatan"
						selectTextOnFocus = { false }
					/>
				</View>

				<Text style = { styles.head_sec }>Lokasi Tujuan</Text>
				<View style = { styles.input_place }>
					<MaterialIcons name="flight-land" size={24} color="#5CA454" />
					<TextInput
						style = { styles.input }
						onChangeText = { set_location }
						value = { location }
						placeholder = "Masukkan Lokasi Tujuan"
					/>
				</View>

				<Text style = { styles.head_sec }>Tanggal Keberangkatan</Text>
					<View style = { styles.input_place }>
							<Fontisto name="date" size={24} color="#5CA454" />
						<TextInput
							style = { styles.input }
							onChangeText = { set_date }
							value = { date }
							placeholder = "Masukan Tanggal Keberangkatan"
						/>
					</View>

				<TouchableOpacity onPress = {() => navigation.navigate('Detail')}><Text style = { styles.search }
				>Cari</Text></TouchableOpacity>
			</View>
			
			<View style = { styles.footer }>
				<Text style = { styles.copyright }>Copyright Muhammad Rozin Asy Syaddad - 120140006</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: '#6fb23e',
		flex: 1,
		overflow: "hidden",
		width :"100%",
	},
	header: {
		alignItems: 'center',
		flexDirection:'row',
		justifyContent: 'space-between',
		padding:40,
		width: "100%",
	},
	title: {
		color: '#ffff',
		fontSize: 30,
		fontWeight : "bold",
		top: 35,
	},
	card: {
		backgroundColor: 'white',
		borderRadius:15,
		margin: "auto",
		padding:20,
		top : 50,
		width: '90%',
	},
	head_sec: {
		fontWeight : "bold",
		fontSize: 16,
		margin: 3,
	},
	input_place: {
		alignItems: 'center',
		borderColor: '#E5E5E5',
		borderRadius:5,
		borderWidth:1,
		flexDirection:'row',
		marginBottom:10,
		marginTop:10,
		paddingLeft:10,
		width: '100%',
		
	},
	search: {
		alignSelf: "center",
		backgroundColor: "#e67e1f",
		borderRadius: 5,
		color : '#ffff',
		fontSize: 20,
		fontweight : "Bold",
		height: 30,
		margin : 20,
		textAlign: "center",
		width: '100%',
	},
	input: {
		height: 45,
		padding: 10,
		width: '100%',
	},
	footer: {
		backgroundColor: '#EEE',
		borderRadius:25,
		flex:1,
		marginTop : 0,
		width: "100%",
		zIndex: -999,
	},
	copyright: {
		color : '#797979',
		fontWeight: 'bold',
		marginBottom: 40,
		marginTop: 'auto',
		textAlign: 'center',
	}
});

export default Home;
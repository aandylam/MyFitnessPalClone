import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import FoodListItem from '@/components/FoodListItem';


const foodItems = [
    {food: {label: "Pizza", nutrients: {ENERC_KCAL: 100}, brand: "Domino's"}}
];

export default function HomeScreen() {
    return (
        <View style = {styles.container}>
            <View style = {styles.headerRow}>
                <Text style = {styles.subText}>Calories</Text>
                
            </View>




            <View style = {styles.headerRow}>
                <Text style = {styles.subText}>Today's Logged Foods</Text>
                <Link href="/search"><Button title = "Add Food"/></Link>
            </View>
            <FlatList
                data = {foodItems}
                contentContainerStyle = {{gap: 5}}
                renderItem = {({item}) => <FoodListItem item = {item}/>}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        gap: 10,
    },
    headerRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    subText: {
        fontSize: 16, 
        fontWeight: '500', 
        flex: 1, 
        color: 'dimgray'
    },
});


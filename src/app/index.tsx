import {View, Text, FlatList, Button, StyleSheet, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import FoodListItem from '@/components/FoodListItem';
import { gql, useQuery} from '@apollo/client';
import dayjs from 'dayjs';
import FoodLogListItem from '@/components/FoodLogListItem';

const query = gql `
    query MyQuery($date: Date!, $user_id: String!) {
        foodLogsForDate(date: $date, user_id: $user_id) {
            food_id
            user_id
            created_at
            label
            kcal
            id
        }
    }
`;

export default function HomeScreen() {
    const user_id = 'andy';
    const {data, loading, error} = useQuery(query, {variables: {
        date: dayjs().format('YYYY-MM-DD'),
        user_id,
    }});

    if(loading) {
        return <ActivityIndicator/>
    }

    if(error) {
        return <Text>Failed to fetch data</Text>
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.headerRow}>
                <Text style = {styles.subText}>Calories</Text>
                <Text>_</Text>
            </View>

            <View style = {styles.headerRow}>
                <Text style = {styles.subText}>Today's Logged Foods</Text>
                <Link href="/search"><Button title = "Add Food"/></Link>
            </View>
            <FlatList
                data = {data.foodLogsForDate}
                contentContainerStyle = {{gap: 5}}
                renderItem = {({item}) => <FoodLogListItem item = {item}/>}
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


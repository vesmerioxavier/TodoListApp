import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Props } from '../Types';

//initial application component
function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TODO</Text>
            <Text style={styles.text}>LIST!</Text>
            <TouchableOpacity style={{ backgroundColor: '#045a68', borderRadius: 15, marginTop: 100 }} onPress={() => { navigation.navigate('TodoList') }}>
                <View style={{}}>
                    <Text style={{ color: '#ffffff', padding: 10, fontSize: 20 }}>PRÓXIMO</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

//global home component styles
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 40, alignItems: 'center' },
    text: { fontSize: 100, color: '#045a68', fontWeight: 'bold' },
    btn: { borderRadius: 5 }
});

export default HomeScreen;
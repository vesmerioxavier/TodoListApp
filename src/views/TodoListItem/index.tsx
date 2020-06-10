import React from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import { Todo } from '../../app/store/todos/types';

interface OwnProps {
    todo: Todo
}
// item item component item
// styles are defined in line because it is a slightly small component
export default function TodoListItem({ todo }: OwnProps) {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10, borderColor: '#045a6821', borderWidth: 0.4 }}>
            <CheckBox value={todo.completed} key={todo.id} />
            <Text style={[(todo.completed) ? { fontSize: 20, color: '#045a68' } : { color: '#045a68', fontSize: 20, textDecorationLine: 'line-through' }]}>{todo.title}</Text>
        </View>
    );
}
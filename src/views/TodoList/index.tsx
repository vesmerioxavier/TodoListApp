import React, { Component } from 'react';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Todo } from '../../app/store/todos/types';
import { ApplicationState } from '../../app/index';
import * as TodosActions from '../../app/store/todos/actions';
import TodoListItem from '../TodoListItem';

interface StateProps {
    todos: Todo[],
    loading: boolean
}

interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps

// task list component
class TodoList extends Component<Props> {

    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {

        const { todos, loading } = this.props;
        // component that identifies the task loading
        if (loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator animating={loading} color='#045a68' size='small' />
                    <Text style={{ fontSize: 40, color: '#045a68' }}>Carregando...</Text>
                </View>
            )
        }

        return (
            //custom title header and task list
            <View>                
                <Text style={{ fontSize: 60, padding: 10, color: '#045a68', fontWeight: 'bold' }}>My Tasks</Text>

                <ScrollView style={{ padding: 10 }}>
                    {todos.map(todo => (
                        <TodoListItem key={todo.id} todo={todo} />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    todos: state.todos.data,
    loading: state.todos.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
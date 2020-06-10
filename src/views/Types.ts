import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
    Home: undefined;
    TodoList: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
    StackParamList,
    'Home'
>;

export type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;

export type Props = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
};
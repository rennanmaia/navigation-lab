import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from './styles';

export function Players() {
    const navigation = useNavigation();

    return(
        <View>
            {/* <Header /> */}
            <Text>Texto 1 - Players</Text>
            <Button
                title='Go to Players'
                onPress={() => navigation.navigate('Groups')}
            />
        </View>
    );
}
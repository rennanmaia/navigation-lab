import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Groups() { 
    const navigation = useNavigation();
    return(
        <View>
            <Text>Texto 1 - Groups</Text>

            <Button
                title='Go to Players'
                onPress={() => navigation.navigate('Players')}
            />
        </View>
    );
}
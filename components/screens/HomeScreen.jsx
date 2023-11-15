import NButton from '../material/NButton'
import { StyleSheet, Text, View } from 'react-native';
import Screens from '../../constants/Screens';
import Colors from '../../constants/Colors';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Test 2</Text>
            <NButton
                title='Go to details'
                onPress={() => { navigation.navigate(Screens.Tasks) }}
            ></NButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgrounds.main,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

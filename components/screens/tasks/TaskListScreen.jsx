
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';

export default function TaskListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Test 2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgrounds.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyle} from '../theme/global.style';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={globalStyle.centerContainer}>
      <Text style={globalStyle.title}>{count}</Text>

      <FAB
        icon="add-outline"
        style={globalStyle.fab}
        onPress={() => setCount(prev => prev + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

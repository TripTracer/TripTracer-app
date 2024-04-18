import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../../../screens/Details';
import SettingsScreen from '../../../screens/Settings';
import { SettingsStackParamList } from '../../../utils/types';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={SettingsScreen} />
      <SettingsStack.Screen name='Details' component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
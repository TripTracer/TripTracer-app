import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBar from '../../../components/appBar/AppBar';
import BackAction from '../../../components/appBar/backAction/BackAction';
import Content from '../../../components/appBar/content/Content';
import DetailsScreen from '../../../screens/Details';
import SettingsScreen from '../../../screens/Settings';
import { SettingsStackParamList } from '../../../utils/types';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        header: ({ options, route }) => (
          <AppBar>
            <BackAction
              onPress={() => {}}
              testID='goBack'
            />
            <Content title={getHeaderTitle(options, route.name)} />
          </AppBar>
        ),
      }}
    >
      <SettingsStack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name='Details'
        component={DetailsScreen}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;

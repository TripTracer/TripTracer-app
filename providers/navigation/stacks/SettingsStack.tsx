import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopBar from '../../../components/appBar/TopBar';
import DetailsScreen from '../../../screens/Details';
import SettingsScreen from '../../../screens/Settings';
import { SettingsStackParamList } from '../../../utils/types';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsStackScreen() {
   return (
      <SettingsStack.Navigator
         screenOptions={{
            header: ({ options, route }) => (
               <TopBar title={getHeaderTitle(options, route.name)} />
            ),
         }}
      >
         <SettingsStack.Screen
            name='Settings'
            component={SettingsScreen}
            options={{ headerShown: false }}
         />
         <SettingsStack.Screen name='Details' component={DetailsScreen} />
      </SettingsStack.Navigator>
   );
}

export default SettingsStackScreen;

import { Appbar } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const TopBar = ({ title }: { title: string }) => {
   const navigation = useNavigation();
   return (
      <Appbar.Header>
         <Appbar.BackAction onPress={() => navigation.goBack()} />
         <Appbar.Content
            title={title}
            titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
         />
         <Appbar.Action icon='calendar' onPress={() => {}} />
         <Appbar.Action icon='magnify' onPress={() => {}} />
      </Appbar.Header>
   );
};
export default TopBar;

import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

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

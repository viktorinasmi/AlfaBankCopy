import {Text} from 'react-native';
import {Layout} from '../../components/Layout';
import {FONT_FAMILY} from '../../vars';

export const Home = () => {
  return (
    <Layout>
      <Text style={{fontFamily: FONT_FAMILY.BOLD}}> Home</Text>
    </Layout>
  );
};

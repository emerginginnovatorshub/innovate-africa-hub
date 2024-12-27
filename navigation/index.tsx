
import { createStackNavigator } from '@react-navigation/stack';
import LearningCenterScreen from '../screens/LearningCenterScreen';
import TechMarketplaceScreen from '../screens/TechMarketplaceScreen';
import VirtualSTEMCompetitionsScreen from '../screens/VirtualSTEMCompetitionsScreen';
import MentorshipHubScreen from '../screens/MentorshipHubScreen';
import ProjectShowcaseScreen from '../screens/ProjectShowcaseScreen';
import JobsScholarshipsScreen from '../screens/JobsScholarshipsScreen';
import CommunityForumScreen from '../screens/CommunityForumScreen';
import TrainingCertificationScreen from '../screens/TrainingCertificationScreen';
import EventsWorkshopsScreen from '../screens/EventsWorkshopsScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LearningCenter" component={LearningCenterScreen} />
      <Stack.Screen name="TechMarketplace" component={TechMarketplaceScreen} />
      <Stack.Screen name="VirtualSTEMCompetitions" component={VirtualSTEMCompetitionsScreen} />
      <Stack.Screen name="MentorshipHub" component={MentorshipHubScreen} />
      <Stack.Screen name="ProjectShowcase" component={ProjectShowcaseScreen} />
      <Stack.Screen name="JobsScholarships" component={JobsScholarshipsScreen} />
      <Stack.Screen name="CommunityForum" component={CommunityForumScreen} />
      <Stack.Screen name="TrainingCertification" component={TrainingCertificationScreen} />
      <Stack.Screen name="EventsWorkshops" component={EventsWorkshopsScreen} />
    </Stack.Navigator>
  );
}
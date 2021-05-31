import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Breathe from '../screens/Breathe/Breathe';
import TabOneScreen from '../screens/TabOneScreen';
import Meditate from '../screens/Meditate';
import Audios from '../screens/Audios';
import { BottomTabParamList, TabOneParamList, MeditateParamList, TabBreatheParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Meditate"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Sleep"
        component={Meditate}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Breathe"
        component={Breathe}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BreatheStack = createStackNavigator<TabOneParamList>();

function BreatheNavigator() {
  return (
    <BreatheStack.Navigator>
      <BreatheStack.Screen
        name="Breathe"
        component={TabOneScreen}
        options={{ headerTitle: 'Breathe' }}
      />
    </BreatheStack.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const MeditateStack = createStackNavigator<MeditateParamList>();

function MeditateNavigator() {
  return (
    <MeditateStack.Navigator>
      <MeditateStack.Screen
        name="Meditate"
        component={MeditateScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
      <MeditateStack.Screen
        name="Audios"
        component={AudiosScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </MeditateStack.Navigator>
  );
}

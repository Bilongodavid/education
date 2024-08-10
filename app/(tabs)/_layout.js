import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          title: "explores",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="travel-explore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stream"
        options={{
          headerShown: false,
          title: "stream",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="tv" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          headerShown: false,
          title: "work",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-open" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

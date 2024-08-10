import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  {
    id: 1,
    title: "Cassie Valdez",
    subtitle: "Biology",
    source: require("../../assets/Rectangle 18.png"),
    color: "#CF687D",
  },
  {
    id: 2,
    title: "Cassie Valdez",
    subtitle: "Biology",
    source: require("../../assets/Rectangle 18 (1).png"),
    color: "#413535",
  },
  {
    id: 3,
    title: "Cassie Valdez",
    subtitle: "Biology",
    source: require("../../assets/Rectangle 18 (2).png"),
    color: "#E5E5E5",
  },
];
const dataPopular = [
  {
    id: 1,
    title: "Victory College",
    subtitle: "Bio Science",
    source: require("../../assets/Group 63.png"),
    color: "",
    content:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
  },
  {
    id: 2,
    title: "Victory College",
    subtitle: "Biology",
    source: require("../../assets/Education-pana 1.png"),
    color: "#FF9F92",
    content:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
  },
  {
    id: 3,
    title: "Victory College",
    subtitle: "Biology",
    source: require("../../assets/Group 65.png"),
    color: "#BFDDEC",
    content:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
  },
];

export default function Explores() {
  return (
    <View className="bg-gray-light flex-1">
      <StatusBar hidden />
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="mx-4 mt-2">
              <View className="flex flex-row justify-between">
                <View>
                  <Text className="text-black-light font-bold text-2xl">
                    Good evening!
                  </Text>
                  <Text className="text-black-light text-lg">
                    Hardline Scott
                  </Text>
                </View>
                <View>
                  <Image
                    source={require("../../assets/Rectangle 32.png")}
                    className="w-14 h-14"
                  />
                </View>
              </View>
              <View className="mt-6">
                <View className="bg-light p-1 mt-1 rounded rounded-lg shadow-inner shadow-black-light-50 w-full flex flex-row justify-between">
                  <TextInput className="" placeholder="Search your teacher" />
                  <TouchableOpacity className="bg-primary p-2 rounded rounded-md outline-none">
                    <AntDesign name="search1" size={20} color="#ffff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="mt-6 mx-4">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-black-light font-bold">
                  Popular Teachers
                </Text>
                <FontAwesome name="filter" size={20} color="#364356" />
              </View>
            </View>

            <FlatList
              data={data}
              horizontal
              className="mt-6"
              renderItem={({ item }) => (
                <View className="mx-1 rounded rounded-lg overflow-hidden p-2 bg-light">
                  <Image
                    source={item.source}
                    className="w-[110px] h-[115px] rounded rounded-lg"
                    style={{ backgroundColor: item.color }}
                  />
                  <View>
                    <Text className="font-bold">{item.title}</Text>
                    <Text className="text-xs">{item.subtitle}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <View className="mt-3 mb-3 mx-4 flex flex-row justify-between items-center">
              <Text className="text-black-light font-bold">
                Propular Institution
              </Text>
              <FontAwesome name="filter" size={20} color="#364356" />
            </View>
          </>
        )}
        data={dataPopular}
        renderItem={({ item }) => (
          <View className="my-1 mx-4 rounded rounded-lg flex flex-row p-2 bg-light">
            <View>
              <Image
                source={item.source}
                className="w-[110px] h-[115px] rounded rounded-lg"
                style={{ backgroundColor: item.color }}
              />
            </View>
            <View className="mx-4">
              <Text className="font-bold">{item.title}</Text>
              <Image
                source={require("../../assets/Group 60.png")}
                className="mt-1"
              />
              <View>
                <Text className="text-xs font-bold">{item.subtitle}</Text>
                <Text className="text-xs w-36 text-justify">
                  {item.content}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

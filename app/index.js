import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { ButtonComponent } from "./components/ButtonComponent";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Image source={require("../assets/Main img.png")} className="mt-5" />
      <View className="items-center">
        <Text className="font-bold text-black-light text-lg">
          Let's find the "A" with us
        </Text>
        <Text className=" text-black-light-50 text-md text-center mt-2">
          Please Sign in to view personalized recommendations
        </Text>
        <TouchableOpacity className="p-4 bg-primary w-40 items-center mt-3 rounded rounded-lg">
          <Link className="text-light font-bold text-md" href="screens/signup">
            Sign up
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 w-40 items-center mt-1 rounded rounded-lg"></TouchableOpacity>
        <Pressable>
          <Link className="text-primary text-md" href="screens/signin">
            Skip
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

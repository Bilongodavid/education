import { Image, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <StatusBar hidden />
      <Image source={require("../assets/Main img.png")} className="mt-5" />
      <View className="items-center">
        <Text className="font-bold text-black-light text-lg">
          Let's find the "A" with us
        </Text>
        <Text className=" text-black-light-50 text-md text-center mt-2">
          Please Sign in to view personalized recommendations
        </Text>

        <Link
          className="text-light font-bold text-md p-4 bg-primary w-40 text-center mt-3 rounded rounded-lg"
          href="signup"
        >
          Sign up
        </Link>
        <Link
          className="text-primary text-md p-4 w-40  mt-1 rounded rounded-lg text-center"
          href="signin"
        >
          Skip
        </Link>
      </View>
    </View>
  );
}

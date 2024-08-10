import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link } from "expo-router";

export default function SignUp() {
  return (
    <ScrollView>
      <StatusBar hidden />
      <View className="mx-4">
        <View className="items-center">
          <Image source={require("../assets/Main img2.png")} />
        </View>

        <View className="mt-4">
          <View className="mb-2">
            <Text className="text-black-light">Name</Text>
            <TextInput
              className="bg-light p-3 mt-2 rounded rounded-lg shadow shadow-black-light-50"
              placeholder="Enter your email"
            />
          </View>
          <View className="mb-2">
            <Text className="text-black-light">Email address</Text>
            <TextInput
              className="bg-light p-3 mt-2 rounded rounded-lg shadow shadow-black-light-50"
              placeholder="Enter your password"
            />
          </View>
          <View>
            <Text className="text-black-light">Password</Text>
            <TextInput
              className="bg-light p-3 mt-2 rounded rounded-lg shadow shadow-black-light-50"
              secureTextEntry={true}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View className="items-center mt-6">
          <Link
            className="text-light font-bold text-md p-4 bg-primary w-40 text-center mt-3 rounded rounded-lg"
            href="/explore"
          >
            Sign up
          </Link>

          <View className="p-4 items-center mt-1 rounded rounded-lg flex flex-row">
            <Text className="text-md">You have account ? </Text>
            <Link className="text-primary text-md" href="signin">
              Sign in
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

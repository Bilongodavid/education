import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { Link } from "expo-router";

export default function SignUp() {
  return (
    <ScrollView>
      <View className="mx-4">
        <View className="items-center">
          <Image
            source={require("../../assets/Main img2.png")}
            className="w-40 h-40"
          />
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
          <ButtonComponent title={"Sign up"} />
          <TouchableOpacity className="p-4 items-center mt-1 rounded rounded-lg flex flex-row">
            <Text className="text-md">You have account ? </Text>
            <Link className="text-primary text-md" href="screens/signin">
              Sign in
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

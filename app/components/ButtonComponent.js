import { Text, TouchableOpacity } from "react-native";

export const ButtonComponent = ({ title }) => {
  return (
    <TouchableOpacity className="p-4 bg-primary w-40 items-center mt-3 rounded rounded-lg">
      <Text className="text-light font-bold text-md">{title}</Text>
    </TouchableOpacity>
  );
};

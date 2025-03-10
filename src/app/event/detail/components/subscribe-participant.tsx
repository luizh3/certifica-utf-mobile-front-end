import { Event } from "@/types/EventType";
import { StyledButton } from "@/src/components/styledbutton";
import { Text, View } from "react-native";

export default function SubscribeParticipant({ event, onPress }: { event: Event, onPress : any  }) {
  return (
    <View className="flex-row justify-center">
      <View className="w-1/2 p-5">
        <StyledButton onPress={onPress}>
          <Text className="text-white text-base font-semibold">Inscrever-se</Text>
        </StyledButton>
      </View>
    </View>
  )
}
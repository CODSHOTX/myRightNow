import React from "react";
import { View, SafeAreaView } from "react-native";
import ItemHeader from "../components/ItemHeader";
import { FlatList } from "react-native-gesture-handler";
import { Card, Text, List, Avatar } from "react-native-paper";
import { historyStyle } from "./screenStyles/HistoryStyle";

export default function HistoryScreen({ navigation }) {
  const deliveriesdetails = [1, 2, 3, 4];

  return (
    <SafeAreaView style={historyStyle.safeview}>
      <ItemHeader
          title="Delivery History"
          type="arrow-left"
          navigation={navigation}
        />

      <View style={historyStyle.view}>

        <FlatList
          data={deliveriesdetails}
          keyExtractor={(item, index) => `deliveriesdetails${index}`}
          renderItem={({ item, index }) => (
            <Card
              style={{ ...historyStyle.card, ...historyStyle.cardstatus }}
              onPress={() => {
                navigation.navigate("DeliveryDetailScreen");
              }}
            >
              <Card.Title
                titleStyle={historyStyle.cardtitle}
                title="27/01/2023"
                right={() => <Text style={historyStyle.price}>₺50.00</Text>}
              />
              <Card.Content style={historyStyle.cardcontent}>
                <List.Item
                  title={"Michael Jackson"}
                  description="Rate: Good"
                  left={() => (
                    <Avatar.Image
                      size={52}
                      source={{
                        uri: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3174456/profile-clipart-md.png",
                      }}
                    />
                  )}
                />
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

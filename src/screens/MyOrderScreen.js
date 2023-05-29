import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { myorderStyle } from "./screenStyles/MyOrderStyle";
import { FlatList } from "react-native-gesture-handler";
import { Card, Text, List, Avatar } from "react-native-paper";

export default function MyOrderScreen({ navigation }) {
  const deliveriesdetails = [1, 2, 3, 4];

  return (
    <SafeAreaView style={myorderStyle.safeview}>
      <HomeHeader navigation={navigation} />
      <View style={myorderStyle.view}>
        <FlatList
          data={deliveriesdetails}
          keyExtractor={(item, index) => `deliveriesdetails${index}`}
          renderItem={({ item, index }) => (
            <Card
              style={{ ...myorderStyle.card, ...myorderStyle.cardstatus }}
              onPress={() => {
                navigation.navigate("DeliveryDetailScreen");
              }}
            >
              <Card.Title
                titleStyle={myorderStyle.cardtitle}
                title="27/01/2023"
                right={() => <Text style={myorderStyle.price}>₺25.00</Text>}
              />
              <Card.Content style={myorderStyle.cardcontent}>
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

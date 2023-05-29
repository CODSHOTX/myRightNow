import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import { Avatar, Card, List, Text } from "react-native-paper";
import { deliveryinfoStyle } from "./screenStyles/DeliveryInfoStyle";

const DeliveryDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={deliveryinfoStyle.flex}>
      <Header title="RightNOW" type="arrow-left" navigation={navigation} />
      <View style={deliveryinfoStyle.viewflex}>
        <Card style={deliveryinfoStyle.card}>
          <Card.Title
            title={"27/01/2023"}
            titleStyle={deliveryinfoStyle.cardtitle}
            right={() => <Text style={deliveryinfoStyle.price}>$25.00</Text>}
          ></Card.Title>
          <Card.Content>
            <List.Item
              title={"Michael Jackson"}
              description="53 deliveries"
              left={() => (
                <Avatar.Image
                  size={52}
                  source={{
                    uri: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3174456/profile-clipart-md.png",
                  }}
                />
              )}
            />
            <List.Item
              title="Origin"
              description="Origin Street, 60"
              left={() => <List.Icon icon="flag-outline" />}
            />
            <List.Item
              title="Destination"
              description="Destination Street, 60"
              left={() => <List.Icon icon="flag-checkered" />}
            />
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryDetailScreen;

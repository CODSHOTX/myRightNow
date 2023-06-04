import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { myorderStyle } from "./screenStyles/MyOrderStyle";
import { FlatList } from "react-native-gesture-handler";
import { Card, Text, List } from "react-native-paper";
import { Button, IconButton, Avatar } from "react-native-paper";
import { mapStyle } from "./screenStyles/MapStyle";

export default function OrderHistoryScreen({ navigation }) {
  const deliveriesdetails = [1, 2, 3, 4];
  const myorder = [1, 2, 3, 4];
  const [packages, setPackage] = useState(true);

  return (
    <SafeAreaView style={myorderStyle.safeview}>
      <HomeHeader navigation={navigation} />
      <View style={myorderStyle.view}>
        <View style={myorderStyle.view1}>
          <View style={myorderStyle.view2}>
            <TouchableOpacity
              onPress={() => {
                setPackage(true);
              }}
            >
              <View
                style={{
                  ...myorderStyle.deliveryButton,
                  backgroundColor: packages ? "#74D24F" : "#F5F5F5",
                }}
              >
                <Text style={myorderStyle.deliveryText}>Package</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setPackage(false);
              }}
            >
              <View
                style={{
                  ...myorderStyle.deliveryButton,
                  backgroundColor: !packages ? "#74D24F" : "#F5F5F5",
                }}
              >
                <Text style={myorderStyle.deliveryText}>History</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {packages ? (
          <FlatList
            data={myorder}
            keyExtractor={(item, index) => `myorder${index}`}
            renderItem={({ item, index }) => (
              <Card style={mapStyle.card}>
                <Card.Content>
                  <List.Item
                    title="₺50.00"
                    description="Total Price"
                    left={() => (
                      <IconButton
                        icon="bike-fast"
                        size={32}
                        style={mapStyle.icon}
                        iconColor={mapStyle.icon.color}
                      />
                    )}
                    right={() => (
                      <View>
                        <Button mode="contained" style={mapStyle.confirmButton}>
                          Confirm
                        </Button>
                        <Button labelStyle={mapStyle.cancelButton}>
                          Cancel
                        </Button>
                      </View>
                    )}
                  />
                </Card.Content>
              </Card>
            )}
          />
        ) : (
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
        )}
      </View>
    </SafeAreaView>
  );
}

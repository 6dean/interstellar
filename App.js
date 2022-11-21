import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  SafeAreaView,
  Button,
} from "react-native";
import Constants from "expo-constants";
import stylesheet from "./stylesheet";
import styletext from "./stylesheet2";

console.log(stylesheet.container);

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: "black",
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <ScrollView>
          {/* -------------------BLOCK HEADER------------------- */}

          <View
            style={{
              backgroundColor: "#393939",
            }}
          >
            <Image
              source={require("./assets/IMDB.png")}
              style={{
                width: 30,
                height: 10,
                marginLeft: 10,
                padding: 30,
              }}
              resizeMode="contain"
            />
            <StatusBar style="auto" />
          </View>

          {/* -------------------BLOCK INTERSTELLAR------------------- */}

          <View style={stylesheet.container}>
            <Text style={styletext.title}>Interstellar</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styletext.subtitles}>2014</Text>
              <Text style={styletext.subtitles}>PG-13</Text>
              <Text style={styletext.subtitles}>2H 49min</Text>
              <Text style={styletext.subtitles}>Adventure, Drama, Sci-Fi</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("./assets/film.jpg")}
                style={{
                  marginTop: 20,
                  width: 120,
                  height: 180,
                  marginLeft: 10,
                }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styletext.infos}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <Button title="+ ADD TO WATCHLIST" />
              </View>
            </View>

            {/* -------------------COMMUNITY BLOCK ------------------- */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Image source={require("./assets/star.png")} />
                <Text style={styletext.textcom}>8.6/10</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Image source={require("./assets/blackstar.png")} />
                <Text style={styletext.textcom}>RATE THIS</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Text style={{ backgroundColor: "green" }}>74</Text>
                <Text style={styletext.textcom}>METASCORE</Text>
              </View>
            </View>
          </View>

          {/* -------------------BLOCK ACTORS------------------- */}
          <View style={stylesheet.container2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={styletext.topbilled}>Top Billed Cast</Text>
              <Button title="SEE ALL" />
            </View>

            {/* -------------------PHOTOS ACTORS------------------- */}
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <View style={stylesheet.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/matthew.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styletext.actortext}
                  >
                    Matthew McConaughey
                  </Text>
                  <Text style={styletext.actorrole}>Cooper</Text>
                </View>
                <View style={stylesheet.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/anne.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styletext.actortext}
                  >
                    Anne Hathaway
                  </Text>
                  <Text style={styletext.actorrole}>Brand</Text>
                </View>
                <View style={stylesheet.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/jessica.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text style={styletext.actortext}>Jessica Chastain</Text>
                  <Text style={styletext.actorrole}>Murph</Text>
                </View>
                <View style={stylesheet.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/mackenzie.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styletext.actortext}
                  >
                    Mackenzie Foy
                  </Text>
                  <Text style={styletext.actorrole}>Murph</Text>
                </View>
              </View>
            </ScrollView>
            {/* -------------------REALISATORS ------------------- */}

            <View style={{ marginLeft: 10 }}>
              <Text style={styletext.director}>Director</Text>
              <Text style={styletext.infosdir}>Christopher Nolan</Text>
              <Text style={styletext.director}>Writers</Text>
              <Text style={styletext.infosdir}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

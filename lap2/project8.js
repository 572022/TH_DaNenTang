import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const styles = StyleSheet.create({
  container: { paddingTop: 40 },
  sectionHeader: {
    padding: 10,
    backgroundColor: "#aaa",
  },
  row: {
    padding: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

const groupPeople = (people) => {
  const grouped = {};
  for (const person of people) {
    const letter = person.name.last[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(person);
  }

  return Object.keys(grouped)
    .sort()
    .map((key) => ({
      title: key,
      data: grouped[key],
    }));
};

const PEOPLE = [
  { name: { title: "Ms", first: "Maeva", last: "Scott" } },
  { name: { title: "Ms", first: "Maëlle", last: "Henry" } },
  { name: { title: "Mr", first: "Mohamoud", last: "Faaij" } },
  { name: { title: "Mr", first: "d", last: "t" } },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupPeople(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

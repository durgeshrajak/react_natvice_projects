import React from 'react';
import { View, Text, SectionList } from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: "raj",
      skills: ["c", 'c++', "jave"]
    },
    {
      id: 2,
      name: "ansi",
      skills: ["c", 'c++', "jave"]
    },
    {
      id: 3,
      name: "anna",
      skills: ["c", 'c++', "jave"]
    },
    {
      id: 4,
      name: "ashish",
      skills: ["c", 'c++', "jave"]
    },
    {
      id: 5,
      name: "reshma",
      skills: ["c", 'c++', "jave"]
    },
    {
      id: 6,
      name: "mahesh",
      skills: ["c", 'c++', "jave"]
    }
  ];

  // Transform the users array into the required format for SectionList
  const sections = users.map(user => ({
    title: user.name,
    data: user.skills
  }));

  return (
    <View>
      <Text style={{ fontSize: 30 }}>This is a section list</Text>
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text style={{ fontSize: 20 , marginLeft: 20}}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontSize: 25, color: 'red' }}>{title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;


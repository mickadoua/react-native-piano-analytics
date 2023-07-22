import * as React from 'react';

import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import * as PianoAnalytics from '@pmu-tech/react-native-piano-analytics';

const collectionName = '';
const siteId = 12345;

PianoAnalytics.setConfiguration(collectionName, siteId);

export default function App() {
  const [event, updateEvent] = React.useState<string>('');
  const [result, setResult] = React.useState<any>('');

  React.useEffect(() => {
    PianoAnalytics.privacyGetMode().then(setResult);
    PianoAnalytics.setUser('12345', 'premium', true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <Text>Hi From The Poc Side</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => updateEvent(e)}
          value={event}
          placeholder="CD1 Param"
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            PianoAnalytics.sendEvent('page.display', {
              user_id: '12345',
              page: 'Page From Rewrite',
              page_chapter1: 'level 1',
              page_chapter2: 'level 2',
              page_chapter3: 'level 3',
            });
          }}
        >
          <Text>Send Event</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => PianoAnalytics.privacySetMode('exempt')}
        >
          <Text>Set Privacy Mode to "optin"</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#ccc',
    borderRadius: 4,
    elevation: 3,
    width: '80%',
    height: 40,
    margin: 12,
  },
});

import { useState } from 'react'; 
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// const MOCK_WORD = '_ _ _ _ _'; // Placeholder

// https://random-word-api.vercel.app/api?words=1

function App() {
  const [word, setWord] = useState<string>(''); 
  const [displayWord, setDisplayWord] = useState<string>(''); 

  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [remainingGuesses, setRemainingGuesses] = useState<number>(6);

  const [gameOver, setGameOver] = useState<boolean>(false); 
  const [gameWon, setGameWon] = useState<boolean>(false); 

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.vercel.app/api?words=1');
      const data = await response.json();

      const fetchedWord = data[0].toUpperCase();
      setWord(fetchedWord);  
      
      setDisplayWord('_'.repeat(fetchedWord.length));

      setUsedLetters([]);
      setRemainingGuesses(6); 
      setGameOver(false); 
      setGameWon(false);
    } catch (error) {
      console.error('Error fetching random word', error); 
    }
  };

  const handleLetterPress = (letter: string) => {
    if (usedLetters.includes(letter) || gameOver || gameWon) return;

    const updatedUsedLetters = [...usedLetters, letter];
    setUsedLetters(updatedUsedLetters); 

    if (word.includes(letter)) {
      const updatedDisplay = word
        .split('')
        .map((char, index) => updatedUsedLetters.includes(char) ? char : '_')
        .join(' ');

      setDisplayWord(updatedDisplay); 
    }

 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangman</Text>
      
      <Text style={styles.wordDisplay}>
        { displayWord ? displayWord.split('').join(' ') : 'Press "Start Game"' }
      </Text>

      <TouchableOpacity style={styles.startButton} onPress={fetchRandomWord}> 
        <Text style={styles.startButtonText}>Start Game</Text>  
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.alphabetContainer}
        showsVerticalScrollIndicator={false}  
      >
        {ALPHABET.map((letter) => (
          <TouchableOpacity key={letter} style={styles.letterButton}> 
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity> 
        ))}
      </ScrollView>

      {displayWord && (
        <Text style={styles.guessesText}>Remaining Guesses: {remainingGuesses}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // 60% base
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 30,
  },
  wordDisplay: {
    fontSize: 32,
    letterSpacing: 8,
    color: '#212121',
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#6200EE', // 30% secondary
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 30,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  letterButton: {
    backgroundColor: '#03DAC6', // 10% accent
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  letterText: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guessesText: {
    marginTop: 20, 
    fontSize: 18, 
    color: '#212121', 
  },
});


export default App;
















import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const MOCK_WORD = '_ _ _ _ _'; // temporary placeholder

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
      console.error('Error fetching word', error); 
    }
  };

  const handleLetterPress = (letter: string) => {
     // validation 
     if (usedLetters.includes(letter) || gameOver || gameWon) return; 
    
     // load our used letters 
     const updatedUsedLetters = [...usedLetters, letter]; 
     setUsedLetters(updatedUsedLetters); 

     // correct guess & incorrect guess
     if (word.includes(letter)) {
       const updatedDisplay = word
         .split('')
         .map((char, index) => updatedUsedLetters.includes(char) ? char : '_')
         .join(' ');

       setDisplayWord(updatedDisplay); 

       if (updatedDisplay === word) {
         setGameWon(true); 
       }
     } else {
       const guessesLeft = remainingGuesses - 1; 
       setRemainingGuesses(guessesLeft); 

       if (guessesLeft === 0) {
         setGameOver(true); 
       }
     } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangman</Text>

      <Text style={styles.wordDisplay}>
      {displayWord ? displayWord.split('').join(' ') : 'Press Start Game'}
      </Text>

      <TouchableOpacity style={styles.startButton} onPress={fetchRandomWord}> 
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle = {styles.alphabetContainer}
        showsVerticalScrollIndicator={false}
      >
        {ALPHABET.map((letter) => (
          <TouchableOpacity style={styles.letterButton}> 
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {displayWord && (
        <Text style={styles.guessesText}>
          Remaining Guesses: {remainingGuesses}
        </Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
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
    backgroundColor: '#6200EE',
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
    backgroundColor: '#03DAC6',
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  correctLetter: {
    backgroundColor: '#A5D6A7',
  },
  incorrectLetter: {
    backgroundColor: '#EF9A9A',
  },
  letterText: {
    color: '#212121',
    fontSize: 16,
  },
  guessesText: {
    fontSize: 18,
    color: '#212121',
    marginBottom: 30,
  },
  resultText: {
    fontSize: 20,
    color: '#212121',
    marginBottom: 20,
  },
  playAgainButton: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 20,
  },
  playAgainText: {
    color: '#FFF',
    fontSize: 16,
  },
});
export default App; 

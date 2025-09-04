import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GAME_DURATION = 5; // The duration of the game in seconds

function App() {
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameActive, setGameActive] = useState(false);

  // useEffect to handle the timer logic using setTimeout
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (gameActive && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timerId);
    };
  }, [gameActive, timeLeft]);

  const handleTap = () => {
    if (!gameActive) {
      setGameActive(true);
      setTaps(1);
    } else {
      setTaps(prevTaps => prevTaps + 1);
    }
  };

  const handleReset = () => {
    setGameActive(false);
    setTaps(0);
    setTimeLeft(GAME_DURATION);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Game</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
        <Text style={styles.scoreText}>Taps: {taps}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, !gameActive && styles.startButton]} 
        onPress={handleTap}
        disabled={!gameActive && timeLeft === 0}
      >
        <Text style={styles.buttonText}>{gameActive ? "TAP" : (timeLeft === 0 ? "GAME OVER" : "START")}</Text>
      </TouchableOpacity>
      
      {timeLeft === 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
    color: '#d9534f',
  },
  scoreText: {
    fontSize: 20,
    color: '#337ab7',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
});

export default App;

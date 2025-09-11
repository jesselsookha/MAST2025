
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

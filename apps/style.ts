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
});

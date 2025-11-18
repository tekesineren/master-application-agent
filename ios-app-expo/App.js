import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import InputScreen from './src/screens/InputScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import HomeScreen from './src/screens/HomeScreen';

const API_URL = 'https://master-application-agent.onrender.com/api';

export default function App() {
  const [screen, setScreen] = useState('home'); // 'home', 'input', 'results'
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetStarted = () => {
    setScreen('input');
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/match`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gpa: parseFloat(formData.gpa),
          language_score: parseInt(formData.languageScore),
          motivation_letter: formData.motivationLetter,
          background: formData.background
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setResults(data);
        setScreen('results');
      } else {
        setError(data.error || 'Bir hata oluştu');
      }
    } catch (err) {
      setError('Backend API\'ye bağlanılamadı. İnternet bağlantınızı kontrol edin.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setScreen('home');
    setResults(null);
    setError(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" />
      {screen === 'home' && <HomeScreen onGetStarted={handleGetStarted} />}
      {screen === 'input' && (
        <InputScreen 
          onSubmit={handleSubmit} 
          loading={loading}
          error={error}
          onBack={() => setScreen('home')}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen 
          results={results} 
          onReset={handleReset}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
});


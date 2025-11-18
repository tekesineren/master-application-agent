import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';

const backgroundOptions = [
  'engineering',
  'robotics',
  'control systems',
  'mechanical engineering',
  'computer science',
  'electrical engineering',
  'mathematics',
  'physics'
];

export default function InputScreen({ onSubmit, loading, error, onBack }) {
  const [gpa, setGpa] = useState('');
  const [languageScore, setLanguageScore] = useState('');
  const [motivationLetter, setMotivationLetter] = useState('');
  const [selectedBackgrounds, setSelectedBackgrounds] = useState([]);

  const toggleBackground = (option) => {
    if (selectedBackgrounds.includes(option)) {
      setSelectedBackgrounds(selectedBackgrounds.filter(b => b !== option));
    } else {
      setSelectedBackgrounds([...selectedBackgrounds, option]);
    }
  };

  const handleSubmit = () => {
    if (!gpa || !languageScore || !motivationLetter || selectedBackgrounds.length === 0) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    const gpaValue = parseFloat(gpa);
    if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4.0) {
      Alert.alert('Hata', 'GPA 0-4.0 arasında olmalıdır');
      return;
    }

    onSubmit({
      gpa: gpaValue,
      languageScore: parseInt(languageScore),
      motivationLetter,
      background: selectedBackgrounds
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Geri</Text>
      </TouchableOpacity>

      <Text style={styles.title}>📊 Akademik Bilgiler</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>GPA (0-4.0)</Text>
        <TextInput
          style={styles.input}
          value={gpa}
          onChangeText={setGpa}
          placeholder="3.5"
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Dil Skoru (TOEFL/IELTS)</Text>
        <TextInput
          style={styles.input}
          value={languageScore}
          onChangeText={setLanguageScore}
          placeholder="110"
          keyboardType="number-pad"
        />
      </View>

      <Text style={styles.title}>🎯 Background</Text>
      <View style={styles.backgroundGrid}>
        {backgroundOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.checkbox,
              selectedBackgrounds.includes(option) && styles.checkboxSelected
            ]}
            onPress={() => toggleBackground(option)}
          >
            <Text style={[
              styles.checkboxText,
              selectedBackgrounds.includes(option) && styles.checkboxTextSelected
            ]}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>✍️ Motivation Letter</Text>
      <TextInput
        style={styles.textArea}
        value={motivationLetter}
        onChangeText={setMotivationLetter}
        placeholder="Motivation letter'ınızı buraya yazın... (En az 200 kelime önerilir)"
        multiline
        numberOfLines={10}
        textAlignVertical="top"
      />
      <Text style={styles.wordCount}>
        Kelime: {motivationLetter.split(/\s+/).filter(w => w.length > 0).length}
      </Text>

      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>⚠️ {error}</Text>
        </View>
      )}

      <TouchableOpacity 
        style={[styles.submitButton, loading && styles.submitButtonDisabled]} 
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitText}>🚀 Eşleştirmeyi Başlat</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    marginTop: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  backgroundGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  checkbox: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  checkboxSelected: {
    backgroundColor: '#fff',
  },
  checkboxText: {
    color: '#fff',
    fontSize: 14,
  },
  checkboxTextSelected: {
    color: '#667eea',
    fontWeight: '600',
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 200,
    marginBottom: 8,
  },
  wordCount: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 20,
  },
  errorBox: {
    backgroundColor: '#ff4444',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  errorText: {
    color: '#fff',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#667eea',
  },
});


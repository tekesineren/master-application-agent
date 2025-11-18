import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ResultsScreen({ results, onReset }) {
  if (!results || !results.results) {
    return null;
  }

  const { high_match, medium_match, low_match, extra_options } = results.results;

  const Section = ({ title, subtitle, universities, color, emoji }) => {
    if (!universities || universities.length === 0) return null;

    return (
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionEmoji}>{emoji}</Text>
          <View>
            <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
            <Text style={styles.sectionSubtitle}>{subtitle}</Text>
          </View>
        </View>
        
        {universities.map(uni => (
          <View key={uni.id} style={styles.universityCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.universityName}>{uni.name}</Text>
              <View style={[styles.matchBadge, { backgroundColor: `${color}20` }]}>
                <Text style={[styles.matchScore, { color }]}>
                  {Math.round(uni.match_score)}%
                </Text>
              </View>
            </View>
            <Text style={styles.programName}>{uni.program}</Text>
            <Text style={styles.country}>{uni.country}</Text>
            <View style={styles.requirements}>
              <Text style={styles.requirement}>Min GPA: {uni.min_gpa}</Text>
              <Text style={styles.requirement}>Min Dil: {uni.min_language_score}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎯 Eşleşme Sonuçları</Text>
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetText}>🔄 Yeni Analiz</Text>
        </TouchableOpacity>
      </View>

      <Section
        title="Yüksek Eşleşme"
        subtitle="Bu okullara başvurmanızı öneriyoruz"
        universities={high_match}
        color="#10b981"
        emoji="🎯"
      />

      <Section
        title="İyi Eşleşme"
        subtitle="Başvurmayı düşünebilirsiniz"
        universities={medium_match}
        color="#3b82f6"
        emoji="✅"
      />

      <Section
        title="Düşük Eşleşme"
        subtitle="Başvurabilirsiniz ama şansınız düşük"
        universities={low_match}
        color="#f59e0b"
        emoji="⚠️"
      />

      <Section
        title="Ekstra Seçenekler"
        subtitle="Hiçbir şey kaybetmezsiniz, deneyebilirsiniz"
        universities={extra_options}
        color="#6b7280"
        emoji="💡"
      />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  resetButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 16,
  },
  resetText: {
    color: '#667eea',
    fontWeight: '600',
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#fff',
    paddingLeft: 15,
  },
  sectionEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  universityCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  universityName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    flex: 1,
  },
  matchBadge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  matchScore: {
    fontSize: 16,
    fontWeight: '700',
  },
  programName: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 4,
    fontWeight: '500',
  },
  country: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  requirements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  requirement: {
    fontSize: 12,
    color: '#6b7280',
  },
});


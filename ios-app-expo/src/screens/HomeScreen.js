import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ onGetStarted }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>🎓 Master Application Agent</Text>
        <Text style={styles.subtitle}>
          Master programınız için en uygun okulları bulun
        </Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>20+</Text>
          <Text style={styles.statLabel}>Okul</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>%95</Text>
          <Text style={styles.statLabel}>Doğruluk</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>10K+</Text>
          <Text style={styles.statLabel}>Eşleşme</Text>
        </View>
      </View>

      <View style={styles.features}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🎯</Text>
          <Text style={styles.featureTitle}>Akıllı Eşleştirme</Text>
          <Text style={styles.featureDesc}>
            GPA, dil skoru ve background'ınıza göre en uygun programları bulun
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>⚡</Text>
          <Text style={styles.featureTitle}>Hızlı Sonuç</Text>
          <Text style={styles.featureDesc}>
            Saniyeler içinde yüzlerce okul arasından size en uygun olanları bulun
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💡</Text>
          <Text style={styles.featureTitle}>Ekstra Öneriler</Text>
          <Text style={styles.featureDesc}>
            Şansınız düşük olsa bile deneyebileceğiniz okulları keşfedin
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.ctaButton} onPress={onGetStarted}>
        <Text style={styles.ctaText}>Ücretsiz Analiz Başlat →</Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
  },
  features: {
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  featureDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#667eea',
  },
});


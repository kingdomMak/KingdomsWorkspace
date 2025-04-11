import 'package:flutter/material.dart';
import 'mood_tracker_screen.dart';
import 'journal_screen.dart';
import 'package:lingua_boost/screens/challenge_screen.dart';
import 'package:lingua_boost/screens/kindness_challenges_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('PepPal 💖'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('Welcome to your positivity buddy!'),
            const SizedBox(height: 20),

            // Mood Tracker
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const MoodTrackerScreen()),
                );
              },
              child: const Text("Track Mood"),
            ),

            const SizedBox(height: 10),

            // Journal
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const JournalScreen()),
                );
              },
              child: const Text("Open Journal"),
            ),

            const SizedBox(height: 10),

            // Daily Kindness Challenge
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const ChallengeScreen()),
                );
              },
              child: const Text("Daily Kindness 💛"),
            ),

            const SizedBox(height: 10),

            // Kindness Challenge List
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const KindnessChallengesScreen()),
                );
              },
              child: const Text("Kindness Challenges"),
            ),
          ],
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'screens/affirmation_screen.dart';
import 'screens/mood_tracker_screen.dart';

void main() {
  runApp(const PepPalApp());
}

class PepPalApp extends StatelessWidget {
  const PepPalApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PepPal 💬',
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.pink),
      home: const AffirmationScreen(),
    );
  }
}

// Example from home_screen.dart
ElevatedButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const JournalScreen()),
    );
  },
  child: const Text('Open Journal'),
)

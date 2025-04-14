import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const PepPalApp());
}

class PepPalApp extends StatelessWidget {
  const PepPalApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'PepPal',
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.pink),
      home: const HomeScreen(),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MoodTrackerScreen extends StatefulWidget {
  const MoodTrackerScreen({Key? key}) : super(key: key);

  @override
  State<MoodTrackerScreen> createState() => _MoodTrackerScreenState();
}

class _MoodTrackerScreenState extends State<MoodTrackerScreen> {
  final List<String> moods = ['Happy', 'Sad', 'Anxious', 'Angry', 'Calm'];
  String? selectedMood;
  final TextEditingController noteController = TextEditingController();
  bool isSubmitting = false;
  String? feedback;

  Future<void> submitMood() async {
    if (selectedMood == null) return;

    setState(() {
      isSubmitting = true;
      feedback = null;
    });

    final url = Uri.parse('http://127.0.0.1:8000/api/moods/');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'mood': selectedMood!.toLowerCase(),
        'note': noteController.text.trim(),
      }),
    );

    setState(() {
      isSubmitting = false;
      feedback = response.statusCode == 201
          ? '✅ Mood submitted!'
          : '❌ Something went wrong.';
    });

    if (response.statusCode == 201) {
      noteController.clear();
      selectedMood = null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('🧘‍♀️ Mood Tracker')),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            DropdownButtonFormField<String>(
              decoration: const InputDecoration(labelText: 'Select Mood'),
              value: selectedMood,
              onChanged: (value) => setState(() => selectedMood = value),
              items: moods.map((mood) {
                return DropdownMenuItem(
                  value: mood,
                  child: Text(mood),
                );
              }).toList(),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: noteController,
              decoration: const InputDecoration(
                labelText: 'Optional note',
                border: OutlineInputBorder(),
              ),
              maxLines: 3,
            ),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: isSubmitting ? null : submitMood,
              icon: const Icon(Icons.send),
              label: Text(isSubmitting ? 'Submitting...' : 'Submit Mood'),
            ),
            if (feedback != null) ...[
              const SizedBox(height: 20),
              Text(feedback!, style: TextStyle(color: Colors.teal)),
            ]
          ],
        ),
      ),
    );
  }
}

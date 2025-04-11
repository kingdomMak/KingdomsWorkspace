import 'package:flutter/material.dart';
import '../models/kindness_challenge.dart';
import '../services/kindness_service.dart';
import '../services/kindness_service.dart';



class KindnessChallengesScreen extends StatefulWidget {
  const KindnessChallengesScreen({super.key});

  @override
  State<KindnessChallengesScreen> createState() => _KindnessChallengesScreenState();
}

class _KindnessChallengesScreenState extends State<KindnessChallengesScreen> {
  late Future<List<KindnessChallenge>> _challengesFuture;
  final KindnessService _kindnessService = KindnessService();

  @override
  void initState() {
    super.initState();
    _challengesFuture = _kindnessService.getChallenges();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Daily Kindness Challenges")),
      body: FutureBuilder<List<KindnessChallenge>>(
        future: _challengesFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          final challenges = snapshot.data!;
          return ListView.builder(
            itemCount: challenges.length,
            itemBuilder: (context, index) {
              final challenge = challenges[index];
              return Card(
                margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                elevation: 3,
                child: ListTile(
                  leading: const Icon(Icons.favorite, color: Colors.pink),
                  title: Text(challenge.challenge),
                  subtitle: Text("Added on ${challenge.date.toLocal().toString().split(' ')[0]}"),
                ),
              );
            },
          );
        },
      ),
    );
  }
}


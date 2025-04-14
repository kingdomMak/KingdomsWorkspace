import 'package:flutter/material.dart';
import '../models/kindness_challenge.dart';
import '../services/challenge_service.dart';

class ChallengeScreen extends StatefulWidget {
  const ChallengeScreen({super.key});

  @override
  State<ChallengeScreen> createState() => _ChallengeScreenState();
}

class _ChallengeScreenState extends State<ChallengeScreen> {
  final ChallengeService _service = ChallengeService();
  late Future<List<KindnessChallenge>> _futureChallenges;

  @override
  void initState() {
    super.initState();
    _futureChallenges = _service.fetchChallenges();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Daily Kindness')),
      body: FutureBuilder<List<KindnessChallenge>>(
        future: _futureChallenges,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('No challenges yet.'));
          }

          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              final challenge = snapshot.data![index];
              return ListTile(
                leading: const Icon(Icons.check_circle_outline),
                title: Text(challenge.message), // 🟢 updated
                subtitle: Text(
                  'For: ${challenge.createdAt.toLocal().toString().split(' ')[0]}', // 🟢 updated
                ),
              );
            },
          );
        },
      ),
    );
  }
}

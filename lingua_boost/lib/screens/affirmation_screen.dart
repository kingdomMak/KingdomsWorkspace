import 'package:flutter/material.dart';
import '../models/affirmation.dart';
import '../services/api_service.dart';

class AffirmationScreen extends StatefulWidget {
  const AffirmationScreen({Key? key}) : super(key: key);

  @override
  State<AffirmationScreen> createState() => _AffirmationScreenState();
}

class _AffirmationScreenState extends State<AffirmationScreen> {
  late Future<Affirmation?> _affirmation;

  @override
  void initState() {
    super.initState();
    _affirmation = ApiService.fetchLatestAffirmation();
  }

  Future<void> _refresh() async {
    setState(() {
      _affirmation = ApiService.fetchLatestAffirmation();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("💖 Daily Affirmation")),
      body: RefreshIndicator(
        onRefresh: _refresh,
        child: FutureBuilder<Affirmation?>(
          future: _affirmation,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(child: CircularProgressIndicator());
            } else if (snapshot.hasError || snapshot.data == null) {
              return const ListView(
                children: [
                  SizedBox(height: 250),
                  Center(child: Text("No affirmation available right now.")),
                ],
              );
            } else {
              final affirmation = snapshot.data!;
              return ListView(
                padding: const EdgeInsets.all(24.0),
                children: [
                  const SizedBox(height: 100),
                  Text(
                    "🌟 ${affirmation.message}",
                    style: Theme.of(context).textTheme.titleLarge,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  Text(
                    "🕒 Posted: ${affirmation.createdAt.toLocal().toString().split('.')[0]}",
                    style: TextStyle(color: Colors.grey[600]),
                    textAlign: TextAlign.center,
                  )
                ],
              );
            }
          },
        ),
      ),
    );
  }
} 
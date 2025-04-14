import 'package:flutter/material.dart';

class ScenarioScreen extends StatefulWidget {
  final String role;

  const ScenarioScreen({super.key, required this.role});

  @override
  State<ScenarioScreen> createState() => _ScenarioScreenState();
}

class _ScenarioScreenState extends State<ScenarioScreen> {
  int? selectedIndex;

  final String scenarioText = "You're walking through a mysterious forest and come to a fork in the path. What do you do?";

  final List<String> choices = [
    "Take the left path",
    "Climb a tree to scout",
    "Run forward into the unknown",
    "Turn around and go home"
  ];

  void selectChoice(int index) {
    setState(() {
      selectedIndex = index;
    });

    // You could also navigate or show next screen here
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("You chose: ${choices[index]}")),
    );
  }

  @override
  Widget build(BuildContext context) {
    bool isVip = widget.role == "vip" || widget.role == "vvip";

    return Scaffold(
      appBar: AppBar(
        title: Text("Scenario for ${widget.role.toUpperCase()}"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            Text(scenarioText, style: TextStyle(fontSize: 20), textAlign: TextAlign.center),
            const SizedBox(height: 30),
            ...List.generate(choices.length, (index) {
              // If Normal user, only show 2 options
              if (!isVip && index > 1) return const SizedBox.shrink();

              return GestureDetector(
                onTap: () => selectChoice(index),
                child: Card(
                  color: selectedIndex == index ? Colors.green.shade100 : null,
                  elevation: 4,
                  margin: const EdgeInsets.symmetric(vertical: 8),
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Text(choices[index], style: const TextStyle(fontSize: 16)),
                  ),
                ),
              );
            }),
          ],
        ),
      ),
    );
  }
}

class KindnessChallenge {
  final int id;
  final String challenge;
  final DateTime date;

  KindnessChallenge({
    required this.id,
    required this.challenge,
    required this.date,
  });

  factory KindnessChallenge.fromJson(Map<String, dynamic> json) {
    return KindnessChallenge(
      id: json['id'],
      challenge: json['challenge'],
      date: DateTime.parse(json['date']),
    );
  }
}

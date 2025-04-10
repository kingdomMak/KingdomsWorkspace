class Affirmation {
  final int id;
  final String message;
  final DateTime createdAt;

  Affirmation({
    required this.id,
    required this.message,
    required this.createdAt,
  });

  factory Affirmation.fromJson(Map<String, dynamic> json) {
    return Affirmation(
      id: json['id'],
      message: json['message'],
      createdAt: DateTime.parse(json['created_at']),
    );
  }
} 
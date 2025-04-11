class KindnessChallenge {
  final int id;
  final String message;
  final DateTime createdAt;

  KindnessChallenge({
    required this.id,
    required this.message,
    required this.createdAt,
  });

  factory KindnessChallenge.fromJson(Map<String, dynamic> json) {
    return KindnessChallenge(
      id: json['id'],
      message: json['message'],
      createdAt: DateTime.parse(json['created_at']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'message': message,
      'created_at': createdAt.toIso8601String(),
    };
  }
}




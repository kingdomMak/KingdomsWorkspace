import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/kindness_challenge.dart';

class ChallengeService {
  static const String _baseUrl = 'http://127.0.0.1:8000/api/challenges/';

  Future<List<KindnessChallenge>> fetchChallenges() async {
    final response = await http.get(Uri.parse(_baseUrl));
    if (response.statusCode == 200) {
      List data = json.decode(response.body);
      return data.map((item) => KindnessChallenge.fromJson(item)).toList();
    } else {
      throw Exception('Failed to load kindness challenges');
    }
  }
}



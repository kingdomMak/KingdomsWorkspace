import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/kindness_challenge.dart';

class KindnessService {
  static const String _apiUrl = 'http://127.0.0.1:8000/api/challenges/';

  static Future<List<KindnessChallenge>> fetchChallenges() async {
    try {
      final response = await http.get(Uri.parse(_apiUrl));

      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        return data
            .map((item) => KindnessChallenge.fromJson(item))
            .toList();
      } else {
        throw Exception(
            '❌ Failed to load kindness challenges. Status code: ${response.statusCode}');
      }
    } catch (e) {
      print('❌ Error fetching challenges: $e');
      rethrow;
    }
  }

  Future<List<KindnessChallenge>> getChallenges() async {
    // Implement your data fetching logic here
    return [];
  }
}



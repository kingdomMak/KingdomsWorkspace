import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/affirmation.dart';

class ApiService {
  static const String baseUrl = 'http://127.0.0.1:8000/api/affirmations/';

  static Future<Affirmation?> fetchLatestAffirmation() async {
    try {
      final response = await http.get(Uri.parse(baseUrl));
      if (response.statusCode == 200) {
        final List data = jsonDecode(response.body);
        if (data.isNotEmpty) {
          return Affirmation.fromJson(data[0]);
        }
      }
      return null;
    } catch (e) {
      print('Error fetching affirmation: $e');
      return null;
    }
  }
} 
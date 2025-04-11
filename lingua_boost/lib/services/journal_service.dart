import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/journal_entry.dart';

class JournalService {
  final String baseUrl = 'http://127.0.0.1:8000/api/journal/';

  Future<List<JournalEntry>> fetchJournalEntries() async {
    final response = await http.get(Uri.parse(baseUrl));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => JournalEntry.fromJson(json)).toList();
    } else {
      throw Exception('Failed to load journal entries');
    }
  }

  Future<void> addJournalEntry(String title, String content) async {
    final response = await http.post(
      Uri.parse(baseUrl),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'title': title, 'content': content}),
    );

    if (response.statusCode != 201) {
      throw Exception('Failed to add journal entry');
    }
  }
}

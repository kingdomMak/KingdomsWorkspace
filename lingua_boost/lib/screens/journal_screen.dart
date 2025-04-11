import 'package:flutter/material.dart';
import '../services/journal_service.dart';
import '../models/journal_entry.dart';

class JournalScreen extends StatefulWidget {
  const JournalScreen({super.key});

  @override
  State<JournalScreen> createState() => _JournalScreenState();
}

class _JournalScreenState extends State<JournalScreen> {
  final JournalService _service = JournalService();
  List<JournalEntry> _entries = [];
  final _titleController = TextEditingController();
  final _contentController = TextEditingController();

  Future<void> _loadEntries() async {
    final entries = await _service.fetchJournalEntries();
    setState(() {
      _entries = entries;
    });
  }

  Future<void> _addEntry() async {
    final title = _titleController.text.trim();
    final content = _contentController.text.trim();

    if (title.isEmpty || content.isEmpty) return;

    await _service.addJournalEntry(title, content);
    _titleController.clear();
    _contentController.clear();
    _loadEntries();
  }

  @override
  void initState() {
    super.initState();
    _loadEntries();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Journal Entries')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              children: [
                TextField(
                  controller: _titleController,
                  decoration: const InputDecoration(labelText: 'Title'),
                ),
                TextField(
                  controller: _contentController,
                  decoration: const InputDecoration(labelText: 'Content'),
                  maxLines: 3,
                ),
                ElevatedButton(
                  onPressed: _addEntry,
                  child: const Text('Add Entry'),
                ),
              ],
            ),
          ),
          const Divider(),
          Expanded(
            child: ListView.builder(
              itemCount: _entries.length,
              itemBuilder: (context, index) {
                final entry = _entries[index];
                return ListTile(
                  title: Text(entry.title),
                  subtitle: Text(
                    '${entry.content}\n${entry.createdAt.toLocal()}',
                    maxLines: 3,
                    overflow: TextOverflow.ellipsis,
                  ),
                  isThreeLine: true,
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

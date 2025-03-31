import 'package:flutter/material.dart';
import '../models/remedy.dart';

class RemedyDetailScreen extends StatelessWidget {
  final Remedy remedy;

  const RemedyDetailScreen({super.key, required this.remedy});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(remedy.title)),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.asset(
              remedy.imagePath,
              width: double.infinity,
              height: 200,
              fit: BoxFit.cover,
            ),
            const SizedBox(height: 16),
            Text(
              remedy.title,
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(remedy.description, style: const TextStyle(fontSize: 18)),
          ],
        ),
      ),
    );
  }
}

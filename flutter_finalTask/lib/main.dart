import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(HomeRemediesApp());
}

class HomeRemediesApp extends StatelessWidget {
  const HomeRemediesApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Home Remedies',
      theme: ThemeData(
        primarySwatch: Colors.green,
        textTheme: const TextTheme(
          bodyMedium: TextStyle(fontSize: 18, color: Colors.black87),
        ),
      ),
      home: HomeScreen(),
    );
  }
}

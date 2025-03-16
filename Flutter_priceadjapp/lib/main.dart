import 'package:flutter/material.dart';
import 'price_adjustment.dart'; // Import the new page

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(), // Main Page
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Home Page")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate to Price Adjustment Page
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => PriceAdjustmentPage()),
            );
          },
          child: Text("Go to Price Adjustment"),
        ),
      ),
    );
  }
}

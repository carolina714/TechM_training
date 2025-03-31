import 'package:flutter/material.dart';
import '../models/remedy.dart';
import 'remedy_detail_screen.dart';

class HomeScreen extends StatelessWidget {
  final List<Remedy> remedies = [
    const Remedy(
      title: "Honey & Lemon",
      description: "Great for sore throat.",
      imagePath: "assets/images/remedy1.png",
    ),
    const Remedy(
      title: "Turmeric Milk",
      description: "Boosts immunity.",
      imagePath: "assets/images/remedy2.png",
    ),
    const Remedy(
      title: "Ginger Tea",
      description: "Relieves nausea.",
      imagePath: "assets/images/remedy3.png",
    ),
    const Remedy(
      title: "Aloe Vera",
      description: "Good for skin.",
      imagePath: "assets/images/remedy4.png",
    ),
    const Remedy(
      title: "Mint Leaves",
      description: "Aids digestion.",
      imagePath: "assets/images/remedy5.png",
    ),
  ];

  HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Home Remedies")),
      body: ListView.builder(
        itemCount: remedies.length,
        itemBuilder: (context, index) {
          return ListTile(
            leading: Image.asset(
              remedies[index].imagePath,
              width: 50,
              height: 50,
              fit: BoxFit.cover,
            ),
            title: Text(remedies[index].title),
            subtitle: Text(remedies[index].description),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder:
                      (context) => RemedyDetailScreen(remedy: remedies[index]),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

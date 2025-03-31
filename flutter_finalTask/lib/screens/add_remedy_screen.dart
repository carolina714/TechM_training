import 'package:flutter/material.dart';

class AddRemedyScreen extends StatefulWidget {
  const AddRemedyScreen({super.key});

  @override
  // ignore: library_private_types_in_public_api
  AddRemedyScreenState createState() => AddRemedyScreenState();
}

class AddRemedyScreenState extends State<AddRemedyScreen> {
  final _formKey = GlobalKey<FormState>();
  String title = '';
  String description = '';

  void _saveRemedy() {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      // Save to database later
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text("Remedy Added!")));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Add Remedy")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(labelText: "Remedy Title"),
                validator: (value) => value!.isEmpty ? "Enter a title" : null,
                onSaved: (value) => title = value!,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: "Description"),
                validator:
                    (value) => value!.isEmpty ? "Enter a description" : null,
                onSaved: (value) => description = value!,
              ),
              const SizedBox(height: 20),
              ElevatedButton(onPressed: _saveRemedy, child: const Text("Save")),
            ],
          ),
        ),
      ),
    );
  }
}

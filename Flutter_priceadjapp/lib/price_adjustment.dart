import 'package:flutter/material.dart';

class PriceAdjustmentPage extends StatefulWidget {
  @override
  _PriceAdjustmentPageState createState() => _PriceAdjustmentPageState();
}

class _PriceAdjustmentPageState extends State<PriceAdjustmentPage> {
  int price = 5000;

  void increasePrice() {
    setState(() {
      price += 100;
    });
  }

  void decreasePrice() {
    setState(() {
      price -= 100;
    });
  }

  void multiplyPrice() {
    setState(() {
      price = (price * 1.2).toInt();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Price Adjustment")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "Price: ₹$price",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: increasePrice,
              child: Text("Increase ₹100"),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: decreasePrice,
              child: Text("Decrease ₹100"),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.grey),
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: multiplyPrice,
              child: Text("Multiply by 1.2"),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
            ),
          ],
        ),
      ),
    );
  }
}

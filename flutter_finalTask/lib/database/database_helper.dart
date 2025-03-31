import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/remedy.dart';

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database? _database;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('remedies.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future<void> _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE remedies(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        imagePath TEXT NOT NULL
      )
    ''');
  }

  Future<int> insertRemedy(Remedy remedy) async {
    final db = await instance.database;
    return await db.insert('remedies', {
      'title': remedy.title,
      'description': remedy.description,
      'imagePath': remedy.imagePath, // ✅ Add imagePath
    });
  }

  Future<List<Remedy>> getRemedies() async {
    final db = await instance.database;
    final List<Map<String, dynamic>> maps = await db.query('remedies');

    return List.generate(maps.length, (i) {
      return Remedy(
        
        title: maps[i]['title'],
        description: maps[i]['description'],
        imagePath: maps[i]['imagePath'], // ✅ Retrieve imagePath
      );
    });
  }
}

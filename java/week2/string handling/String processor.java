package org.example.assignment.string;

public class StringProcessor {

    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    public static int countOccurrences(String text, String sub) {
        int count = 0;
        int index = text.indexOf(sub);
        while (index != -1) {
            count++;
            index = text.indexOf(sub, index + sub.length());
        }
        return count;
    }

    public static String splitAndCapitalize(String str) {
        String[] words = str.split("\\s+"); 
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            if (!word.isEmpty()) {
                result.append(Character.toUpperCase(word.charAt(0))) 
                      .append(word.substring(1))
                      .append(" ");
            }
        }
        return result.toString().trim(); 
    }

    public static void main(String[] args) {
        String input = "The Chronicles of Narnia !";
        System.out.println("Reversed String: " + reverseString(input));

        String text = "The lion , The witch and The wardrobe";
        String sub = "none";
        System.out.println("Occurrences of '" + sub + "': " + countOccurrences(text, sub));

        System.out.println("Capitalized Words: " + splitAndCapitalize(input));
    }
}

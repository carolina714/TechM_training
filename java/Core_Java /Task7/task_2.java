import java.util.ArrayList;

public class Task2 {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<>(java.util.List.of("Red", "Blue", "Green", "Yellow"));

        for (String color : colors) {
            System.out.println(color);
        }
    }
}

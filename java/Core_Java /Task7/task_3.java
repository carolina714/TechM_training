import java.util.ArrayList;

public class Task3 {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<>(java.util.List.of("Blue", "Green", "Yellow"));
        colors.add(0, "Red");
        System.out.println(colors);
    }
}

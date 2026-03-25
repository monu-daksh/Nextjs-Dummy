public class BadSmallJava {
    public static void main(String[] args) {
        int x = 5;
        int y = 0;
        System.out.println(x / y); // ❌ division by zero
        if (true) { // ❌ always true
            System.out.println("Bad Java Code");
        }
    }
}
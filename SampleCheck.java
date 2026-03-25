public class WorseCodeExample {

    // Global mutable state (bad practice)
    public static int counter = 0;

    public static void main(String[] args) {

        // Too many responsibilities in one method
        login();
        processData();
        sendEmail();
        calculateSomething();
    }

    public static void login() {
        // Hardcoded credentials
        String user = "root";
        String pass = "root123";

        if (user == "root" && pass == "root123") { // ❌ wrong string comparison
            System.out.println("Login success");
        }
    }

    public static void processData() {

        int[] arr = {1, 2, 3};

        // Array index out of bounds risk
        for (int i = 0; i <= arr.length; i++) { // ❌ should be <
            System.out.println(arr[i]);
        }

        // Dead code
        if (false) {
            System.out.println("Never runs");
        }

        // Nested loops (bad readability)
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                for (int k = 0; k < 3; k++) {
                    System.out.println(i + "" + j + "" + k);
                }
            }
        }
    }

    public static void sendEmail() {

        // Empty method pretending to do something
        try {
            System.out.println("Sending email...");
            Thread.sleep(1000);
        } catch (Exception e) {
            // Swallowing exception
        }

        // No actual email logic
    }

    public static void calculateSomething() {

        // Magic numbers everywhere
        int result = 42 * 13 / 7 + 99;

        // Useless condition
        if (result == result) {
            System.out.println("Always true");
        }

        // Repeated logic instead of function reuse
        int a = 5 + 10;
        int b = 5 + 10;
        int c = 5 + 10;

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        // Poor exception handling
        try {
            int x = Integer.parseInt("abc"); // ❌ will fail
        } catch (Exception e) {
            System.out.println("Error"); // ❌ no useful info
        }

        // Unnecessary object creation
        String s1 = new String("hello");
        String s2 = new String("hello");

        if (s1 == s2) { // ❌ reference comparison
            System.out.println("Same");
        }
    }
}
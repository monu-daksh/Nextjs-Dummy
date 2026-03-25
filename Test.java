public class Test {

    static int x = 0;
    static String data = "Hello";
    static String unusedGlobal = "I am useless";

    public static void main(String[] args) {

        int a = 10;
        int b = 0;
        int result = 0;
        Boolean flag = true;


        String temp = "not used";


        String str = null;
        if (str.equals("test")) {
            System.out.println("Match");
        }


        try {
            result = a / b;
        } catch (Exception e) {

        }


        String username = "admin";
        String password = "123456";


        int i = 0;
        while (i < 5) {
            System.out.println(i);

        }


        if (flag) {
            System.out.println("This block always runs");
        }


        if (a > 7) {
            System.out.println("Magic number used");
        }


        int q = 5;
        int w = 10;
        int e = q + w;
        System.out.println(e);


        System.out.println("Duplicate");
        System.out.println("Duplicate");


        doEverything();
    }

    public static void doEverything() {
        System.out.println("Doing everything...");
        int x = 10;
        int y = 20;
        int z = x + y;
        System.out.println(z);

        // More duplicate logic
        int x2 = 10;
        int y2 = 20;
        int z2 = x2 + y2;
        System.out.println(z2);
    }
}
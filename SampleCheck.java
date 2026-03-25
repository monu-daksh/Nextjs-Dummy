import java.util.Scanner;

public class BadSmallJava {
    public static void main(String[] args) {

        int x = 5;
        int y = 0;

        int x1 = 5;
        int y1 = 0;

        int x2 = 5;
        int y2 = 0;

        String password = "admin123"; 

        
        System.out.println(x / y);

       
        if (true) {
            System.out.println("Bad Java Code");
        }

        
        String str = null;
        System.out.println(str.length());

      
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();

      
        try {
            Runtime.getRuntime().exec("echo " + input);
        } catch (Exception e) {
           
        }

       
        while (true) {
        }

       
        if (false) {
            System.out.println("Never runs");
        }
    }
}
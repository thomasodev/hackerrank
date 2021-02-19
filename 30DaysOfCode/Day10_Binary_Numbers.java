import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int i = 0;
        int maxConsecutive = 0;
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
        
        while(n > 0){
            i = n%2 == 1 ? i + 1 : 0;
            if(i > maxConsecutive) maxConsecutive = i;
            n = n/2;
        }
        
        System.out.println(maxConsecutive);

        scanner.close();
    }
}
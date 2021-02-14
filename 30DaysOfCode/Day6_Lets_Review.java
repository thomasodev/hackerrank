import java.io.*;
import java.util.*;

public class Solution {
    
    static void getPrint(String s){
        String even = "";
        String odd = "";
        char[] charArray = s.toCharArray();
        for(int i = 0; i < s.length(); i++){
            if(i % 2 == 0){
                even += charArray[i];
            }else{
                odd += charArray[i];
            }
        }
        System.out.println(even + " " + odd);
    }

    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.nextLine();
        for(int i = 0; i < n; i++){
            getPrint(scan.nextLine());
        }
    }
}
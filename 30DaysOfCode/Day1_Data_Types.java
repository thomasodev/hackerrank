import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
  public static void main(String[] args) {
    int i = 4;
    double d = 4.0;
    String s = "HackerRank ";

    Scanner scan = new Scanner(System.in);

    int numInt = scan.nextInt();
    double numDouble = scan.nextDouble();
    scan.nextLine();
    String phrase = scan.nextLine();
    
    System.out.println(i + numInt);
    System.out.println(d + numDouble);
    System.out.println(s + phrase);

    scan.close();
  }
}
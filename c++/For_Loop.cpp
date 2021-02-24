#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    int a, b;
    string numbers[10] = {"zero", "one", "two", "three", "four", "five", 
    "six", "seven","eight", "nine"};
    
    cin >> a >> b;
    for(int n = a; n <= b; n++) {
        cout << (n > 9 ? (n%2 == 0 ? "even" : "odd") : numbers[n]) << endl; 
    }
    return 0;
}
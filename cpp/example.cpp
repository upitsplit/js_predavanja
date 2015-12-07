#include <iostream>
using namespace std;

int squared(int a) {
  return a * a;
}

int main() {
  int a = 25;
  cout << a << "^2 = " << squared(a) << endl;
  return 0;
}

// n choose k

unsigned combination(const unsigned n, const unsigned k){
  if(k > n) return 0;
  const unsigned a = k*2 > n ? n-k : k;
  if(a == 0) return 1;

  unsigned result = n;
  for(int i=2; i<=a; i++){
    result *= (n-i+1);
    result /= i;
  }
  return result;
}

int combination(int n, int k){
    const int a = k*2 > n ? n-k : k;
    if(a == 0) return 1;

    int answer = 1;
    for(int i=0; i<a; i++){
        answer *= n-i;
        answer /= i+1;
    }
    
    return answer;
}
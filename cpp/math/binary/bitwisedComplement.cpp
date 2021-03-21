int bitwiseComplement(int N) {
    int mask = 1;
    
    while(N > mask){
        mask = mask * 2 + 1;
    }
    
    return N ^ mask;
}
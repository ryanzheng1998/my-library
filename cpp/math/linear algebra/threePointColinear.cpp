// slopes of any two pairs is same
bool threePointColinear(int x1, int y1, int x2, int y2, int x3, int y3){
    int dx = x1 - x2;
    int dy = y1 - y2;
    int dxx = x1 - x3;
    int dyy = y1 - y3;
    return dx * dyy == dy * dxx; 
}

// shoelace formula
bool threePointColinear(int x1, int y1, int x2, int y2, int x3, int y3){
    int area = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
    return area == 0;
}
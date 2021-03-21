#include<vector>

// Kadane's Algorithm
int maximunSumSubArray(std::vector<int> array){
    int currentMax = 0, maxSoFar = 0;

    for(int element : array){
        currentMax = std::max(element, currentMax + element);
        maxSoFar = std::max(maxSoFar, currentMax);
    }

    return maxSoFar;
}
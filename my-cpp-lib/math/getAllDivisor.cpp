#include <vector>

std::vector<int> getAllDivisor(int num){
    std::vector<int> answer;
    
    int i;
    for(i=1; i*i<num; i++){
        if(num % i == 0){
            answer.push_back(i);
            answer.push_back(num/i);
        }
    }

    if(i*i == num){
        answer.push_back(i);
    }

    return answer;
}
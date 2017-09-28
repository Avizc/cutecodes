#include <stdio.h>

int main(int countTo){
    int smallPrime=638489;
    int bigPrime=697399;
    int i;
    for(i=1;i<bigPrime;i++){
        if(countTo%i===0){
            return false;
        }
    }
    return true;
}
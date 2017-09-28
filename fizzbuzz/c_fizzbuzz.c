#include <stdio.h>

int main(void){
    int fizz=3;
    int buzz=3;
    int i;
    for(i=1;i<19;i++){
        if(i%fizz==0&&i%buzz==0)
            printf("fizzbuzz\n");
        else if(i%buzz==0)
            printf("buzz\n");
        else if(i%fizz==0)
            printf("fizz\n"); 
        else 
            printf("\n");
    }
    return 0;
}
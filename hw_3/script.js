// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
// решение 1 - рекурсивно O(n)
console.log('====TASK1');

function getNumPower(x,n){
    let res = 1;
    if(n===1){
        return res * x;
    }else{
        res = getNumPower(x,n-1)*x;
    }
    return res;
}

console.log(getNumPower(2,3));
console.log(getNumPower(3,3));
console.log(getNumPower(5,4));




console.log('====TASK2');
/* 
2 Имея два отсортированных массива размера m и n соответственно, 
вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
Массив 1 - 100 112 256 349 770
Массив 2 - 72 86 113 119 265 445 892
к = 7
Вывод : 256
Окончательный отсортированный массив -
72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
7-й элемент этого массива равен 256.
*/

let first = [100, 112, 256, 349, 770];
let second = [72, 86, 113, 119, 265, 445, 892];

function getValueByIndex(arr1,arr2,k){
    let i = 0;
    let j = 0;
    let kFound = 0;
    while(i<arr1.length||j<arr2.length){
        if(arr1[i]<arr2[j]||!arr2[j]){
            if(kFound==k) return `${kFound} елемент в конечном массиве  = ${arr1[i]}`;
            i++
            
        }else if(arr1[i]>arr2[j]||!arr1[i]){
            if(kFound==k) return `${kFound} елемент в конечном массиве  = ${arr2[j]}`;
            j++
        }
        kFound++
        if(!arr1[i]&&!arr2[j]){
            return `Индекс <${kFound}> выходит за пределы массива`
        }
    }



};

console.log(getValueByIndex(first,second,7));
console.log(getValueByIndex(first,second,12));






console.log('====TASK3');
/* 
Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)
arr[] = {1, 1, 2, 2, 2, 2, 3,} 
x = 2
Вывод: 4 раза
*/


let arr3 = [1, 1, 2, 2, 2, 2, 3];
let arr4 = [1,2,3,4,5,7,7,7,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,22,36,69,98,100];

function findCounter(arr,left,rigth,x){
    let count = 0;
    let middle  = Math.round((rigth+left)/2);
         
    if(arr[middle]==x){
        count++
        let i = middle;
        let j = middle;
        while(arr[i]==x||arr[j]==x){
            i++
            j--
            if(arr[i]==x) {
                count++
            };
            if(arr[j]==x) {
                count++
            };
        };
        return `Число ${x} повторяется в данном массиве ${count} ${count>1&&count<5? 'раза':'раз'}`; 
    }else if(left>rigth){
        return `массив не содержит число ${x}`
    }else if(arr[middle]>x){
        return findCounter(arr,left,middle-1,x);
    }else if(arr[middle]<x){
        return findCounter(arr,middle+1,rigth,x);
    }
}


console.log(findCounter(arr3,0,arr3.length-1,2));
console.log(findCounter(arr3,0,arr3.length-1,3));
console.log(findCounter(arr4,0,arr4.length-1,8)); 
console.log(findCounter(arr4,0,arr4.length-1,7)); 
console.log(findCounter(arr4,0,arr4.length-1,98)); 
console.log(findCounter(arr4,0,arr4.length-1,15)); 
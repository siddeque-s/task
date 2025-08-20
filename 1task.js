let a = [10, 8, 3, 5, 6, 7];
let len = a.length;
sum = 0;

for (let i = 0; i < len; i++) {
  sum = sum + a[i];
}
console.log("Average :", sum / len);

//  for(let i=0;i<len;i++){
//     for(j=i+1;j<len;j++){
//         if(a[j]>a[i]){
//             temp=a[i];
//             a[i]=a[j]
//             a[j]=temp

//         }
//     }
//  }
lar = a[0];
slar = null;
for (i = 0; i < len; i++) {
  if (a[i] > a[i + 1]) {
    slar = lar;
    lar = a[i + 1];
  }
}
console.log("second largest :", slar);

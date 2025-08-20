const avg = (a) => {
  sum = 0;

  for (let i = 0; i < len; i++) {
    sum = sum + a[i];
  }
  console.log("Average :", sum / len);
};

//  for(let i=0;i<len;i++){
//     for(j=i+1;j<len;j++){
//         if(a[j]>a[i]){
//             temp=a[i];
//             a[i]=a[j]
//             a[j]=temp

//         }
//     }
//  }

const secLar = (a) => {
  lar = a[0];
  slar = null;
  for (i = 0; i < len; i++) {
    if (a[i] > lar) {
      slar = lar;
      lar = a[i];
    } else if (a[i] > slar && a[i] < lar) {
      slar = a[i];
    }
  }
  console.log("second largest :", slar);
};

let a = [10, 8, 3, 5, 6, 7];
let len = a.length;

avg(a);
secLar(a);

console.log("Radhe Radhe ");


 function practice(datatake){
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
        console.log("data",datatake);
        resolve("success.....");
        },4000);    
    
})  
}
// console.log("fetching Data...")
// let p1 = practice("datasend1");
//   p1.then((res)=>{
//     // console.log(res);
//     console.log("Fetching Data2...")
//     let p2 = practice("datasend2");
//     p2.then((res)=>{
//         // console.log(res)
//     })
//   });
console.log("Fetching Data1 ");

practice(1)
  .then((res)=>{
    console.log(res)
    return practice(2)
  })
  .then((res)=>{
    console.log(res);
    return practice(3);

  })
  . then((res)=>{
    console.log(res)
  })








// practice(1).then((res)=>{
//   console.log(res);
// console.log("Fetching Data2 ")

//   practice(2).then((res)=>{
//     console.log(res)
// console.log("Fetching Data3 ")

//     practice(3).then((res)=>{
//       console.log(res)
//       console.log("finished")
//     })
//   })
// })





//  practice(1 ,()=>{
//     practice(2,()=>{
//         practice(3,()=>{
//             console.log("finished...")
//         })
//     });
//  });
 
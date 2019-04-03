function cutFruits(fruits){
  let cuts = [];
  fruits.map(f=>{
    if (fruitsName.indexOf(f)>-1) {
      let l = Math.ceil(f.length/2);
      cuts.push(f.substr(0,l));
      cuts.push(f.substr(l));
    } else cuts.push(f);
  })
  return cuts;  
}

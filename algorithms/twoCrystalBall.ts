function twoCrystalBalls(breaks) {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  
    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
      if (breaks[i]) {
        break;
      }
    }
    console.log(i, "i");
  
    i -= jmpAmount;
    console.log(i, "i");
  
    for (let j = i; j < breaks.length; j++) {
      if (breaks[j]) {
        console.log(j, "i");
        return j;
      }
    }
    return -1;
  }
  
  console.log(twoCrystalBalls([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true]))
  console.log(twoCrystalBalls([false,false,true,true,true]))
  console.log(twoCrystalBalls([false,false,false]))
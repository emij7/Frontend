function duplicateEncode(word){
    let x = word.toLowerCase()
    let y = []
    let counter = 0
    for(let i = 0;i<x.length;i++){
      for(let j=0;j<x.length;j++){
        if(x[i]==x[j]){
          counter +=1
        }
      }
      if (counter>1){
        y.push(')')
      }else{
        y.push('(')
      }
      counter = 0;
    }
  return y.join('')
}


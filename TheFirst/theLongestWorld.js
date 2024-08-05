function getTheLorgestWord(N) {
    N = N.split(' ')
    let x = N[0].length;
    for (let n of N){
        if (n.length > x)
            x = n.length
    }
    let answer = ""
    for (let n of N){
        if (n.length === x)
            answer = n
    }
    return answer;
  }

  console.log(getTheLorgestWord("Everyone of us has all we need"))
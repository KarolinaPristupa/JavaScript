function test(n) {
    let x = 0
  while(n > 0){
      x += n--
  }
    return x
}
console.log(test(6))
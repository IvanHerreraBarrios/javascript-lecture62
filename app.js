var twoEggDrop = function(n) {
    let moves = -1
    while(n > 0){
        moves++
        n = n - moves
    }
    return moves
};
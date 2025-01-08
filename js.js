/**
 * @param {character[][]} grid
 * @return {number}
 */


grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
var k
var i ,j
var numIslands = function (grid) {
    loop1: for (var i = 0; i < 4; i++) {
                for (var j = 0; j < m; j++) {
                    if (grid[i][j] == "1" && grid[i+1][j+1]== "0") {
                        grid[i][j] == "t"
                        m =j
                        
                        continue  loop1

                        }
                    else if (grid[i][j]== "1" && grid[i+1][j+1] =="1"){
                        grid[i][j] == "t"
                        
                    }
                   
                }

    }
};
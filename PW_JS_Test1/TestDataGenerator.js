let userRole = ["admin", "editor", "viewer", "tester", "manager"]
for(i = 1; i <9; i++){
    console.log(`USR-000${i} | TestUser_${i} | ${userRole[(i-1)%5]} | ${i%3!=0 ? 'ACTIVE' : 'INACTIVE'}`)
}
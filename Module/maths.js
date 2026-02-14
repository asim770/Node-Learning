function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
// module.exports= add;   //when i only need to export add function only;


//To export multiple function we need too return an objects;
module.exports= {
    add,
    sub
};
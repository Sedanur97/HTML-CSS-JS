const hello = function(name){
    console.log("merhaba " + name)
};

hello("Seda");

const database = {
    host: "localhost", 
    add: function(){
        console.log("added")
    },
    get:function(){

        console.log("obtained")
    },
    update:function(id){
        console.log('id: ${id} updated');
    },
    delete:function(id){
        console.log('id: ${id} deleted');
    }
}

console.log(database.hots);
database.add();

database.delete(10);

let nickname = 'Seda ;)';
function showmessage(){
    let message = 'Hello, ' + nickname;
    alert(message);
}
 showmessage( ); // Hello, Seda ;)
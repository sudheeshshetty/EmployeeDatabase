var express=require('express');
var app=express();
var bodyparser=require('body-parser');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'sudhi87'));
const session = driver.session();

var path=require('path');

app.use(express.static('./dist'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



app.get('/',function(req,res,next){
    res.sendFile(path.resolve(__dirname+"/dist/index.html"));
});

app.post('/addEmployee',function(req,res){
    console.log(req.body)
    session.run(
        'CREATE (a:Employee {name: $name,hierarchy: $hierarchy,email: $email,employeeid: $eid}) RETURN a',
        {
            name: req.body.name,
            hierarchy: req.body.hierarchy,
            email:req.body.email,
            eid:req.body.eid
        }
    ).then(result=>{
        session.close();
        const singleRecord = result.records[0];
        const node = singleRecord.get(0);
        console.log(node.properties.name);
        driver.close();
    })
});

app.listen(3000,function(){
    console.log('server is running on localhost:3000');
});
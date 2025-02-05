```javascript
// Correct use of $inc operator with upsert option
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}},{upsert:true});
//The above code will increment counter field by 1 and if the document does not exist will create a new one.
//Alternative solution handling the case explicitly
let result = db.collection.findOne({"_id":ObjectId("someId")});
if(result){
  db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
}else{
  db.collection.insertOne({"_id":ObjectId("someId"),counter:1});
}
```
```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
//The above code will increment counter field by 1 only if the document exist, if the document not found it will not create a new one.
```
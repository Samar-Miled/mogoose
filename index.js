const mongoose= require("mongoose");
MONGO_URI=('mongodb://localhost:27017/myData')
    async function connect(MONGO_URI=('mongodb://localhost:27017/myData)
        mongoose.connect(uri)
        .then(() => console.log('Connected to MongoDB successfully'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));

    }
       
        connect();

    const personSchema= new mongoose.Schema({
       name: {
        type:String,
        required:true,
       },
       age:{
        type:Number,
        required:true,

       },
       favoriteFoods:{
        type:[String],
        required:false,
       },
    });

    const person=mongoose.model('person',personSchema);

    async function newUser() {
        try{
            const newPerson= new person({
        name:"Khairi",
        age:17,
        favoriteFoods:['pasta','labloubii'],

    })
    await newPerson.save()
       
            console.log("person saved successfully"+newPerson);


        }catch(error){ 
            console.log("error"+ error);
        }
    }
    
   /*newUser()*/
    
    async function creatPeoples(arrayOfPeople) {
        try{
            const data = await person.create(arrayOfPeople);

            console.log("people created successfully"+ data);

        }
        catch(error){
            console.log("error creating people"+ error);
        }

    };
    const arrayOfPeople=[
        {name:'jihed', age:12, favoriteFoods:['pizza','humberger']},
        {name:'jiji', age:43, favoriteFoods:['cheese burger','tiramisu']},
        {name:'Bilel', age:20, favoriteFoods:['panoza','salad cesar']},
    ];
    creatPeoples(arrayOfPeople);

    async function findByName(name) {
        try{
            const person=await person.find({name});
            console.log(person);

        }
        catch(error){
            console.log("not found "+error);
        }
        
    }
    findByName(jiji);


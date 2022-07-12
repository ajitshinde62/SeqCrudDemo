const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('seqdemo2','root','',{
    host:'localhost',
    dialect:'mysql',
});

sequelize.authenticate().then(()=>{
    console.log('connected successfully');
}).catch((err)=>{
    console.log(err.message);
});
const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize
db.user=require('./user.model')(sequelize,Sequelize);
module.exports=db;

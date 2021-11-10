const fs = require('fs')
const yargs = require('yargs')
const students = require('./students')

yargs.command({
    command:'add',
    describe:'add student',
    builder:{
        id:{
            describe:'this is number of student',
            type:'number',
            demandOption:true
        },
        name:{
            describe:'this is name of student',
            type:'string',
            demandOption:true
        },
        subject:{
            describe:'this is subject of student',
            type:'string',
            demandOption:true
        },
        grade:{
            describe:'this is grade of student',
            type:'number',
            demandOption:true
        },
        comment:{
            describe:'this is comment of student',
            type:'string',
            demandOption:false
        }
    },
    handler:(argv)=>{
        students.addStu(argv.id,argv.name,argv.subject,argv.grade,argv.comment)

    }
})

yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
        id:{
            describe:'this is number of student',
            type:'number',
            demandOption:true
        }
    },
    handler:(argv)=>{
        students.removeStu(id)

    }
})

yargs.command({
    command:'list',
    describe:'list student',
    handler:()=>{
        students.listStu()

    }
})

yargs.command({
    command:'read',
    describe:'read student',
    builder:{
        id:{
            describe:'this is number of student',
            type:'number',
            demandOption:true
        }
    },
    handler:(argv)=>{
        students.readStu(argv.id)
    }
})
console.log(yargs.argv)
// yargs.parse()
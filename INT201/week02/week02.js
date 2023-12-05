//Weakly and dynamic data type

// Const
const a = 1
//a = 5 เปลี่ยนค่าไม่ได้
const _B = 5
console.log(a)

//let
let q = 1
console.log(q)
console.log(typeof q)//1 มันเป็นnumber
q = 'uwu'
console.log(q)
console.log(q.toUpperCase())//ถ้าจะใช้ฟังก์ชั่นนี้ต้องเขียนเองมันไม่โชขึ้นให้ในกรณีที่เขียนในlogและต้องเติม()ด้วยเพื่อเรียกใช้เป็นฟังก์ชั่น
console.log(q)//ไอตัวนี้ถูกปริ๊นทีหลังมันก็จะกลับมาเป็นตัวเล็กเหมือนเดิมเพราะมันเป็นimmutableคือไอตัวบนไม่ส่งผลอะไรกับต้นฉบับ
console.log(typeof q)
q = true
console.log(typeof q)
q = null
console.log(typeof q)
q = undefined
console.log(typeof q)

//Array
let num = [1,3,5,7,9]
console.log('111111111111111111111');
console.log(`Array type => ${typeof num}`)
const ob = {id: 7, name: 'AHA'}
console.log(`Object type => ${typeof ob}`)
// obj = num ทำไม่ได้
num = ob
console.log(num) // มันเปลี่ยนตัวต้นฉบับไปด้วย
num.id = 69
console.log(num)
const ids = [101, 105, 110, 112]
console.log(ids)
ids[0] = 1
console.log(ids)
ids[ids.length - 1] = 999
console.log(ids)
ids[ids.length] = 888//add new element
console.log(ids)

let k,//ในกรณีของ let สามารถตั้งค่าตัวแปรทีเดียวได้หลายๆตัว
    n,//ซึ่งตัวแปรที่เราไม่ได้กำหนดค่าก็จะถูกตีค่าเป็นundefined
    o = 1
    p = true
    q = null
console.log(k)
console.log(n)
console.log(o)
console.log(p)
console.log(q)

// ===, ==
let f
if(f === undefined) console.log('f is undefined')
if(q === null) console.log('q is null')
if('2' === 2) console.log(`'2' == 2`)//=== จะเช็คTypeก่อนว่าตรงไหมถ้าไม่ก็จะเป็นfalseแต่ถ้าตรงจะค่อยเช็คValueทีหลัง
else console.log(`'2' !== 2`)
if('2' == 2) console.log(`'2==2'`)//== เช็คแค่Vauleเลยว่าตรงไหมไม่เช็คType

if (typeof f === 'undefined') //การจะเช็คtypeของตัวแปรต้องใส่ '' ให้กับค่าที่จะเช็คด้วยเพราะมันจะreturnค่าออกมาเป็นString
console.log(`typeof m ==='undefined'`)//null has typeof objectif (typeof q === 'object') console.log(`typeof n === 'object'`)
if (typeof ids === 'object')
console.log(`typeof ids ==='Object'`)
let c = 200
if (typeof c === 'number')
console.log(`typeof c ==='200'`)
function doSomething(activity) {
    return activity
}
console.log(doSomething('Play Valorant'))
console.log(typeof doSomething)

// Scope
// x คือ Global scope
let xe = 1
console.log(xe)
{
    //x เป็น Block Scope
    let xe = 5
    console.log(xe)
}
let x = 20 //อันนี้ทำไม่ได้เพราะ x ถูกประกาศเป็น Global Scope ไปแล้วในบรรทัดที่78
x = 10//ที่อันนี้ทำได้เพราะมันเป็นการ Reassign
console.log(x)
if(1){
    //Block Scope
    let x = 555
    console.log(`X ใน Block Scope => ${x}`)
}else console.log('It 1')
console.log(x)//Decare จากบรรทัดที่86แต่ค่าที่โชจะนำมาจากการ Reassign ของบรรทัดที่86
function doSomething() {
    let x = 'A'
    console.log(x)
}
doSomething()//ขอบเขตจะอยู่ในFunction Scopeและในขอบเขตนั้น x จะตายไปเลยหลังจากใช้เสร็จ
console.log(x)//ส่วน x นี้ จะเปป็น Global Scope เหมือนเดิมจะไม่มีวันตาย

function deSometung() {//ในFunction Scope มันไม่มีตัวแปรอะไรใดๆ
    if(1){
        //ต่อให้มี Function Scope ซ้อนอยู่แต่ยังไงมันก็ยังมีปีกกาของมันเองเปิดปิดอยู่ดีมันก็จะยังเป็น Block Scope ของมันเอง
        let x = 555
        console.log(`x ใน Block Scope => ${x}`)
    }else console.log('It 1')
    console.log(x)//x ตัวนี้จึงไปมองหาใน Global Scope
}
deSometung()
let m = 1
//Explicit type Conversion คือ type แบบตรงตัวถ้าจะเปลี่ยนเราก็ต้องมาเปลี่ยนเอง
console.log(typeof m)

//number => String //เปลี่ยนจาก number เป็น String
console.log(typeof String(m))

//number => Boolean
console.log(typeof Boolean(m))

// if need boolean but 1 is number, so implicit conversion is called automaticallyif (1) console.log('implicit conversion is working')
if (1) console.log('implicit conversion is working')//ไอนี้คือเปลี่ยนให้เองไม่ต้องมานั่งทำเอง

let putty = [1,2,3,4,5,6]
console.log(putty[0])
let value
//console.log(value[0])//ถ้าเขียนแบบนี้จะเกิดerrorทันที
console.log(value?.[0])//ถ้าเขียนเป็น Optional chaining มันก็จะรันได้ปกติค่าที่ได้จะเป็น Undefined การใช้แบบนี้ต่อเมื่อค่าที่เราใช้นั้นมีความเสี่ยงที่จะมีค่าหรือ Undefined
let obj = {id: 5, name: 'UWU'}
console.log(obj.id)
let obj2
console.log(obj2?.id)//อันนี้คือแค่เติม ? ไปตัวเดียวพอไม่ต้องเพิ่ม . เพิ่มอีกตัว

let someone = '' // empty String 
let who
if(someone) who = 'member'// ค่าในsomeoneตอนนี้เป็น boolean เพราะการเทียบค่ามันต้องเทียบเป็น booleanซึ่ง js มันแปลงค่าจากข้างบนที่เป็นString มาเป็น booleanให้
else who = 'guest'//ซึ่งพอเทียบแล้ว empty String มีค่าเท่ากับ false ผลที่ได้มันจึงมาออกเป็น guest
who = someone ? console.log('member') : console.log('guest')
console.log(who)
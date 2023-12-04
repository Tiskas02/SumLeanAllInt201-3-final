if (undefined == null) console.log('undefinded == null');
else console.log('undefinded!=null');

if (undefined === null) console.log('undefinded == null');
else console.log('undefinded!=null');
// == do not care types but only check value
if ('2' == 2) console.log(`'2' == 2`);
else console.log(`'2' != 2`);
// === start to check data type first . if data types are not the same return false ,otherwise then check value
if ('2' === 2) console.log(`'2' === 2`);
else console.log(`'2' !== 2`);
//reccommend to use === for equaliy and !== for inequailty
// avoid to use == and !=

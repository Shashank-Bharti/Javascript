
// async function

async function returnsomething() {
  return "shashank"
}
const result = returnsomething()
console.log(result);

async function showResponse() {
  try{
  let promise = new Promise((_,rej) => rej("promise rejected"))  
  let rslt = await promise;
  console.log(rslt);}
  catch(err){
  console.log(`error: ${err}`);
  
 }}


showResponse()

const getItemData = async()=>{
  try {
    const promise = await fetch("https://fakestoreapi.com/products/2")
    const response = await promise.json();
    console.log(response);
    
  }catch(err){
  console.log(err);}
  
}

getItemData()
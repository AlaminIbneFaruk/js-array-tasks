const books=['html book','css book','javascript book','react book'];
if(books.includes('javascript book')){
  console.log('javascript book is availabe');
}else{
  console.log('It does not exists');
}
books.pop();
books.pop();
if(books.includes('javascript book')){
  console.log('javascript book is availabe');
}else{
  console.log('It does not exists');
}
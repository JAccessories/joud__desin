function search() {
  
  let searchaBar = document.querySelector('.search-field').value.toUpperCase();
  
  
  let productList = document.querySelector('.showcase-container');
  
 let product = document.querySelectorAll('.showcase');
 
 let productName = document.getElementsByTagName('h2');
 
 
 
 for (let i = 0; i<productName.length; i++) {
  if (productName[i].innerHTML.toUpperCase().indexOf(searchaBar) > 0) {
    product[i].style.display = "";
  } else {
    
    product[i].style.display = "none";
    
  }
  
  
  
 }
 
 
}
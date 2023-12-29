// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    //TODO
    const response = await fetch ('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
}
  );
}


export function fetchProductsByFilters({filter,sort}) {

  //TODO
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastcategoryValue = categoryValues[categoryValues.length-1];
      queryString+=`${key}=${lastcategoryValue}&`
    }
  }

  for(let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }

  return new Promise(async(resolve) =>{
    const response = await fetch ('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
}
  );
}


export function fetchProductsBySorting(sort) {
  return new Promise(async(resolve) =>{
    //TODO
    let queryString = '';
    console.log(sort);
    
    for(let key in sort){
      queryString+=`${key}=${sort[key]}&`;
    }

    const response = await fetch ('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
}
  );
}
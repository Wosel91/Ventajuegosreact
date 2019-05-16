
export default class Petrestfull {
// export const Petrestfull = () => {
    //-----------PRODUCTOS ---------------------------------------------
//   nuevoProducto(nuevoProducto){
//     let params = JSON.stringify(nuevoProducto);
//     let header = new HttpHeaders().set('Content-Type','application/json');

//     return this._http.post(this.url + "api/apiProductos/nuevoProducto",params,{headers: header} );
//   }  

//   subirimagen(fileToUpload: File){
//       // multipart/form-data
    
//     const formData: FormData = new FormData();
//     formData.append('file', fileToUpload);
//     // let header = new HttpHeaders().set('Content-Type','multipart/form-data');
//     return this._http.post(this.url + "api/apiProductos/nuevaImagen", formData);  
//   }


  
//   mostrarProductos():Observable<Product[]>{

//     // return this._http.get<Array<Product>>(this.url + "api/mostrarProductos" );
//     let header = new HttpHeaders().set('Content-Type','application/json');
//     return this._http.get<Product[]>(this.url + "api/apiProductos/mostrarProductos" ,{headers: header});
// }
 mostrarProductosmain(){
     return fetch('http://localhost:3000/api/apiProductos/mostrarProductosmain')
    
}
//  mostrarUnProducto(id:string):Observable<Product>{

//   let header = new HttpHeaders().set('Content-Type','application/json');
//   return this._http.get<Product>(this.url + "api/apiProductos/mostrarProductos/" + id ,{headers: header});
// }

//  mostrarProductosbusqueda(parametrosabuscar:string, sort:string, categorias:Array<string>, plataformas:Array<string>):Observable<Product[]>{
//   let params = JSON.stringify({
//     parametrosabuscar: parametrosabuscar,
//     sort: sort,
//     categorias: categorias,
//     plataformas: plataformas
//   })
//   console.log(params)
//   let header = new HttpHeaders().set('Content-Type','application/json');
//   return this._http.post<Product[]>(this.url + "api/apiProductos/mostrarproductosbusqueda" ,params,{headers: header});
// }
}

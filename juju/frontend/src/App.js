import data from "./data";


function App() {
  return (
    <div>
      <header>
        <a href="/">Juju</a>
      </header>
      <main>
      <h1>Featured Products</h1>
        <div className="products">
              {
                data.products.map(product => (
                  <div key={product.id} className="product">
                      <a href={`/product/${product.id}`}> 
                        <img src={product.image} alt={product.name} />
                        </a>
                         <div className="product-info">
                            <p>{product.name}</p>
                            <p>{product.price}</p> 
                        </div>
                  </div>
                ))
              }
          </div>
      </main>
    </div>  
  );
}

export default App;

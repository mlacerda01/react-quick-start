const products = [
    {title: "Cabbage", id: 1, isFruit: false},
    {title: "Garlic", id: 2, isFruit: false},
    {title: "Apple", id: 3, isFruit: true}
]

const listItens = products.map(product => 
    <li key={product.id}
        style={{color: product.isFruit ? 'magenta' : 'darkgreen', listStyleType:"none"}}
    >
        {product.title}
    </li>
)

console.log(listItens)

export default function ProductList(){
    return(


        <div>

            <ul>
                {listItens}
            </ul>
        </div>
    )
}
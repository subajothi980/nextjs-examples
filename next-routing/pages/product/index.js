import Link from 'next/link'

export default function Product() {
    return (
        <>
            <h2>
                <Link  href="/">
                Home Page
                </Link>
            </h2> 
            <h4>
                <Link  href="/product/1">
                Product 1
                </Link>
            </h4>                
            <h4><Link  href="/product/2">Product 2</Link></h4>
            <h4><Link  href="/product/3">Product 3</Link></h4>
            <h4>.</h4>
            <h4>.</h4>
            <h4>.</h4>
            <h4><Link  href="/product/100" replace>Product 100</Link></h4>
            <h4><Link  href="/product/sweater">Product Sweater</Link></h4>
            <h4><Link  href="/product/pjs">Product PJs</Link></h4>
        </>
    )
}
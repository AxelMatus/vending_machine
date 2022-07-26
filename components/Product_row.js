import Image from 'next/image'

export default function Product_row (props) {
    return(
        <div className="flex p-4">
            { props.products.map((product) => {
                return (
                <div key={product.id} className={'w-1/4 font-bebasNeue text-white text-center text-2xl'}>
                    <p> {`COD ${product.code}`}</p>
                    <Image width={product.img_width} height={product.img_height} src={product.img_src} alt={product.img_alt}/>
                    <p>{`X${product.quantity}`}</p>
                    <p>{`₡${product.price}`}</p>
                </div>);
            })}
        </div>
    );
}
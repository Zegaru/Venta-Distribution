import { useEffect, useState } from 'react';

import PaginationApi from '../../utils/paginationApi';

import OutlineButton from '../../components/OutlineButton';
import CustomCheckbox from '../../components/CustomCheckbox';

const ABV_OPTIONS = ['3 - 5', '5 - 7', '7 - 10'];

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Filters
  const [abvFilter, setAbvFilter] = useState('');

  // Pagination
  const [page, setPage] = useState(1);

  const amountPerPage = 12;

  const productsApi = new PaginationApi('/beers', amountPerPage);

  useEffect(() => {
    getProducts(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPage(1);
    getProducts(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abvFilter]);

  let getProducts = async (reset) => {
    setLoading(true);
    let result = await productsApi.getContent(page, {
      abv: abvFilter,
    });
    if (!result.success) {
      setLoading(false);
    }
    if (reset) setProducts(result.data);
    else setProducts([...products, ...result.data]);
    setLoading(false);
  };

  return (
    <div className="mb-12">
      <div className="px-6 py-6 text-center sm:px-12">
        <div className="flex items-center justify-center my-4 space-x-4">
          <span className="text-lg font-light border-b-[1px] border-primary cursor-pointer">
            HOME
          </span>
          <div className="h-[4px] w-[4px] bg-gray-400 transform rotate-45"></div>
          <span className="text-lg text-gray-400 font-light hover:border-b-[1px] border-primary cursor-pointer">
            CATALOG
          </span>
        </div>
        <span className="text-5xl font-light font-journalism">HOME</span>
      </div>
      <div className="mx-auto max-w-[1140px] py-8 mb-8 sm:px-6 xl:px-0">
        <div className="mx-4 sm:space-x-6 sm:flex sm:mx-0">
          <div className="text-center xl:w-1/4">
            <div className="p-8 bg-white shadow-sm border-gray-filter border-[1px] h-[fit-content] text-left">
              <p className="text-4xl font-journalism">Filter</p>
              <div className="mt-6">
                <p className="text-xl">ABV</p>
                <div className="mt-2 space-y-4">
                  {ABV_OPTIONS.map((option) => (
                    <CustomCheckbox
                      key={option}
                      content={option}
                      isChecked={abvFilter === option}
                      onToggle={() => {
                        setAbvFilter(option);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button
              className="flex items-center mx-auto mt-4 text-lg text-gray-300 cursor-pointer hover:text-primary"
              onClick={() => {
                setAbvFilter('');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              RESET FILTER
            </button>
          </div>
          <div className="mt-8 xl:w-3/4 sm:mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products !== null && products.length > 0 ? (
                products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              ) : (
                <p>No se encontraron resultados</p>
              )}
            </div>
            <OutlineButton
              className="w-full mx-auto mt-12 font-light sm:w-1/2 xl:1/3 font-journalism"
              isLoading={loading}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              SHOW MORE
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="relative group border-gray-filter border-[1px] bg-white shadow-sm hover:shadow-xl duration-150 transition-all cursor-pointer p-8 text-center flex flex-col items-center">
      <p className="font-sm text-primary">Beer</p>
      <p className="max-w-full mt-2 text-4xl truncate font-journalism">
        {product.name}
      </p>
      <img
        src={product.image_url}
        className="h-48 max-w-full my-3"
        alt="Product"
      />
      <span className="text-2xl font-bold tracking-widest text-primary">
        ₽ 2400
      </span>
      <span className="ml-2 text-sm text-gray-300 line-through"> 3200 </span>
      <p className="mb-6 text-sm text-gray-400">
        {product.volume.value} {product.volume.unit}
      </p>
      <button className="absolute z-10 p-4 text-white transition-all rounded-full opacity-0 -bottom-8 bg-primary group-hover:opacity-100 hover:bg-white hover:text-primary border-[1px] border-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </button>
    </div>
  );
}

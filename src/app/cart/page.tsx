import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product Section */}
          <div className="border-2 p-4">
            <h1 className="text-lg font-semibold">Product</h1>
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <img
                  src="/images/Product Image.png"
                  alt="Product 1"
                  className="w-20 h-20 sm:w-28 sm:h-28"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">
                    Graystone vase
                  </h1>
                  <p className="text-sm mt-2">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold sm:hidden lg:block">
                  Quantity
                </h1>
                <p className="mt-2 text-lg font-medium">1</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <img
                  src="/images/Product Image 2.png"
                  alt="Product 2"
                  className="w-20 h-20 sm:w-28 sm:h-28"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">
                    Basic white vase
                  </h1>
                  <p className="text-sm mt-2">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold sm:hidden lg:block">
                  Quantity
                </h1>
                <p className="mt-2 text-lg font-medium">1</p>
              </div>
            </div>
          </div>

          {/* Total Section (Hidden on Small Screens) */}
          <div className="border-2 p-4 sm:hidden lg:block">
            <h1 className="text-lg font-semibold">Total</h1>
            <p className="mt-10 text-lg font-medium">£85</p>
            <p className="mt-40 text-lg font-medium">£85</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">
            Subtotal
          </h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
          <p className="text-sm mt-4">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
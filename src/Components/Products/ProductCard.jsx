import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { img, product_name, price, rating } = product;

  // Function to generate an array of rating inputs based on the product's rating
  const renderRatingInputs = () => {
    const ratingInputs = [];
    // Loop through each possible rating
    for (let i = 1; i <= 5; i++) {
      // Check if the current rating is less than or equal to the product's rating
      const isChecked = i <= Math.round(parseFloat(rating)); // Convert rating to a number and round it
      ratingInputs.push(
        <input
          key={i}
          type="radio"
          name={`rating-${product_name}`} // Use a unique name for each product's rating
          className="mask mask-star-2 bg-orange-400"
          checked={isChecked}
          readOnly // Make the inputs readonly to prevent user interaction
        />
      );
    }
    return ratingInputs;
  };
console.log(renderRatingInputs());
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 bg-[#F3F3F3]">
          <img src={img} alt="service_image" className="rounded-xl h-52" />
        </figure>
        <div className="card-body text-center">
          <div className="rating flex justify-center">
            {renderRatingInputs()}
          </div>
          <h2 className="card-title text-[#444444] font-bold flex justify-center">
            {product_name}
          </h2>
          <div className="card-actions">
            <p className="text-[#FF3811] font-bold">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;

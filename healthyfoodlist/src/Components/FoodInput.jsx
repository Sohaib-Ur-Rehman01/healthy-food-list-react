import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Here "
      className={styles.foodInp}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;

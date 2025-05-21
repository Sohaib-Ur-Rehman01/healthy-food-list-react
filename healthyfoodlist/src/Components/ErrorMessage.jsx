const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h2>I am still Hungry</h2> : null}</>;
};
export default ErrorMessage;

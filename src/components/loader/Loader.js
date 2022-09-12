import loader from './Loader.module.css';

const Loader = () => {
  return (
    <svg className={loader.spinner} viewBox="0 0 50 50">
      <circle
        className={loader.path}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};

export default Loader;

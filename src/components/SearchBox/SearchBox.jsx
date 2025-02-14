import { Field, Formik } from "formik";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <Formik>
        <label className={s.label}>
          <span>Find contacts by name</span>
          <Field className={s.input} onChange={handleChange} type="text" />
        </label>
      </Formik>
    </div>
  );
};

export default SearchBox;

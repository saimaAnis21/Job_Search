import PropTypes from 'prop-types';

function FilterDropDown(props) {
  const { options, name, changeFilter } = props;

  return (
    <div>
      <p>
        {name}
      </p>
      <select onChange={(e) => changeFilter(name, e.target.value)}>
        {options.map((opt) => (
          <option
            key={opt.id}
            value={opt.name}
          >
            {opt.name}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}

FilterDropDown.propTypes = {
  options: PropTypes.objectOf.isRequired,
  name: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default FilterDropDown;

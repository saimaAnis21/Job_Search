import PropTypes, { string } from 'prop-types';

function FilterDropDown(props) {
  const { options, name } = props;
  return (
    <div>
      <p>
        {name}
      </p>
      <select>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
        ;
      </select>
    </div>
  );
}

FilterDropDown.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterDropDown;

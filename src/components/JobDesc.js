import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles.css';

const JobDesc = (props) => {
  const { info } = props;

  return (
    <div className="job p-10">

      <Link to={{
        pathname: `/Job/${info.id}`,
        state: {
          info,
        },
      }}
      >
        {' '}
        <span className="royalblue ">{info.company}</span>
      </Link>
      {info.name}

    </div>
  );
};

JobDesc.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

};

export default JobDesc;

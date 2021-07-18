import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles.css';

function JobDesc(props) {
  const { info } = props;

  return (
    <div className="job p-10">

      <Link to={{
        pathname: '/Job',
        state: {
          info,
        },
      }}
      >

        <span className="royalblue ">{info.company}</span>

      </Link>

      {info.name}
      {info.levels.map((level) => (<p key={level}>{level}</p>))}

    </div>
  );
}

JobDesc.propTypes = {
  info: PropTypes.objectOf.isRequired,

};

export default JobDesc;

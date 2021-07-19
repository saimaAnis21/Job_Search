import { Link, useLocation } from 'react-router-dom';
import '../styles.css';

import { Markup } from 'interweave';

const Job = () => {
  const location = useLocation();
  const { info } = location.state;

  return (
    <div className="job-detail">
      <Link to="/">HOME</Link>
      <h1 className="royalblue">{info.company}</h1>
      <span className="apply-btn"><a href={info.site} className="p-10"> Click here to apply</a></span>
      <h3>{info.name}</h3>
      <Markup content={info.content} />

    </div>
  );
};

export default Job;

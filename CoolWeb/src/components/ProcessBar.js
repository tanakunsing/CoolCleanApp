import ProgressBar from 'react-bootstrap/ProgressBar';

function ProcessBar({ now }) {

  return <ProgressBar now={now} label={`${now}%`} />;
}

export default ProcessBar;
import { Spinner } from 'reactstrap';

const Loading = () => (
    <div className="d-flex mb-4" style={{ justifyContent: 'space-between' }}>
        <p>Loading...</p>
        <Spinner color="danger" />
    </div>
);
export default Loading;

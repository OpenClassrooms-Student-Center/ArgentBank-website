import FormEdit from "../../containers/FormEdit/FormEdit";
import './UserEdit.css';
import { useSelector } from 'react-redux';

const UserEdit = () => {

    const { userProfile } = useSelector((state) => state.auth);

    return (
        <div>
            <main className="main bg-dark">
                <FormEdit userProfile={userProfile} />
            </main>
        </div>
    );
};

export default UserEdit;
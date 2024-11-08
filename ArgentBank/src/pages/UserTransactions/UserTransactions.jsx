import Collapse from '../../components/Collapse/Collapse';
import AccountOverview from './../../containers/AccountOverview/AccountOverview';

// ce composant n'est pas encore fonctionnel, il est codé de manière "préparatoire" uniquement

const UserTransactions = () => {
    return (
        <div>
            <main className="main bg-dark">
                <AccountOverview
                    accountTitle="Argent Bank Checking (x8349)"
                    accountAmount="$2,082.79"
                    accountAmountDescr="Available Balance"
                />
                <Collapse></Collapse>
            </main>
        </div>
    );
};

export default UserTransactions;
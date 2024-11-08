import './Collapse.css';

// ce composant n'est pas encore fonctionnel, il est codé de manière "préparatoire" uniquement

const Collapse = () => {
    return (
        <div>
            <section className="account collapse">
                <div className="transaction-collapse">
                    <p className="transaction-date">date</p>
                    <p className="transaction-decription">description</p>
                    <p className="transaction-amount">montant</p>
                    <p className="transaction-balance">balance</p>
                    <div><i className="fa-solid fa-chevron-up"></i></div>

                    <div className="type">Transaction type :</div>
                    <div className="category">Category</div>
                    <div className="note">Note :</div>
                    <div className="chosen-type">example : Electronic</div>
                    <div className="chosen-category">example : Food <i className="fa-solid fa-pencil"></i></div>
                    <div className="chosen-note">example : test <i className="fa-solid fa-pencil"></i></div>

                </div>
            </section>
        </div>
    );
};

export default Collapse;
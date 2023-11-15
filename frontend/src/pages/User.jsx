import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions/UserActions';

const User = ({ isAuth, user, fetchUserData }) => {

    const firstName = 'Stark';
    const lastName = 'Tony';
    const UserName = 'Jarvis';
    return (
        <main class="main bg-dark">
            <div class="header">
                {/* Si Username est null alors mettre le Firstname */}
                <h1>Welcome back<br />{lastName} {UserName? (UserName):(firstName)}!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                <p class="account-amount">$2,082.79</p>
                <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                <p class="account-amount">$10,928.42</p>
                <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                <p class="account-amount">$184.30</p>
                <p class="account-amount-description">Current Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
      </main>
    );
};

export default User;
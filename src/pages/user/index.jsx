import Account from "../../components/Account"

export default function Home() {
    return (
      <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account/>
        <Account/>
        <Account/>
      </main>
    )
  }
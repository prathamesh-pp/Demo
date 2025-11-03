// src/app/page.js
export default function Home() {
  return (
    <>
      <section className="card">
        <h1 className="text-2xl font-semibold">Welcome to the Demo</h1>
        <p className="muted">This is a minimal UI refresh — color variables, transitions, and dark mode toggle.</p>
      </section>

      <section className="grid-cards" aria-label="Demo cards">
        <div className="card hover-lift">
          <h3 className="font-semibold">Recent Post</h3>
          <p className="muted">A short description with the new theme variables.</p>
          <div style={{marginTop: "8px"}}>
            <button className="btn btn-primary">Action</button>
          </div>
        </div>

        <div className="card hover-lift">
          <h3 className="font-semibold">Profile</h3>
          <p className="muted">Profile card shows the panel background and text color mapping.</p>
        </div>

        <div className="card hover-lift">
          <h3 className="font-semibold">Settings</h3>
          <p className="muted">Dark mode persists across reloads via localStorage.</p>
        </div>
      </section>
    </>
  );
}

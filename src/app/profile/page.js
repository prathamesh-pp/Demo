// src/app/profile/page.js
export default function Profile() {
  return (
    <section className="container mt-4">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <div className="card">
        <h3 className="font-semibold text-[var(--color-brand-500)]">Prathamesh PP</h3>
        <p className="muted">Software Developer | Next.js Enthusiast</p>
        <div className="mt-3">
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </section>
  );
}

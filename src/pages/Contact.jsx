export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Your autumn message has been sent 🍂');
    e.currentTarget.reset();
  };

  return (
    <section className="py-5 bg-autumn-soft section-fill">
      <div className="container" style={{ maxWidth: 800 }}>
        <h1 className="mb-4 text-autumn-900">Get in Touch</h1>
        <p className="lead text-autumn-700">Feel free to reach out using the form below.</p>

        <form id="contactForm" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required />
          </div>
          <button type="submit" className="btn btn-autumn btn-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}

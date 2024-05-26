export default function NewsLetter() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="lg:px-20 md:px-10 sm:px-5  ">
      <div className="newsletter-bx    grid md:grid-cols-2 grid-cols-1">
        <h3>Subscribe to my newsletter</h3>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="new-email-bx">
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

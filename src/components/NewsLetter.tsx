export default function NewsLetter() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className=" md:px-14 lg:px-[105px] px-5 sm:px-5 4k:max-w-8xl mx-auto  ">
      <div className="newsletter-bx    grid md:grid-cols-2 grid-cols-1">
        <h3 className="text-base md:text-3xl">Subscribe to my newsletter</h3>
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

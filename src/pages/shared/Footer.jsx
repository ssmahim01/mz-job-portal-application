import jobLogo from "/src/assets/job-logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <figure className="w-14 h-14">
          <img className="w-full h-full" src={jobLogo} alt="MZ Job Portal" />
        </figure>
        <p className="text-gray-800 font-bold">
          MZ Job Portal Ltd.
          <br />
          Providing reliable job since 2012
        </p>
      </aside>
      <nav className="*:font-semibold">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Posted Jobs</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="*:font-semibold">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Application</a>
        <a className="link link-hover">Job Place</a>
        <a className="link link-hover">Work Giver</a>
        <a className="link link-hover">Skills Worker</a>
      </nav>
      <form>
        <h6 className="footer-title">Subscribe Now</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text font-bold">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered join-item"
            />
            <button className="btn btn-secondary text-white font-bold join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;

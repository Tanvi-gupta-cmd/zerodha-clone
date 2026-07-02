import "../styles/Home.css";

function Education() {
  return (
    <section className="education" id="support" data-aos="fade-right">

      <div className="education-left">
        <h2>Free and Open Market Education</h2>

        <p>
          Learn stock market investing through our completely free
          educational platform. Whether you're a beginner or an experienced
          trader, you'll find valuable content to improve your skills.
        </p>

        <button className="education-btn">
          Explore Varsity
        </button>
      </div>

      <div className="education-right">
  <img
    src="/assets/education.png"
    alt="Education"
    className="img-fluid"
    style={{
      maxWidth: "500px",
      width: "100%"
    }}
  />
</div>

    </section>
  );
}

export default Education;
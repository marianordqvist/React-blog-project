import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer" aria-label="Website footer">
        <div className="heads">
          <p className="head" style={{ marginTop: "20px" }}>
            Collaborators
          </p>
          <p
            className="head"
            style={{ marginTop: "20px" }}
            aria-label="Collaborators"
          ></p>

          <a
            className="link head"
            href="https://hyperisland.com/"
            target="_blank"
            aria-label="Link to Hyper islands website"
          >
            HYPER ISLAND
          </a>
        </div>
        <div className="headSect2">
          <div className="names">
            <div className="first2">
              <p aria-label="Niklas Wallenborg">Niklas Wallenborg</p>
              <p aria-label="Setayesh Nouri">Setayesh Nouri</p>
              <p aria-label="Maria Nordqvist">Maria Nordqvist</p>
            </div>
            <div className="last2">
              <p aria-label="Hifza Batool">Hifza Batool</p>
              <p aria-label="Samuel Abraham">Samuel Abraham</p>
            </div>{" "}
          </div>
          <p className="hyper" aria-label="Hyper Island address">
            Virkesvägen 2, 120 30
          </p>
        </div>
        <div className="hyper2">
          <a
            className="link2"
            href="https://hyperisland.com/"
            target="_blank"
            aria-label="Link to Hyper islands website"
          >
            HYPER ISLAND
          </a>
          <p aria-label="Hyper Island address">Virkesvägen 2, 120 30</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

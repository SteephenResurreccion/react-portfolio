// src/pages/Portfolio.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Portfolio() {
  // tag the body so your CSS can scope if needed
  useEffect(() => {
    const prev = document.body.getAttribute("data-page");
    document.body.setAttribute("data-page", "portfolio");
    return () => {
      if (prev) document.body.setAttribute("data-page", prev);
      else document.body.removeAttribute("data-page");
    };
  }, []);

  // gradient color control
  const sectionRef = useRef(null);
  const colors = useMemo(
    () => [
      "#fde68a", "#bbf7d0", "#bfdbfe", "#fecaca", "#f5d0fe",
      "#fef3c7", "#d1fae5", "#c7d2fe", "#fee2e2", "#fbcfe8",
    ],
    []
  );
  const randomizeBg = () => {
    const el = sectionRef.current;
    if (!el) return;
    const c = colors[Math.floor(Math.random() * colors.length)];
    el.style.setProperty("--bg-end", c);
  };

  // tiles
  const tiles = useMemo(
    () => [
      {
        ratio: "short",
        title: "CCTV Home Response System",
        desc:
          "An IoT project that aims to alert homeowners of suspicious activities or trespassers using a boundary system. Powered by YOLOv5n and OpenCV.",
        img:
          "https://allsecurityequipment.com/cdn/shop/articles/cctv_camera_installation.jpg?v=1729284382",
      },
      {
        ratio: "medium",
        title: "Song Recommender (WiP)",
        desc:
          "Web program that uses Spotify's Spotipy API to gather data and find songs similar to the ones you listen to, using a simple fuzzy algorithm and AI searching. Discontinued due to Spotipy's rate limit update as of June 16, 2025.",
        img:
          "https://miro.medium.com/v2/resize:fit:1200/0*QvRphF60YJbucc7B.png",
      },
      {
        ratio: "tall",
        title: "Aztup Hub",
        desc:
          "Paid Script Hub GUI for popular Roblox games. Discontinued.",
        img:
          "https://6835b446.delivery.rocketcdn.me/wp-content/uploads/2024/01/synapse.jpg",
      },
    ],
    []
  );

  // simple stagger on mount
  useEffect(() => {
    const prefersReduced =
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) || false;

    const items = Array.from(document.querySelectorAll(".project-tile"));
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
      const delay = prefersReduced ? 0 : 120 * i;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  // tiny React modal (no Bootstrap JS)
  const [modal, setModal] = useState({
    open: false,
    title: "",
    desc: "",
    img: "",
  });

  const openModal = (tile) =>
    setModal({ open: true, title: tile.title, desc: tile.desc, img: tile.img });
  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  useEffect(() => {
    if (!modal.open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modal.open]);

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="portfolio-full">
        <div className="container text-center portfolio-header">
          <p className="lead">A few of my creative endeavors.</p>
          <h2 className="portfolio-header">
            Curious to{" "}
            <button
              id="seeTrigger"
              type="button"
              className="highlight-word"
              style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}
              onClick={randomizeBg}
            >
              see
            </button>{" "}
            my work?
          </h2>
        </div>

        <div className="container">
          <div className="row justify-content-center g-4">
            {tiles.map((t) => (
              <div key={t.title} className="col-md-3 col-sm-6">
                <a
                  href="#"
                  className="project-tile"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(t);
                  }}
                >
                  <div className={`tile-media ratio-${t.ratio}`}>
                    <img src={t.img} alt={t.title} />
                  </div>
                  <div className="tile-vignette" />
                  <div className="tile-title">{t.title}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modal.open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed-top"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.6)",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={closeModal}
        >
          <div
            className="modal-imgcard"
            style={{ maxWidth: "min(1000px, 86vw)", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="btn-close btn-close-white modal-close"
              onClick={closeModal}
            />
            <figure className="modal-figure">
              <img src={modal.img} alt={modal.title} />
              <div className="modal-vignette" />
              <figcaption className="modal-caption">
                <h3
                  id="modalTitle"
                  className="mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={randomizeBg}
                >
                  {modal.title}
                </h3>
                <p id="modalDesc" className="mb-0">
                  {modal.desc}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  );
}

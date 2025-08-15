import { useEffect } from 'react';

export default function ImageModal({ open, onClose, item }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: 'rgba(0,0,0,.6)', zIndex: 1050, padding: 12 }}
      onClick={onClose}
    >
      <div
        className="modal-content modal-imgcard"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(1000px, 86vw)' }}
      >
        <button type="button" className="btn-close btn-close-white modal-close" aria-label="Close" onClick={onClose} />
        <figure className="modal-figure">
          <img src={item.img} alt={item.title} />
          <div className="modal-vignette"></div>
          <figcaption className="modal-caption">
            <h3 className="mb-2" onClick={item.onTitleClick}>{item.title}</h3>
            <p className="mb-0">{item.desc}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

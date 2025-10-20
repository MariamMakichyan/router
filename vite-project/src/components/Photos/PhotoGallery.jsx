import GalleryCards from "./GalleryCard/GalleryCards";

import "./PhotoGallery.css";

function PhotoGallery({ photos }) {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">🖼️ Photo Gallery</h1>
      <div className="gallery-grid">
        <GalleryCards photos={photos} />
      </div>
    </div>
  );
}

export default PhotoGallery;

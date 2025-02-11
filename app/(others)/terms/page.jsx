import React from 'react';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', fontSize: 16 }}>
      <header className="header" style={{ backgroundColor: '#333', color: '#fff', padding: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Header</h1>
      </header>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <div className="grid-item" style={{ backgroundColor: '#f0f0f0', padding: 20 }}>Grid Item 1</div>
        <div className="grid-item" style={{ backgroundColor: '#f0f0f0', padding: 20 }}>Grid Item 2</div>
        <div className="grid-item" style={{ backgroundColor: '#f0f0f0', padding: 20 }}>Grid Item 3</div>
        <div className="grid-item" style={{ backgroundColor: '#f0f0f0', padding: 20 }}>Grid Item 4</div>
        <div className="grid-item" style={{ backgroundColor: '#f0f0f0', padding: 20 }}>Grid Item 5</div>
        <div className="grid-item" style={{ backgroundColor: '#f0f0f0', padding: 20 }}>Grid Item 6</div>
      </div>
      <section className="section" style={{ padding: 40 }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', height: '100vh' }}>
          <div className="row" style={{ display: 'flex', justifyContent: 'space-between',justifyItems:'flex-start' }}>
            <div className="col-md-8" style={{ flexBasis: '60%' }}>
              <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Non-Sticky Column</h2>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Additional content to make the section longer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>More content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Even more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              
              <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Non-Sticky Column</h2>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Additional content to make the section longer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>More content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Even more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              
              <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Non-Sticky Column</h2>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Additional content to make the section longer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>More content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Even more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>And even more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
            <div className="col-md-4 sticky-column" style={{ flexBasis: '40%', position: 'sticky', top: 0, backgroundColor: '#f0f0f0', padding: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Sticky Column</h2>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer" style={{ backgroundColor: '#333', color: '#fff', padding: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
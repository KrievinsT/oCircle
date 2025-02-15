import React from 'react';
import './Resources.scss';
import computingImage from '../../assets/computing.png';
import footballImage from '../../assets/football.png';
import staringImage from '../../assets/staring.png';

const Resources = () => {
  const resourceCards = [
    {
      image: computingImage,
      title: 'Excepteur sint occaecat cupidatat non proident',
      paragraphs: [
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
      ]
    },
    {
      image: footballImage,
      title: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam',
      paragraphs: [
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
        'nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit'
      ]
    },
    {
      image: staringImage,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      paragraphs: [
        'Couptatem accusantium doloremque laudantium, totam rem aperiam',
        'Aeque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      ]
    }
  ];

  return (
    <section className="resources">
      <div className="resources__container">
        <header className="resources__header">
          <span className="resources__label">RESOURCES</span>
          <h2 className="resources__title">Stay in the know</h2>
        </header>
        
        <div className="resources__cards">
          {resourceCards.map((card, index) => (
            <article key={index} className="resources__card">
              <figure className="resources__card-image">
                <img 
                  src={card.image} 
                  alt="" 
                  loading="lazy"
                />
              </figure>
              <div className="resources__card-content">
                <h3 className="resources__card-title">
                  {card.title}
                </h3>
                <div className="resources__card-text">
                  {card.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="resources__card-description">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button 
                  type="button" 
                  className="resources__card-button"
                  aria-label="Read more"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
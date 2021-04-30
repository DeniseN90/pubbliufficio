import React from "react";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";

const images = [
  {
    original:
      "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/paper.jpg",
  },
  {
    original:
      "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/paper2.jpg",
  },
  {
    original:
      "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/particolare-calendario.jpg",
  },
];

const contents = [
    {
      title: 'Spiralatura',
      description: 'Siamo specializzati nella rilegatura a spirale di qualsiasi articolo, calendari da tavolo, calendari da muro con gancetto, quaderni, blocchi, planning',
      image: "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/dorsetti.jpg"
    },
    {
      title: 'Allestimento',
      description: 'Eseguiamo anche lavoro di allestimento su calendari, blocchi e qualsiasi altro articolo che lo richiede',
      image: "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/libro-ministero.jpg"
    },
    {
      title: 'Foratura',
      description: 'Utilizziamo Foratrici Rilecart F-500 per bucare gli articoli e prepararli poi infine alla rilegatura',
      image: "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/rilegatrice.jpg"
  
    }
  ];
  

const renderHomeContents = () => {
  const contentsList = contents.map((content, index) => <HomeCard key={index} content={content} />);
  return (
    <div className="col-12">
      {contentsList}
    </div>
  )
};

function Home() {
  const isMobile = useSelector((state) => state.isMobile);

  return (
    <div className={isMobile ? "" : "container"}>
      <div className={isMobile ? "" : "mb-4"}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          autoPlay={true}
          showPlayButton={false}
        />
      </div>

      <div className="row Main">
        {renderHomeContents()}
      </div>
    </div>
  );
}

export default Home;

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
      "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/particolare-calendario.jpg"
  },
];


  



function Home() {
  const isMobile = useSelector((state) => state.isMobile);
  require('dotenv').config();
  console.log(process.env);

  const renderHomeContents = () => {
    const homeContent = isMobile ? mobileContents : desktopContents;
    const contentsList = homeContent.map((content, index) => <HomeCard key={index} content={content} reverse={(index%2) !== 0}/>);
    return (
      <div className="col-12">
        {contentsList}
      </div>
    )
  };
  
  const mobileContents = [
    {
      title: 'Spiralatura',
      description: 'Siamo specializzati nella rilegatura a spirale di qualsiasi articolo, calendari da tavolo, calendari da muro con gancetto, quaderni, blocchi, planning',
      image: "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/dorsetti-opaca.jpg"
    },
    {
      title: 'Allestimento',
      description: 'Eseguiamo anche lavoro di allestimento su calendari, blocchi e qualsiasi altro articolo che lo richiede',
      image: "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/libro-ministero-opaca.jpg"
    },
    {
      title: 'Foratura',
      description: 'Utilizziamo Foratrici Rilecart F-500 per bucare gli articoli e prepararli poi infine alla rilegatura',
      image: "https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/rilegatrice-opaca.jpg"
  
    }
  ];
  
  const desktopContents = [
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

  return (
    <div className={isMobile ? "" : "container Home-page"}>
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

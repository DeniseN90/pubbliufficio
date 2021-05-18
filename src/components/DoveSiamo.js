import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function DoveSiamo() {
  const isMobile = useSelector((state) => state.isMobile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1800);
  }, []);

  return (
    <div className="container-fluid Main-page text-center">
      <div className="row">
        <div className="col">
          <h3>Dove siamo</h3>
          <p>Via Pezze di Ninfa 13, Cori (LT)</p>
          <p>Contatti:</p>
          <p>
            Telefono:&nbsp;<a href="tel:0039069677116">069677116</a>
          </p>
          <p>
            Cellulare:<a href="tel:00393382681254">&nbsp;338 2681254</a>
          </p>
          <p>
            Email:&nbsp;
            <a href="mailto:info@pubbliufficio.com">info@pubbliufficio.com</a>
          </p>
        </div>
        {!isMobile && (
          <div className="col Map">
            {isLoading && (
              <Loader
                type="TailSpin"
                color="#ae43d1"
                height={100}
                width={100}
              ></Loader>
            )}
            {!isLoading && (
              <iframe
                title="pubblufficio-map"
                src="https://maps.google.com/maps?q=via%20pezze%20di%20ninfa%2013,%20Cori&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            )}
          </div>
        )}
      </div>
      {isMobile && (
        <div className="col Map">
          {isLoading && (
            <Loader
              type="TailSpin"
              color="#ae43d1"
              height={100}
              width={100}
            ></Loader>
          )}
          {!isLoading && (
            <iframe
              title="pubblufficio-map"
              src="https://maps.google.com/maps?q=via%20pezze%20di%20ninfa%2013,%20Cori&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
}

export default DoveSiamo;

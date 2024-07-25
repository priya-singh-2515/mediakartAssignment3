import React, { useEffect, useRef } from 'react';

const AdComponent = () => {
  const tharRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tharRef.current) {
        const scrollPosition = window.scrollY;
        tharRef.current.style.transform = `translateX(${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="ad-container">
      <img ref={tharRef} src="../img/thar2.jpeg" alt="Thar" className="thar-image" />
      <div className="ad-text">
        <h1>Ford to boost profit-rich U.S. large SUV production again</h1>
        <p>
        DETROIT (Reuters) - Ford Motor Co (F.N) said it will boost U.S. production of its largest sport utility vehicles in a move to grab profits in a market where consumers favor larger, more comfortable vehicles.
        </p>
        <p>
        Ford’s Kentucky Truck plant in Louisville will increase the production rate for Ford Expedition and Lincoln Navigator sport utility vehicles by 20 percent - the second 20 percent increase in a year for both models, executives said during a media.
        </p>
        <p>
        You may have heard the news that Ford plans to pare down the product line in the coming years, shedding low-selling sedans and unprofitable small cars, so there’s no better time to take a look through the offerings, particularly if you plan to shop for a new vehicle in the coming months.
        </p>
        <p>
        This ranking of Ford’s current vehicles is based on the U.S. News scoring methodology, which awards points in the categories that matter most to new vehicle buyers, and assigns an overall score to each vehicle.
        </p>
        <p>
        The move highlights Detroit automakers’ aggressive efforts to capitalize on popular, profitable large vehicles in America’s heartland, even as policymakers in California, China and Europe push for smaller, electric vehicles to reduce carbon dioxide emissions linked to climate change.
        </p>
        <p>
        While Ford can proudly claim rights to creating the very first SUV ever, the Model T Depot Hack back, they can also claim to be proudly producing the best SUVs on the road today. Equipped with all the cargo space, passenger room and power needed to transport you and your loved ones to the ski slopes, the lake or college dorms, Ford has been outfitting American consumers with the proper vehicles to take them everywhere they need to go.
        </p>
        <p>
        In today’s market, Ford offers 8 choices of SUV’s and crossovers. With rumors that the Bronco is to make a return, fans are rushing to Irwin Ford dealers to see if it’s true. You won’t need to look any further than Irwin Ford NH to check out the latest and greatest of Ford SUV’s. Trust the name that has built America’s SUV brand and automotive industry.
        </p>
        <p>
        With gasoline relatively cheap, U.S. consumers are paying premium prices for large SUVs that seat eight people and can tow a four-ton trailer.
        </p>
        <p>
        The average transaction price of a new Ford Expedition is $62,700, Ford U.S. marketing director Matt VanDyke said, up $11,700 from the previous year. Ford does not disclose profits by model line. Average prices for the luxury Navigator rose to $81,000 from $78,000 a year earlier, according to Lincoln data.
        </p>
        <p>
        Ford said transaction prices across its U.S. model lines averaged $38,400, above the $34,000 industry average.
        </p>
        <p>
        General Motors Co (GM.N), which dominates the North American large SUV segment, will launch a new generation of its large SUV Chevrolet Suburban and Tahoe, and GMC Yukon, models later this year. Fiat Chrysler Automobiles NV (FCHA.MI) said it will re-enter the large SUV segment with new models due out in late 2020. [nL1N20L156]
        </p>
        <p>
        DETROIT (Reuters) - Ford Motor Co (F.N) said it will boost U.S. production of its largest sport utility vehicles in a move to grab profits in a market where consumers favor larger, more comfortable vehicles.
        </p>
        <p>
        Ford’s Kentucky Truck plant in Louisville will increase the production rate for Ford Expedition and Lincoln Navigator sport utility vehicles by 20 percent - the second 20 percent increase in a year for both models, executives said during a media.
        </p>
        <p>
        You may have heard the news that Ford plans to pare down the product line in the coming years, shedding low-selling sedans and unprofitable small cars, so there’s no better time to take a look through the offerings, particularly if you plan to shop for a new vehicle in the coming months.
        </p>
        <p>
        This ranking of Ford’s current vehicles is based on the U.S. News scoring methodology, which awards points in the categories that matter most to new vehicle buyers, and assigns an overall score to each vehicle.
        </p>
        <p>
        The move highlights Detroit automakers’ aggressive efforts to capitalize on popular, profitable large vehicles in America’s heartland, even as policymakers in California, China and Europe push for smaller, electric vehicles to reduce carbon dioxide emissions linked to climate change.
        </p>
        <p>
        While Ford can proudly claim rights to creating the very first SUV ever, the Model T Depot Hack back, they can also claim to be proudly producing the best SUVs on the road today. Equipped with all the cargo space, passenger room and power needed to transport you and your loved ones to the ski slopes, the lake or college dorms, Ford has been outfitting American consumers with the proper vehicles to take them everywhere they need to go.
        </p>
        <p>
        In today’s market, Ford offers 8 choices of SUV’s and crossovers. With rumors that the Bronco is to make a return, fans are rushing to Irwin Ford dealers to see if it’s true. You won’t need to look any further than Irwin Ford NH to check out the latest and greatest of Ford SUV’s. Trust the name that has built America’s SUV brand and automotive industry.
        </p>
        <p>
        With gasoline relatively cheap, U.S. consumers are paying premium prices for large SUVs that seat eight people and can tow a four-ton trailer.
        </p>
        <p>
        The average transaction price of a new Ford Expedition is $62,700, Ford U.S. marketing director Matt VanDyke said, up $11,700 from the previous year. Ford does not disclose profits by model line. Average prices for the luxury Navigator rose to $81,000 from $78,000 a year earlier, according to Lincoln data.
        </p>
        <p>
        Ford said transaction prices across its U.S. model lines averaged $38,400, above the $34,000 industry average.
        </p>
        <p>
        General Motors Co (GM.N), which dominates the North American large SUV segment, will launch a new generation of its large SUV Chevrolet Suburban and Tahoe, and GMC Yukon, models later this year. Fiat Chrysler Automobiles NV (FCHA.MI) said it will re-enter the large SUV segment with new models due out in late 2020. [nL1N20L156]
        </p>
      </div>
    </div>
  );
};

export default AdComponent;

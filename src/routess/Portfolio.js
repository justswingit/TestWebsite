import                React from                                                  'react';
import                                                             '../Components/Navbar';
import PortfolioHeroSection from                '../AllHeroSections/PortfolioHeroSection';
import     ResearchProjects from         '../PortfolioDetail/Researches/ResearchProjects';
import        SpecialTopics from         '../PortfolioDetail/SpecialTopics/SpecialTopics';
import           CCProjects from               '../PortfolioDetail/CCProjects/CCProjects';
import    FeaturedClasswork from '../PortfolioDetail/FeaturedClasswork/FeaturedClasswork';

function Portfolio() {
    return (
        <>
        <PortfolioHeroSection/>
        <ResearchProjects/>
        <SpecialTopics/>
        <FeaturedClasswork/>
        <CCProjects/>
        </>
    );
}
export default Portfolio;
import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
const water = 'https://images.unsplash.com/photo-1442560151894-8ac615cff97a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fHRhcCUyMHdhdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//https://images.unsplash.com/photo-1442560151894-8ac615cff97a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fHRhcCUyMHdhdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1554978805-9482b152026c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60
const styles = {
  cardHeader: {
textAlign: 'center',
padding: 40
  },
  cardIndentation: {
paddingLeft: 100,
paddingRight: 200,
opacity: '.9',
// marginTop: 50,
marginBottom: 50,
marginLeft:100,
marginRight: 100
  },
  divIndentation: {
    paddingLeft: '6.5em',
  textIndent:'-5.5em'
  },
  pIndentation : {
   paddingLeft: 100,
   textAlign: 'justify',
  },
  biblioBg:  {
    backgroundImage: `url(${water})`,
    height: '250vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  sectionMargin: {
    paddingTop: 70,
    
  }
}

const Bibliography = () => {
  const history = useHistory()
  return (

    <div onClick={() => history.push('/')} style={styles.biblioBg}>    
        <Card style={styles.cardIndentation}>
      <Card.Body>
      <Card.Title style={styles.cardHeader}>
        <h3>Annotated Bibliography</h3>     
        </Card.Title>
        <Card.Text>
          <div >
            <p style={  styles.divIndentation}>
            (1) Shamir, L., Delaney, J. D., Orlov, N., Eckley, D. M., & Goldberg, I. G. (2010). Pattern 
recognition software and techniques for biological image analysis. PLoS Computational Biology, 6(11). https://link.gale.com/apps/doc/A243524924/G
PS?u=j220906&sid=GPS&xid=55314384    
            </p>         
            <p style={styles.pIndentation}>
            This report details the software used for image recognition/pattern recognition in images for microbiology experiments which generate large image datasets. This overall informs the reader of crucial background information about how pattern recognition works, how it can be applied to biology,  and the backend programming for that as well. This goes in great detail on those points, as well as several kinds of algorithms and uses for the technology in the field of biology. 
            </p>
            <p style={styles.pIndentation}>
            After some extensive research, this has proven to be credible as it is from a library catalogue, comes from a reputable science research publication site, and almost all authors (who have proven to be experts in their fields) can be found having written other peer-reviewed works relating to this topic independently and together on other reputable scientific research sites within their biology and computer science fields (with some art mixed in). This source is certainly relevant to my washing machine prototype as it explains the backend algorithms for image processing and pattern recognition which are crucial parts of my prototype.  
            </p>
          </div>
          <div>
          <p style={styles.divIndentation}>
          (2) Barrie, L. (2020, September 25). US care labels have "outlived their original role". 
just-style.com, NA. https://link.gale.com/apps/doc/A636470002/GPS?u=j220906
&sid=GPS&xid=993d6e1c
          </p>     
          <p style={styles.pIndentation}>
          This article explains the future changes that will take place  in the care labeling of clothing sold in the U.S as abiding by the new Federal Trade Commission review. The article goes into detail about which clothing will be affected and how the new labels will be implemented, along with the reaction of others to this news. 
          </p>
          <p style={styles.pIndentation}>
          This source is relevant to my washing machine prototype and STEMposium proposal because it helps answer my futuristic research question about the relevance of care labels, which directly ties into the relevance of my own prototype in the future. Not only is the source relevant, but it also seems to be credible and reliable as it was written to inform, it comes from a seemingly reliable site relevant in the fashion and textile field and a library catalogue, and the author has proven to be credible so far.
          </p>
          </div>
          <div>
           <p style={styles.divIndentation}>
           (3) Gorman, L. (2017). The Era of the Internet of Things: Can Product Liability Laws Keep Up? 
Defense Counsel Journal, 84(3), 1I+. https://link.gale.com/apps/doc/A519758359/G
PS?u=j220906&sid=GPS&xid=10c38329
             </p>      
            <p style={styles.pIndentation}>
            This article focuses on what the Internet of Things is, how it affects our daily lives and privacy, and how product liability laws are keeping up with the changes. This article provides a legal lens for the issue of privacy with the Internet of Things (IoT) through detailed examples of cases relevant to the topic, and it provides a good background on what the IoT is. 
            </p>
            <p style={styles.pIndentation}>
            This article is relevant because it informs the reader about the Internet of Things and gives a legal perspective on the privacy issue this brand of technology often brings. It is relevant to my STEMposium project as my own prototype would be considered part of the Internet of Things, and as such, it is also subject to the same privacy concerns. This article helps answer my ethical research question in that regard. The article is credible as it is authored by a seemingly well-informed, acclaimed lawyer in the field of product liability, found on a library catalogue, and doesn’t propose any bias-- thus, with other criteria, passing the CRAAP test. 
            </p>
          </div>
          <div>
<p style={styles.divIndentation}>
(4) Stevens, M. (2021, January 14). Washing symbols explained. Retrieved February 12, 2021, 
from https://www.which.co.uk/reviews/washing-machines/article/washing-symbols
-explained-aXkjx1J2v8nK 
</p>
            <p style={styles.pIndentation}>
            The article explains the different kinds of symbols on clothing care labels and what they mean for you and how to regulate the washing (or drying) machine accordingly. It provides detailed explanations for each symbol and pictures as well. Really, this is quite a short and straightforward article when it comes to words. 
            </p>
            <p style={styles.pIndentation}>
            The article is recent and so far reliable, but it was not found on a library catalogue and rather through a normal Internet search which is why I have included a second source with the same purpose of explaining clothing care label symbols in order to fact check.  This source is relevant to my washing machine prototype very directly as it holds the information my washing machine will be looking for through its camera (symbols) and the backend algorithm (meaning) as well. That being said, it helps answer my essential questions for this STEMposium proposal.   
            </p>
          </div>
          <div>
            <p style={styles.divIndentation}> 
            (5) Leverette, M. (2020, October 27). What do these laundry symbols mean? Retrieved February 
12, 2021, from https://www.thespruce.com/international-laundry-care-symbols-2146487
            </p>      
            <p style={styles.pIndentation}>
            This article, similar to the one right above it (4), describes the meaning behind the symbols on clothing care labels. It goes into detail about bleach symbols, temperature symbols, drying symbols, ironing symbols, and more.  
            </p>
            <p style={styles.pIndentation}>
            This article is relevant primarily because it fact checks my other care label symbol source, as both are not from library catalogues or are scientific journals or peer-reviewed articles. This being stated, this source is credible because the author is clearly an expert in the field, has proven that the information is not biased, and, through cross-examination, both websites have similar information suggesting that these meanings are to be believed. This information, as stated earlier, is crucial to my washing machine prototype as my solution revolves around the optimization of laundry by recognizing these labels and creating a custom cycle for them. 
            </p>
          </div>
          <br/>
          <br/>        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    

//     <div>
     
// (1) Shamir, L., Delaney, J. D., Orlov, N., Eckley, D. M., & Goldberg, I. G. (2010). Pattern 
// recognition software and techniques for biological image analysis. PLoS Computational Biology, 6(11). https://link.gale.com/apps/doc/A243524924/G
// PS?u=j220906&sid=GPS&xid=55314384       

// This report details the software used for image recognition/pattern recognition in images for microbiology experiments which generate large image datasets. This overall informs the reader of crucial background information about how pattern recognition works, how it can be applied to biology,  and the backend programming for that as well. This goes in great detail on those points, as well as several kinds of algorithms and uses for the technology in the field of biology. 

// This, after some extensive research, has proven to be credible as it is from a library catalogue, comes from a reputable science research publication site, and almost all authors (who have proven to be experts in their fields) can be found having written other peer-reviewed works relating to this topic independently and together on other reputable scientific research sites within their biology and computer science fields (with some art mixed in). This source is certainly relevant to my washing machine prototype as it explains the backend algorithms for image processing and pattern recognition which are crucial parts of my prototype.  


// (2) Barrie, L. (2020, September 25). US care labels have "outlived their original role". 
// just-style.com, NA. https://link.gale.com/apps/doc/A636470002/GPS?u=j220906
// &sid=GPS&xid=993d6e1c

// This article explains the future changes that will take place  in the care labeling of clothing sold in the U.S as abiding by the new Federal Trade Commission review. The article goes into detail about which clothing will be affected and how the new labels will be implemented, along with the reaction of others to this news. 

// This source is relevant to my washing machine prototype and STEMposium proposal because it helps answer my futuristic research question about the relevance of care labels, which directly ties into the relevance of my own prototype in the future. Not only is the source relevant, but it also seems to be credible and reliable as it was written to inform, it comes from a seemingly reliable site relevant in the fashion and textile field and a library catalogue, and the author has proven to be credible so far.

// (3) Gorman, L. (2017). The Era of the Internet of Things: Can Product Liability Laws Keep Up? 
// Defense Counsel Journal, 84(3), 1I+. https://link.gale.com/apps/doc/A519758359/G
// PS?u=j220906&sid=GPS&xid=10c38329
	
// This article focuses on what the Internet of Things is, how it affects our daily lives and privacy, and how product liability laws are keeping up with the changes. This article provides a legal lens for the issue of privacy with the Internet of Things (IoT) through detailed examples of cases relevant to the topic, and it provides a good background on what the IoT is. 

// This article is relevant because it informs the reader about the Internet of Things and gives a legal perspective on the privacy issue this brand of technology often brings. It is relevant to my STEMposium project as my own prototype would be considered part of the Internet of Things, and as such, it is also subject to the same privacy concerns. This article helps answer my ethical research question in that regard. The article is credible as it is authored by a seemingly well-informed, acclaimed lawyer in the field of product liability, found on a library catalogue, and doesn’t propose any bias-- thus, with other criteria, passing the CRAAP test. 

// (4) Stevens, M. (2021, January 14). Washing symbols explained. Retrieved February 12, 2021, 
// from https://www.which.co.uk/reviews/washing-machines/article/washing-symbols
// -explained-aXkjx1J2v8nK 

// The article explains the different kinds of symbols on clothing care labels and what they mean for you and how to regulate the washing (or drying) machine accordingly. It provides detailed explanations for each symbol and pictures as well. Really, this is quite a short and straightforward article when it comes to words. 

// The article is recent and so far reliable, but it was not found on a library catalogue and rather through a normal Internet search which is why I have included a second source with the same purpose of explaining clothing care label symbols in order to fact check.  This source is relevant to my washing machine prototype very directly as it holds the information my washing machine will be looking for through its camera (symbols) and the backend algorithm (meaning) as well. That being said, it helps answer my essential questions for this STEMposium proposal.    

// (5) Leverette, M. (2020, October 27). What do these laundry symbols mean? Retrieved February 
// 12, 2021, from https://www.thespruce.com/international-laundry-care-symbols-2146487

// This article, similar to the one right above it (4), describes the meaning behind the symbols on clothing care labels. It goes into detail about bleach symbols, temperature symbols, drying symbols, ironing symbols, and more.  

// This article is relevant primarily because it fact checks my other care label symbol source, as both are not from library catalogues or are scientific journals or peer-reviewed articles. This being stated, this source is credible because the author is clearly an expert in the field, has proven that the information is not biased, and, through cross-examination, both websites have similar information suggesting that these meanings are to be believed. This information, as stated earlier, is crucial to my washing machine prototype as my solution revolves around the optimization of laundry by recognizing these labels and creating a custom cycle for them. 

//     </div>
  );
};

export default Bibliography;
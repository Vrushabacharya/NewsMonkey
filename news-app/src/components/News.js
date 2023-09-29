import React, { Component } from 'react'
import Newsitems from './Newsitems';




export class News extends Component {
   articles=[
    
      {
      "source": {
      "id": "business-insider",
      "name": "Business Insider"
      },
      "author": "Beatrice Nolan,Grace Dean",
      "title": "Elon Musk and his siblings hated one of their mom's boyfriends so much that they put tiny firecrackers in his cigarettes that exploded, book says",
      "description": "Walter Isaacson's book, \"Elon Musk,\" details the billionaire's childhood and relationship with his parents.",
      "url": "https://www.businessinsider.com/elon-musk-kimbal-musk-tosca-musk-firecrackers-maye-musk-cigarettes-2023-9",
      "urlToImage": "https://i.insider.com/6502d9ca1afe8f0019ea3858?width=1200&format=jpeg",
      "publishedAt": "2023-09-14T10:48:53Z",
      "content": "Maye Musk dated the man after she divorced Elon Musk's father Errol Musk, according to Walter Isaacson.ANGELA WEISS/AFP via Getty Images\r\n<ul><li>The Musk siblings hated a man Maye Musk was dating so… [+1844 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "aol.com",
      "title": "Tata Motors tests export markets for EVs, to roll out EV-only dealerships in India",
      "description": "Tata Motors, India's biggest electric carmaker, is testing its electric vehicles in some global markets where it could look at a potential launch if the experiment succeeds, its managing director told Reuters. The tests are in early stages and based on how th…",
      "url": "https://biztoc.com/x/6b862eb8a44c4c2e",
      "urlToImage": "https://c.biztoc.com/p/6b862eb8a44c4c2e/s.webp",
      "publishedAt": "2023-09-14T10:48:07Z",
      "content": "Tata Motors, India's biggest electric carmaker, is testing its electric vehicles in some global markets where it could look at a potential launch if the experiment succeeds, its managing director tol… [+275 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "reuters.com",
      "title": "Volkswagen to reduce staffing at all-electric Zwickau plant",
      "description": "Volkswagen is pictured during the 63rd Annual General Meeting of Volkswagen AG in Berlin, Germany May 10, 2023. REUTERS/Annegret Hilse Acquire Licensing Rights Sept 14 (Reuters) - Volkswagen is cutting back planned staffing at its all-electric plant in Zwicka…",
      "url": "https://biztoc.com/x/769abaaed89385ce",
      "urlToImage": "https://c.biztoc.com/p/769abaaed89385ce/s.webp",
      "publishedAt": "2023-09-14T10:48:06Z",
      "content": "Volkswagen is pictured during the 63rd Annual General Meeting of Volkswagen AG in Berlin, Germany May 10, 2023. REUTERS/Annegret Hilse Acquire Licensing RightsSept 14 (Reuters) - Volkswagen is cuttin… [+271 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "nbcnews.com",
      "title": "Taiwan slams Elon Musk, says it’s ‘not for sale’ nor part of China",
      "description": "Taiwan is “not for sale,” and neither is it part of China, said Taiwan’s Ministry of Foreign Affairs, in a rebuke to Elon Musk who called the island “an integral part of China.” “Listen up, Taiwan is not part of the PRC and certainly not for sale!” Taiwan’s M…",
      "url": "https://biztoc.com/x/745d29ea4d74437b",
      "urlToImage": "https://c.biztoc.com/p/745d29ea4d74437b/s.webp",
      "publishedAt": "2023-09-14T10:42:09Z",
      "content": "Taiwan is not for sale, and neither is it part of China, said Taiwans Ministry of Foreign Affairs, in a rebuke to Elon Musk who called the island an integral part of China.Listen up, Taiwan is not pa… [+261 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MarketWatch"
      },
      "author": "Steve Goldstein",
      "title": "‘Emerging markets have a China problem.’ This strategist favors India, which just hit a record.",
      "description": "Why one market strategist favors India, whose stock market index just hit a record high.",
      "url": "https://www.marketwatch.com/story/emerging-markets-have-a-china-problem-this-strategist-favors-india-which-just-hit-a-record-dd83e5bc",
      "urlToImage": "https://images.mktw.net/im-851925/social",
      "publishedAt": "2023-09-14T10:42:00Z",
      "content": "Emerging markets have a China problem, says Orton. Speaking from the sidelines of a Jefferies venture-capital conference in Tel Aviv, Orton shares a negative outlook on China, citing the weakness in … [+6554 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Marketscreener.com"
      },
      "author": "Reuters",
      "title": "Volkswagen to reduce staffing at all-electric Zwickau plant",
      "description": "(marketscreener.com) Volkswagen is cutting back planned staffing at its all-electric plant in Zwickau, Germany and adjusting shift work due to \"market conditions\", a spokesperson said on Tuesday.https://www.marketscreener.com/quote/stock/VOLKSWAGEN-AG-436737/…",
      "url": "https://www.marketscreener.com/quote/stock/VOLKSWAGEN-AG-436737/news/Volkswagen-to-reduce-staffing-at-all-electric-Zwickau-plant-44842618/",
      "urlToImage": "https://img.zonebourse.com/reuters/2023-08/2023-08-25T105730Z_4_LYNXMPEJ4I0EA_RTROPTP_3_VOLKSWAGEN-AGM.JPG",
      "publishedAt": "2023-09-14T10:39:46Z",
      "content": "(Reuters) - Volkswagen is cutting back planned staffing at its all-electric plant in Zwickau, Germany and adjusting shift work due to \"market conditions\", a spokesperson said on Tuesday.\r\n The carmak… [+1047 chars]"
      },
      {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Gigacasting 2.0: Tesla reinvents carmaking with quiet breakthrough",
        "description": "AUSTIN, Texas, Sept 14 (Reuters) - Tesla (TSLA.O) has combined a series of innovations to make a technological breakthrough that could transform the way it makes electric vehicles and help Elon Musk achieve his aim of halving production costs, five people fam…",
        "url": "https://biztoc.com/x/a9571314a85f7438",
        "urlToImage": "https://c.biztoc.com/p/a9571314a85f7438/s.webp",
        "publishedAt": "2023-09-14T10:34:06Z",
        "content": "AUSTIN, Texas, Sept 14 (Reuters) - Tesla (TSLA.O) has combined a series of innovations to make a technological breakthrough that could transform the way it makes electric vehicles and help Elon Musk … [+295 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Dow Jones Futures Rise; Small Caps Make Bearish Move With Tesla, Amazon In Buy Areas - Investor's Business Daily",
        "description": "Dow Jones Futures Rise; Small Caps Make Bearish Move With Tesla, Amazon In Buy AreasInvestor's Business Daily Arm prices IPO at $51 per share, valuing company at over $54 billionCNBC ARM IPO: What you need to knowCNBC Television Arm’s $55 billion initial publ…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171821762",
        "urlToImage": null,
        "publishedAt": "2023-09-14T10:32:17Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Robert Hart, Forbes Staff, \n Robert Hart, Forbes Staff\n https://www.forbes.com/sites/roberthart/",
        "title": "Taiwan Claps Back At Elon Musk After Billionaire Says It Is ‘Part Of China’",
        "description": "Musk’s comments angered Taiwan’s foreign minister, who said the democratically-ruled island is “not for sale” and “not part of” the People’s Republic of China.",
        "url": "https://www.forbes.com/sites/roberthart/2023/09/14/taiwan-claps-back-at-elon-musk-after-billionaire-says-it-is-part-of-china/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6502e0d96c1502b2deaea6b1/0x0.jpg?format=jpg&crop=2322,1307,x0,y120,safe&width=1200",
        "publishedAt": "2023-09-14T10:31:57Z",
        "content": "Taiwans foreign minister has rebuked Elon Musk after he described the self-ruled island as an integral part of China, putting the billionaire in the midst of another sensitive geopolitical issue as h… [+2878 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "businessinsider.com",
        "title": "Elon Musk was rebuked by Taiwan after appearing to defend the one-China policy: 'Listen up, Taiwan is not for sale'",
        "description": "Elon Musk at the Tesla Shanghai Gigafactory groundbreaking ceremony in 2019. REUTERS/Aly Song Elon Musk compared Taiwan to Hawaii, suggesting it was \"an integral part of China.\" Taiwan's minister of foreign affairs hit back, saying the island is \"certainly no…",
        "url": "https://biztoc.com/x/49a64c0a6400f15c",
        "urlToImage": "https://c.biztoc.com/p/49a64c0a6400f15c/s.webp",
        "publishedAt": "2023-09-14T10:30:10Z",
        "content": "Elon Musk at the Tesla Shanghai Gigafactory groundbreaking ceremony in 2019.REUTERS/Aly SongElon Musk compared Taiwan to Hawaii, suggesting it was \"an integral part of China.\"Taiwan's minister of for… [+298 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "Tata Motors tests export markets for EVs, to roll out EV-only dealerships in India",
        "description": "(marketscreener.com) Tata Motors,\nIndia's biggest electric carmaker, is testing its electric\nvehicles in some global markets where it could look at a\npotential launch if the experiment succeeds, its managing\ndirector told Reuters.\n The tests are in early stag…",
        "url": "https://www.marketscreener.com/quote/stock/TATA-MOTORS-LIMITED-46728680/news/Tata-Motors-tests-export-markets-for-EVs-to-roll-out-EV-only-dealerships-in-India-44842545/",
        "urlToImage": "https://img.zonebourse.com/reuters/2022-09/2022-09-28T091222Z_1_LYNXMPEI8R0DQ_RTROPTP_3_TATA-MOTORS-INDIA-ELECTRIC.JPG",
        "publishedAt": "2023-09-14T10:29:54Z",
        "content": "* Testing EVs in some global markets, in talks with local\r\npartners\r\n* Tata Motors to set up exclusive EV dealerships in India\r\n* EV sales growing, new launches expected at faster pace\r\nNEW DELHI, Se… [+3363 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketplace.org"
        },
        "author": "Marketplace / Marketplace Tech Staff",
        "title": "How Musk’s Starlink became a security liability for the U.S.",
        "description": "Here on Earth, the satellites that make up Starlink look like a string of stars travelling across the night sky. More than 4,000 of them are circling the Earth in low orbit right now. They’re part of the private venture that’s the brainchild of billionaire an…",
        "url": "https://www.marketplace.org/shows/marketplace-tech/how-musks-starlink-became-a-security-liability-for-the-u-s/",
        "urlToImage": "https://www.marketplace.org/wp-content/uploads/2023/09/GettyImages-1636560226.jpg?w=1200",
        "publishedAt": "2023-09-14T10:29:39Z",
        "content": "Here on Earth, the satellites that make up Starlink look like a string of stars traveling across the night sky. More than 4,000 of them are circling Earth in low orbit right now. They’re part of the … [+8996 chars]"
        },
    ]
    
    constructor(){
      super();
      console.log("hello");
      this.state = {
        articles:this.articles,
        loading: true,
        page:1
      }
    }
    async componentDidMount() {
      console.log("cdm");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(data);
      this.setState({ articles: parseData.articles });
    }
    
     
/* eslint-disable */
handlePrevious = async () => {
  
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let parseData = await data.json();
  console.log(parseData);
  this.setState({
    page: this.state.page - 1,
    articles: parseData.articles,
  });
};
 /* eslint-disable */
 handleNext=async ()=>{
  this.props.setProgress(0);
  console.log('nnext')
  if(this.page +1 > Math.ceil(this.state.totalResults/20)){


  }else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550
&page=${this.state.page + 1}&pageSize=20`;
      let data= await fetch(url);
      let parseData= await data.json()
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles:parseData.articles});


  }
  this.props.setProgress(100);
  
 }
 
 

 handleNext = async () => {
  
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550
&page=${this.state.page + 1}&pageSize=20`;
      let data= await fetch(url);
      let parseData= await data.json()
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles:parseData.articles});

 }
 
 /* eslint-disable */
    

  render() {
    return (

        <div className="grid gap-3">
            <h1>News of the day</h1>
            <div className="row">
            {this.state.articles.map((element) => {
              return  <div className="col-md-3" key={element.url}>
               <Newsitems newsurl={element.url} title={element.title?element.title:""} description={element.description?element.description:"".slice(0,45)} imageurl={element.urlToImage} author={element.author}  Date={element.publishedAt} source={element.name} />
               </div>  
                    })}
           </div>
           <div className="container d-flex justify-content-between">
           <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} class="btn btn-dark">Previous</button>
           <button type="button" onClick={this.handleNext} class="btn btn-dark">Next</button>
           </div>
        </div>

    )
  }
}

export default News;

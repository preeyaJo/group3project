import "../infocard.css";
import 'bootstrap/dist/css/bootstrap.min.css';


/*Array för info*/
const infoCardArray = [
    {
      category: "fossilfuels",
      info1:
        "Fossila bränslen är olika gaser som sprids i vår atmosfär på grund av människans användning av exempelvis bensin, diesel och kol. Dessa gaser är en stor orsak till klimatförändring då de minskar jordens ozonlager.",
      info2:
        "Ozonlagret är ett skyddande lager runt jorden som absorberar och motverkar solens starka strålar och finns ca. 10-15 km upp i jordens atmosfär. Fossila bränslen minskar ozonlagrets tjocklek, vilket resulterar i ett mindre skydd för solens skadliga strålar. Solens skadliga strålar kan orsaka sjukdomar och tidig död för mänskligheten. ",
      info3:
        "På grund av detta är det viktigt att människan minskar sitt utsläpp av fossila bränslen genom att exempelvis köra elbilar istället för bensin -eller dieselbilar.",
      image:
        "https://cdn.pixabay.com/photo/2018/05/26/10/59/power-station-3431136_1280.jpg",
    },
    {
      category: "globaltemperature",
      info1:
        "På grund av människans enorma utsläpp av gaser (exempelvis fossila bränslen) höjs den globala temperaturen. Den globala medeltemperaturen har just nu ökat med 1-2 grader, vilket egentligen inte låter så mycket. Men detta skapar katastrofer i vår värld. ",
      info2:
        "Värmeböljor är mer och mer vanligt i Mellanöstern (vid exempelvis Turkiet, Syrien och Irak), vilket skapar en hög temperatur som är svår att leva i. Uttorkning och vattenbrist är ett stort problem i Afrika, och eftersom människan måste ha vatten för att överleva skapar detta en allvarligt och akut situation. Majoriteten av ekosystemen i vår värld påverkas av den höjda temperaturen; djur dör och det blir obalans i ekosystemen.",
      info3:
        "För att världen ska fortsätta som den är måste människan minska sitt utsläpp. Vi måste börja tänka mer på vad vi köper, vad vi äter och vad vi kör; mer vegetariskt, mer loppisar och mer elbilar. ",
      image:
        "https://images.pexels.com/photos/2305169/pexels-photo-2305169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      category: "sealevels",
      info1:
        "På grund av den smältande isen höjs jordens vatten. Glaciärerna blir till vatten, som sedan förs vidare ut till jordens hav. Detta leder till förstörda städer som sakta sjunker under havsnivån. ",
      info2:
        "Städer och byar som ligger nära havet kommer i framtiden förstöras av de ökande vattennivåerna. Havet stiger, vilket resulterar i att risken för översvämning dessutom är hög. Vi kommer se fler vattentäckta vägar. Städer nära havet har också, i vissa områden av jorden, större risk för orkaner vilket  resulterar i att städer kommer utsättas för fler stormar. Många orkaner och stormar är farliga på grund av starka vindar, vilket kan förstöra hus och natur. ",
      info3:
        "Detta skapar en stor risk för mänskligheten, och vi kommer utsättas för fler katastrofer och allvarliga situationer. Det vi kan göra för att motverka detta är mindre utsläpp av fossila bränslen, koldioxid och andra farliga gaser. ",
      image:
        "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      category: "glaciersize",
      info1:
        "Jordens polarområden förlorar glaciärer och is. Polarområdenas vatten förändras snabbt genom varmare temperaturer och döende vattendjur. Detta påverkar oss redan idag, men i framtiden kommer det bli värre. ",
      info2:
        "Att glaciärer smälter skapar bland annat två problem: havsnivåerna ökar vilket skapar fler katastrofer jorden runt, och jordens färskvatten minskar vilket många länder behöver för deras jordbruk. När isen smälter kommer havsnivån öka, men när alla glaciärer är borta kommer det skapa vattenbrist. Tillslut kommer vi inte ha den fina tillgång till färskvatten som vi har idag. ",
      info3:
        "Jordbruk kommer torka ut, vilket skapar mindre mat och det kommer finnas mindre dricksvatten vilket skapar uttorkning. Om glaciärerna försvinner, kommer hela jorden påverkas. Trots att denna katastrof verkar långt borta, kommer det bli vår framtid om inte människans utsläpp förändras.",
      image:
        "https://cdn.pixabay.com/photo/2014/07/30/02/00/iceberg-404966_1280.jpg",
    },
  ];
  
        
  function InfoCard(props) {

    const  data = infoCardArray.find(p=>p.category === props.Category);

    return (
  
  <div className="card mb-3">
        <div className="col">
          <img className="card-img-top" src={data.image} alt=""/>
        </div>
        <div className="col">
          <div className="card-body">
            <p className="card-text">
              <p>{data.info1}</p>
              <p>{data.info2}</p>
              <p>{data.info3}</p>
            </p>
        </div>
      </div>
    </div>
    ); 
  }
  
  export default InfoCard;
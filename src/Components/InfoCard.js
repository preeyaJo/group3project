import "../infocard.css";
import 'bootstrap/dist/css/bootstrap.min.css';


/*Array för info*/
const infoCardArray = [
    {
      category: "fossilfuels",
      info:
        "Text om fossila bränslen",
      image:
        "https://cdn.pixabay.com/photo/2018/05/26/10/59/power-station-3431136_1280.jpg",
    },
    {
      category: "globaltemperature",
      info:
        "Text om temperatur",
      image:
        "https://images.pexels.com/photos/2305169/pexels-photo-2305169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      category: "sealevels",
      info:
        "Text om havsnivåer",
      image:
        "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      category: "glaciersize",
      info:
        "Text om glaciärer",
      image:
        "https://cdn.pixabay.com/photo/2014/07/30/02/00/iceberg-404966_1280.jpg",
    },
  ];
  
  function InfoCard(props) {

    const  data = infoCardArray.find(p=>p.category == props.Category);

    return (
  
  <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={data.image}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">
              <small class="text-muted">{data.info}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    ); 
  }
  
  export default InfoCard;
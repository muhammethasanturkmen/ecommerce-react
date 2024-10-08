import { useState } from 'react'
import './App.css'

let sales = [];
function App() {

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  )
}




function Header() {

  function show() {
    if (document.querySelector(".cart").style.display === "block") {

      document.querySelector(".cart").style.display = "none";
    } else {

      document.querySelector(".cart").style.display = "block";
    }
  }

  return (
    <div className="header">
      <div className="left">
      <img src="/sneakers 2.svg" alt="" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    <div className="profil">
      <img className='sepet' src="/Group 14.svg" alt="" onClick={show} />
      <img  className='people' src="/Oval.png" alt="" />
    </div>
  </div>
  )
}

function Content() {



  const [UrunAdet, setAdet] = useState(0);

  function Arti() {
    setAdet(UrunAdet + 1);
  }

  function Eksi() {
    setAdet(UrunAdet - 1);
  }

  function createSalesHtml(urun) {
    return (`
      <li>
        <img src="/Rectangle-mini.png" alt="" />
        <div className="urundetails">
          <p>${urun.ad}</p>
          <p><span>${urun.fiyat} x${urun.adet}</span><span>$${urun.toplamFiyat}.00</span></p>
        </div>
      </li>`
    )
  }


  const [id, setİd] = useState(0);

  function createİd() {
    setİd(id + 1)
    return id;
  }

  function addTocart() {
    sales.push(
      {
        id: createİd(),
        ad: "Fall Limited Edition Sneakers",
        fiyat: "$125.00",
        adet: UrunAdet,
        toplamFiyat: UrunAdet * 125
      }
    );

    if (sales === null) {
      return;
    } else {
      document.querySelector(".salesList").innerHTML = sales.map(x => createSalesHtml(x));
    }
  }


  return (

    <>
    <div className="cart">
      <h1>Cart</h1>
      <hr />
      <ul className='salesList'>
      Your cart is empty.
      </ul>
    </div>

    <div className="content">
      <div className="foto">
        <img className='big' src="/Rectangle.png" alt="" />
        <div className="minifoto">
          <img className='mini' src="/Rectangle-mini.png" alt="" />
          <img className='mini2' src="/Rectangle Copy 2.png" alt="" />
          <img className='mini3' src="/Rectangle Copy 3.png" alt="" />
          <img className='mini4' src="/Rectangle Copy 4.png" alt="" />
        </div>
      </div>
      <div className="satma">
        <strong>Sneaker Company</strong>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="fiyat">
          <p className='anafiyat'>$125.00</p>
          <p className='indirim'>50%</p>
        </div>
        <div className="eskifiyat">
          <p>$250.00</p>
        </div>
        <div className="addtocart">
          <div className="adet">
            <img className='eksi' src="/-.png" alt="" onClick={Eksi} />
            <span>{UrunAdet}</span>
            <img src="/plus.svg" alt="" onClick={Arti} />
          </div>
          <button onClick={addTocart}>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 14">
                <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M3.86313 3.64139H20.9246C21.5077 3.64139 21.9352 4.19014 21.7941 4.75489L19.9732 12.0381C19.8781 12.4181 19.5473 12.6924 19.1563 12.7153L4.83452 13.557C5.09057 14.1554 5.68378 14.5661 6.36452 14.5661H16.3727C17.8709 14.5661 19.0897 15.7849 19.0897 17.2831C19.0897 18.7812 17.8709 20 16.3727 20C14.4955 20 13.1758 18.1275 13.818 16.3584H8.91319C9.55625 18.1298 8.23365 20 6.35846 20C4.09916 20 2.83011 17.3851 4.21903 15.6114C3.44867 15.0012 3.00149 14.1031 2.92835 13.2755C1.79349 0.631508 1.84298 1.18296 1.9492 2.36648L1.94921 2.36663L1.94928 2.36744C2.02069 3.1631 2.11759 4.24273 1.89764 1.79232H0.896159C0.401223 1.79232 0 1.39109 0 0.896159C0 0.401223 0.401223 0 0.896159 0H2.71694C3.18081 0 3.56803 0.354025 3.60951 0.816059L3.86313 3.64139ZM5.43388 17.2831C5.43388 17.7929 5.84867 18.2077 6.35846 18.2077C6.86829 18.2077 7.28308 17.7929 7.28308 17.2831C7.28308 16.7732 6.86829 16.3584 6.35846 16.3584C5.84867 16.3584 5.43388 16.7732 5.43388 17.2831ZM16.3727 18.2077C15.8629 18.2077 15.4481 17.7929 15.4481 17.2831C15.4481 16.7732 15.8629 16.3584 16.3727 16.3584C16.8825 16.3584 17.2973 16.7732 17.2973 17.2831C17.2973 17.7929 16.8825 18.2077 16.3727 18.2077ZM4.59328 11.7758L18.394 10.9648L19.7769 5.43367H4.02401L4.59328 11.7758Z" fill="white" />
              </g>
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </>
  )
}



export default App

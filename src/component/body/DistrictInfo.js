import React, { Component } from 'react'
import axios from 'axios'
import '../../style.css'
export default class DistrictInfo extends Component {

  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('https://corona-bd.herokuapp.com/district')
      .then(response => {
        // console.log(response.data.data);
        this.setState({ data: response.data.data })
      })
      .catch(error => {
        console.log(error)
      })
  }


  // OLD METHODS !--- IMPLEMENT
  // countDhaka() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 14 District (Included Dhaka City)
  //     if (myList[key].name === "Dhaka City" || myList[key].name === "Dhaka (District)" || myList[key].name === "Faridpur"
  //       || myList[key].name === "Gazipur" || myList[key].name === "Gopalganj" || myList[key].name === "Kishoreganj"
  //       || myList[key].name === "Madaripur" || myList[key].name === "Manikganj" || myList[key].name === "Munshigonj"
  //       || myList[key].name === "Narayanganj" || myList[key].name === "Narshingdi" || myList[key].name === "Rajbari"
  //       || myList[key].name === "Shariatpur" || myList[key].name === "Tangail") {
  //       // console.log(myList[key].name, " Count",myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //     // total = total + myList[key].count;
  //   });
  //   return total;
  // }

  // countRangpur() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 8 District 
  //     if (myList[key].name === "Dinajpur" || myList[key].name === "Gaibandha" || myList[key].name === "Kurigram"
  //       || myList[key].name === "Lalmonirhat" || myList[key].name === "Nilphamari" || myList[key].name === "Panchagarh"
  //       || myList[key].name === "Rangpur" || myList[key].name === "Thakurgaon") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //   });
  //   return total;
  // }

  // countRajshahi() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 8 District 
  //     if (myList[key].name === "Bogura" || myList[key].name === "Jaipurhat" || myList[key].name === "Naogaon"
  //       || myList[key].name === "Natore" || myList[key].name === "Chapainawabganj" || myList[key].name === "Pabna"
  //       || myList[key].name === "Rajshahi" || myList[key].name === "Sirajganj") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //   });
  //   return total;
  // }

  // countMymensingh() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 4 District 
  //     if (myList[key].name === "Jamalpur" || myList[key].name === "Mymensingh" || myList[key].name === "Netrokona"
  //       || myList[key].name === "Sherpur") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //   });
  //   return total;
  // }

  // countSylhet() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 4 District 
  //     if (myList[key].name === "Hobiganj" || myList[key].name === "Moulovi Bazar" || myList[key].name === "Sunamganj"
  //       || myList[key].name === "Sylhet") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //   });
  //   return total;
  // }

  // // NEED CHECKING MAN
  // countKhulna() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 14 District (Included Dhaka City)
  //     if (myList[key].name === "Bagerhat" || myList[key].name === "Chuadanga" || myList[key].name === "Jashore"
  //       || myList[key].name === "Jhenaidah" || myList[key].name === "Khulna" || myList[key].name === "Kushtia"
  //       || myList[key].name === "Magura" || myList[key].name === "Meherpur" || myList[key].name === "Narail"
  //       || myList[key].name === "Satkhira") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //     // total = total + myList[key].count;
  //   });
  //   return total;
  // }

  // // NEED CHECKING MAN
  // countBarishal() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     //console.log("Count",myList[key].count)
  //     // 14 District (Included Dhaka City)
  //     if (myList[key].name === "Barguna" || myList[key].name === "Barishal" || myList[key].name === "Bhola"
  //       || myList[key].name === "Jhalokathi" || myList[key].name === "Potuakhali" || myList[key].name === "Kushtia") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //     // total = total + myList[key].count;
  //   });
  //   return total;
  // }

  // // NEED CHECKING MAN
  // countChittagong() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     // 14 District (Included Dhaka City)
  //     if (myList[key].name === "Chattogram" || myList[key].name === "Cox’s bazar" || myList[key].name === "Cumilla"
  //       || myList[key].name === "B. Baria" || myList[key].name === "Laksmipur" || myList[key].name === "Chandpur"
  //       || myList[key].name === "Bandarban" || myList[key].name === "Feni" || myList[key].name === "Khagrachhari"
  //       || myList[key].name === "Noakhali" || myList[key].name === "Rangamati") {
  //       //console.log(myList[key].name, " Count", myList[key].count)
  //       total = total + myList[key].count;
  //     }
  //     // total = total + myList[key].count;
  //   });
  //   return total;
  // }

  // totalCount() {
  //   let total = 0;
  //   const myList = this.state.data;
  //   Object.keys(myList).forEach(function (key, index) {
  //     total = total + myList[key].count;
  //   });
  //   return total;
  // }

  getDataByArray(arrCity) {
    let total = 0;
    const myList = this.state.data;
    let arrData = [];
    const filterdIndex = Object.keys(myList).filter(function (key, index) {
      const item = myList[key];
      return arrCity.find(city => city === item.name)
    });
    filterdIndex.forEach(function (key) {
      arrData.push(myList[key]);
    });
    arrData.forEach(function (element) {
      total = total + element.count;
      //console.log("getDataByArray ", element.name)
    });
    return total;
  }
  render() {
    const dhakaDivision =
      ["Dhaka City", "Dhaka (District)", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur"
        , "Manikganj", "Munshigonj", "Narayanganj", "Narshingdi", "Rajbari", "Shariatpur", "Tangail"];

    const rangpurDivision =
      ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"]

    const chittagongDivision =
      ["Chattogram", "Cox’s bazar", "Cumilla", "B. Baria", "Laksmipur", "Chandpur", "Bandarban", "Feni", "Khagrachhari"
        , "Noakhali", "Rangamati"]

    const barishalDivision =
      ["Barguna", "Barishal", "Bhola", "Jhalokathi", "Potuakhali", "Kushtia"];

    const khulnaDivision =
      ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]

    const sylhetDivision =
      ["Hobiganj", "Moulovi Bazar", "Sunamganj", "Sylhet"]

    const mymensinghDivision =
      ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"];

    const rajshahiDivision =
      ["Bogura", "Jaipurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj"];
    return (



      <div className="districtName">
        <div className="infomymensingh">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66140747070312" className="mymensigncircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="mymensignh" />
          <div className="amount5b029228"> 00{this.getDataByArray(mymensinghDivision)}</div>
        </div>
        <div className="infodhaka">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66143798828125" className="dhakacircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="dhaka" />
          <div className="amount11fef4c3"> 0{this.getDataByArray(dhakaDivision)}</div>
        </div>
        <div className="infosylhet">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66140747070312" className="sylhetcircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="sylhet" />
          <div className="amount9ee58caf"> 000{this.getDataByArray(sylhetDivision)}</div>
        </div>
        <div className="infochittagong">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.661376953125" className="chittagongcircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="chittagon" />
          <div className="amountde0eb364"> 00{this.getDataByArray(chittagongDivision)}</div>
        </div>
        <div className="infobarishal">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.661376953125" className="barishalcircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="barishal" />
          <div className="amount4ae7a04c"> 000{this.getDataByArray(barishalDivision)}</div>
        </div>
        <div className="infokhulna">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.661376953125" className="khulnacircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="khulna" />
          <div className="amountb348c96d"> 000{this.getDataByArray(khulnaDivision)}</div>
        </div>
        <div className="inforajshahi">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66143798828125" className="rajshahicircle">
            <path d="M 36.33071136474609 0 C 56.39561080932617 0 72.66142272949219 16.26581192016602 72.66142272949219 36.33070755004883 C 72.66142272949219 56.39560317993164 56.39561080932617 72.66141510009766 36.33071136474609 72.66141510009766 C 16.26581382751465 72.66141510009766 0 56.39560317993164 0 36.33070755004883 C 0 16.26581192016602 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="rajshahi" />
          <div className="amount1dbc32ea">000{this.getDataByArray(rajshahiDivision)}</div>
        </div>
        <div className="inforangpur">
          <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66140747070312" className="rangpurcircle">
            <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
          <div className="rangpur" />
          <div className="amount"> 00{this.getDataByArray(rangpurDivision)}</div>
        </div>
      </div>
    )
  }
}

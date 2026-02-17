function getElementDetails() {
  let selectedvalue = document.getElementById("elementselector").value;
  let elementName;
  let elementDetails;
  let elementImage;


  switch (selectedvalue) {
    case "0":
      elementName = "No element selected";
      elementDetails = "please select an element from the dropdown menu";
      elementImage = "";

      break;
    case "1":
      elementName = "hydrogen";
      elementDetails = "Atomic number: 1 <br> Symbol: H <br> Atomic weight: 1.008<br> electron:1<br>proton:1<br>neutron:0";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/hydrogen.png";
      break;
    case "2":
      elementName = "helium";
      elementDetails = "Atomic number: 2 <br> Symbol: He <br> Atomic weight: 4.0026<br> electron:2<br>proton:2<br>neutron:2";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/helium.jpg";
      break;
    case "3":
      elementName = "lithium";
      elementDetails = "Atomic number: 3 <br> Symbol: Li <br> Atomic weight: 6.941<br> electron:3<br>proton:3<br>neutron:4";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/lithium.jpg";
      break;
    case "4":
      elementName = "beryllium";
      elementDetails = "Atomic number: 4 <br> Symbol: Be <br> Atomic weight: 9.0122<br> electron:4<br>proton:4<br>neutron:5";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/berelium.jpg";
      break;
    case "5":
      elementName = "boron";
      elementDetails = "Atomic number: 5 <br> Symbol: B <br> Atomic weight: 10.811<br> electron:5<br>proton:5<br>neutron:6";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/boron.png";
      break;
    case "6":
      elementName = "carbon";
      elementDetails = "Atomic number: 6 <br> Symbol: C <br> Atomic weight: 12.011<br> electron:6<br>proton:6<br>neutron:6";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/carbon.jpg";
      break;

    case "7":
      elementName = "nitrogen";
      elementDetails = "Atomic number: 7 <br> Symbol: N <br> Atomic weight: 14.007<br> electron:7<br>proton:7<br>neutron:7";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/nitrogen.jpg";
      break;
    case "8":
      elementName = "oxygen";
      elementDetails = "Atomic number: 8 <br> Symbol: O <br> Atomic weight: 15.999<br> electron:8<br>proton:8<br>neutron:8";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/oxygen.jpg";
      break;
    case "9":
      elementName = "fluorine";
      elementDetails = "Atomic number: 9 <br> Symbol: F <br> Atomic weight: 18.998<br> electron:9<br>proton:9<br>neutron:10";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/fluorine.png";
      break;

    case "10":
      elementName = "neon";
      elementDetails = "Atomic number: 10 <br> Symbol: Ne <br> Atomic weight: 20.180<br> electron:10<br>proton:10<br>neutron:10";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/neon.png";
      break;

    case "11":
      elementName = "sodium";
      elementDetails = "Atomic number: 11 <br> Symbol: Na <br> Atomic weight: 22.990<br> electron:11<br>proton:11<br>neutron:12";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/sodium.png";
      break;

    case "12":
      elementName = "magnesium";
      elementDetails = "Atomic number: 12 <br> Symbol: Mg <br> Atomic weight: 24.305<br> electron:12<br>proton:12<br>neutron:12";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/magnesium.png";
      break;

    case "13":
      elementName = "aluminium";
      elementDetails = "Atomic number: 13 <br> Symbol: Al <br> Atomic weight: 26.982<br> electron:13<br>proton:13<br>neutron:14";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/aluminium.png";
      break;

    case "14":
      elementName = "silicon";
      elementDetails = "Atomic number: 14 <br> Symbol: Si <br> Atomic weight: 28.085<br> electron:14<br>proton:14<br>neutron:14";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/silicon.png";
      break;

    case "15":
      elementName = "phosphorus";
      elementDetails = "Atomic number: 15 <br> Symbol: P <br> Atomic weight: 30.974<br> electron:15<br>proton:15<br>neutron:16";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/phosphorus.png";
      break;

    case "16":
      elementName = "sulfur";
      elementDetails = "Atomic number: 16 <br> Symbol: S <br> Atomic weight: 32.06<br> electron:16<br>proton:16<br>neutron:16";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/sulfur.jpg";
      break;

    case "17":
      elementName = "chlorine";
      elementDetails = "Atomic number: 17 <br> Symbol: Cl <br> Atomic weight: 35.45<br> electron:17<br>proton:17<br>neutron:18";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/chlorine.png";
      break;

    case "18":
      elementName = "argon";
      elementDetails = "Atomic number: 18 <br> Symbol: Ar <br> Atomic weight: 39.948<br> electron:18<br>proton:18<br>neutron:22";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/argon.png";
      break;

    case "19":
      elementName = "potassium";
      elementDetails = "Atomic number: 19 <br> Symbol: K <br> Atomic weight: 39.098<br> electron:19<br>proton:19<br>neutron:20";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/pottasium.jpg";
      break;

    case "20":
      elementName = "calcium";
      elementDetails = "Atomic number: 20 <br> Symbol: Ca <br> Atomic weight: 40.078<br> electron:20<br>proton:20<br>neutron:20";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/calcium.png";
      break;

    case "21":
      elementName = "scandium";
      elementDetails = "Atomic number: 21 <br> Symbol: Sc <br> Atomic weight: 44.956<br> electron:21<br>proton:21<br>neutron:24";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/scandium.png";
      break;

    case "22":
      elementName = "titanium";
      elementDetails = "Atomic number: 22 <br> Symbol: Ti <br> Atomic weight: 47.867<br> electron:22<br>proton:22<br>neutron:26";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/titanium.png";
      break;

    case "23":
      elementName = "vanadium";
      elementDetails = "Atomic number: 23 <br> Symbol: V <br> Atomic weight: 50.942<br> electron:23<br>proton:23<br>neutron:28";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/vanadium.png";
      break;

    case "24":
      elementName = "chromium";
      elementDetails = "Atomic number: 24 <br> Symbol: Cr <br> Atomic weight: 51.996<br> electron:24<br>proton:24<br>neutron:28";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/chromium.png";
      break;

    case "25":
      elementName = "manganese";
      elementDetails = "Atomic number: 25 <br> Symbol: Mn <br> Atomic weight: 54.938<br> electron:25<br>proton:25<br>neutron:30";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/manganese.png";
      break;

    case "26":
      elementName = "iron";
      elementDetails = "Atomic number: 26 <br> Symbol: Fe <br> Atomic weight: 55.845<br> electron:26<br>proton:26<br>neutron:30";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/iron.png";
      break;

    case "27":
      elementName = "cobalt";
      elementDetails = "Atomic number: 27 <br> Symbol: Co <br> Atomic weight: 58.933<br> electron:27<br>proton:27<br>neutron:32";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/cobalt.png";
      break;

    case "28":
      elementName = "nickel";
      elementDetails = "Atomic number: 28 <br> Symbol: Ni <br> Atomic weight: 58.693<br> electron:28<br>proton:28<br>neutron:31";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/nickel.png";
      break;

    case "29":
      elementName = "copper";
      elementDetails = "Atomic number: 29 <br> Symbol: Cu <br> Atomic weight: 63.546<br> electron:29<br>proton:29<br>neutron:35";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/copper.png";
      break;

    case "30":
      elementName = "zinc";
      elementDetails = "Atomic number: 30 <br> Symbol: Zn <br> Atomic weight: 65.38<br> electron:30<br>proton:30<br>neutron:35";
      elementImage = "/my-js/practice-conditionals/assets/image/periodic-element-image/zinc.png";
      break;

    default:
      alert("Invalid selection");
      break; 
  }

  document.getElementById("resultedelementname").innerHTML = elementName;
  document.getElementById("resultedelementdetails").innerHTML = elementDetails;
  document.getElementById("resultedelementimage").src = elementImage;
}
function render(){
    window.location.href="calculator.html";
}
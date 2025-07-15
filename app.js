const express = require("express");
require("dotenv").config();
const app = express();
const hindiJokes = [
  {
    joke: "संता ATM में गया, स्क्रीन पर लिखा था: 'Please insert your card'\nसंता: Arey bhai, pyaar se maango... thoda respect dikhao!",
  },
  {
    joke: "टीचर: तुम क्लास में क्यों सो रहे हो?\nछात्र: Kyunki aapki awaaz sunte hi neend aa jaati hai!",
  },
  {
    joke: "पत्नी: आज खाना क्यों नहीं खाया?\nपति: Diabetes hai!\nपत्नी: Par maine to namak-mirch bhi nahi dala tha!\nपति: Isiliye nahi khaya... bhookh mar gayi thi!",
  },
  {
    joke: "पप्पू: मम्मी aaj school nahi jaunga...\nमम्मी: Kyun?\nपप्पू: Teacher kehti hai hero bano, aur principal kehte hai zero ho!\nMain confuse ho gaya hoon!",
  },
  {
    joke: "डॉक्टर: Jab tum hasta ho to kya mehsoos karte ho?\nमरीज: Pet me marod uthti hai... lagta hai fir se biwi ka mazaak uda diya!",
  },
  {
    joke: "टीचर: Batao, ek saal me kitne hafte hote hain?\nछात्र: 52... aur har hafte me Monday ka dukh free me aata hai!",
  },
  {
    joke: "बबलू apni GF ko coffee shop le gaya.\nवेटर: Sir, aapke liye kya laoon?\nबबलू: Himmat! Mujhe uske papa se baat karni hai!",
  },
  {
    joke: "राजू: Yaar aaj to gajab ho gaya...\nगोलू: Kya?\nराजू: Sapne me bhi EMI wala aa gaya... bola neend baad me lena, pehle payment de!",
  },
  {
    joke: "पंडित: Beta, shaadi ke baad sab badal jaata hai.\nलड़का: Sach me?\nपंडित: Haan, sabse pehle to WiFi ka password!",
  },
  {
    joke: "राहुल: Bhai tu itna smart kaise lagta hai?\nदोस्त: Photo me filter laga ke, reality me mask pehn ke!",
  },
  {
    joke: "टीचर: Jab main tumhare taraf dekhta hoon to mujhe tumhari aankhon me kya dikhta hai?\nबच्चा: Neend!",
  },
  {
    joke: "गोलू: Kal exam hai bhai, par kuch yaad nahi ho raha!\nसोनू: Bhool ja, tension kam hoga!",
  },
  {
    joke: "पत्नी: Agar main mar gayi to kya karoge?\nपति: Party!\nपत्नी: Matlab tumhe farak nahi padega?\nपति: Arey dard mein hi to party hogi!",
  },
  {
    joke: "डॉक्टर: Aapko kis baat ka stress hai?\nराहुल: Biwi ghar par hai aur maa ghar jaane wali nahi!",
  },
  {
    joke: "बच्चा स्कूल से रोते हुए आया...\nमम्मी: Kya hua?\nबच्चा: Sir ne bola ki school tumhare jaise bewakoofon ke liye nahi hai!",
  },
  {
    joke: "गोलू: Mummy ne kaha TV kam dekh, warna aankhen kharab ho jayengi!\nअब mobile me Netflix dekh raha hoon, aankh bhi bachi aur content bhi!",
  },
  {
    joke: "पप्पू: Meri GF mujhse khafa hai...\nगोलू: Kya kiya?\nपप्पू: Uske Insta post pe sirf 1 baar like kiya!",
  },
  {
    joke: "राजू: Agar meri shaadi hoti to life set hoti!\nगोलू: Tere wajah se kisi ki life barbaad ho jaati bhai!",
  },
  {
    joke: "डॉक्टर: Aapko rest lena chahiye...\nराहुल: Kaash meri job bhi doctor jaisi hoti – bolna aur paisa lena!",
  },
  {
    joke: "टीचर: Tumne homework kyun nahi kiya?\nबच्चा: Mobile ka net khatam ho gaya tha, aur bina YouTube ke main padh nahi sakta!",
  },
];

app.listen(process.env.PORT, () => {
  console.log("server started successfully");
});
app.get("/", (req, res) => {
  res.redirect("/randomjokes");
});
app.get("/randomjokes", (req, res) => {
  let idx = Math.floor(Math.random() * hindiJokes.length);
  res.json(hindiJokes[idx]);
  console.log(hindiJokes[idx]);
});

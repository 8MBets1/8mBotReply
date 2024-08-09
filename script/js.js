document.addEventListener("DOMContentLoaded", function () {
  const problemSelect = document.getElementById("problemSelect");
  const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");

  const responses = {
    1: `🎉স্বাগতম আপনাকে 8Mbets অনলাইন বেটিং সাইটে।🎉<br><br>
      8Mbets এ আপনারা অনলাইনে বেটিং করতে পারবেন এবং টাকা জিততে পারেন খেলার মাধ্যমে। বাংলাদেশের সব থেকে বড় অনলাইন বেটিং সাইট এটি। আপনি আমাদের এখান থেকে একাউন্ট খুলে বেট ধরতে পারেন। যেমন ক্রিকেট খেলা কিংবা স্লট কিংবা ক্যাসিনো বিভিন্ন ধরনের খেলা করতে পারেন।<br><br>
      ⚾️প্রথম ডিপোজিটে পেয়ে যাবেন ১০০%  ওয়েলকাম বোনাস,  আরো আছে আমাদের সাপ্তাহিক বোনাস এবং রিলোড বোনাস।<br>
      ⚾️লস বোনাস এখন ১০% পর্যন্ত, প্রতি সোমবার অটো দেওয়া হয়, পুরো সপ্তাহের লস বোনাস।<br>
      ⚾️সাপ্তাহিক টার্গেট পূরণ করে পাবেন VIP বোনাস ।<br>
      ⚾️বন্ধুকে রেফার করে নিতে পারবেন ৫০০ টাকা , প্রতি রেফারে সাথে পাবেন রেফার ডিপোজিট কমিশন।<br><br>
      ✔আপনাকে আমি একটা লিংক দিয়ে দিচ্ছি এই লিঙ্কে ঢুকে আপনি নতুন একাউন্ট খুলতে পারবেন আর আমাদের সাইটে খেলতে পারবেন।  একাউন্ট খুলুন : <a href="https://shorturl.at/amnxY" target="_blank">https://shorturl.at/amnxY</a><br>
      ✔ভিডিও দেখুন কিভাবে অ্যাকাউন্ট খুলতে হবে আমাদের এখানে। <a href="https://shorturl.at/tAOQS" target="_blank">https://shorturl.at/tAOQS</a><br><br>`,

    2: 'আপনাকে আমি একটা লিংক দিয়ে দিচ্ছি এই লিঙ্কে ঢুকে আপনি নতুন একাউন্ট খুলতে পারবেন আর আমাদের সাইটে খেলতে পারবেন। একাউন্ট খুলুন : <a href="https://shorturl.at/amnxY" target="_blank">https://shorturl.at/amnxY</a><br><br>✔️ভিডিও দেখুন কিভাবে অ্যাকাউন্ট খুলবেন : <a href="https://shorturl.at/tAOQS" target="_blank">https://shorturl.at/tAOQS</a>',

    3: {
      question: "নিচে থেকে সিলেক্ট করুন আপনার কোন সমস্যাটি হচ্ছে 👇",
      options: {
        1: "আমি অনেক্ষণ আগে উত্তোলন করেছি এখনো টাকা আসেনি।",
        2: "উত্তোলন কিভাবে করতে হয় আমি জানি না , আমাকে একটা ভিডিও দিন উত্তোলনের।",
        3: "উত্তোলন দিয়েছি কিন্তু বাতিল হয়ে যাচ্ছে কেন?",
      },

      answers: {
        2: 'ঠিক আছে স্যার আমি আপনাকে নিচের লিংক দিয়ে দিচ্ছি এখান থেকে ক্লিক করে আপনি দেখতে পারবেন কিভাবে উত্তোলন দিতে হয়। লিংক : <a href="https://t.ly/Smb8a" target="_blank">https://t.ly/Smb8a</a> ',

        3: "উত্তোলন দেওয়ার পরেও যদি বাতিল হয়ে যায় তার মানে হল আপনার টান ওভার পূরণ হয়নি।  অনুগ্রহ করে আপনি আপনার টার্ন ওভার পূরণ করে নেন তারপরে উত্তোলন দিন। <br/> <br/> বোনাসকেন্দ্র থেকে বোনাস টার্ন ওভার আর উত্তোলনের ওখান থেকে ডিপোজিট টার্নওভার দেখা চেক করতে পারবেন।",
      },

      followUps: {
        1: {
          question: "নিচে থেকে সিলেক্ট করুন আপনি কত সময় আগে উত্তোলন দিয়েছেন 👇",
          options: {
            1: "এই মাত্র বা ৫ মিনিট আগে উত্তোলন দিয়েছি আমি।",
            2: "প্রায় ২০ মিনিট হয়েছে উত্তোলন দিয়েছি আমি ।",
          },
          answers: {
            1: "আসলে উত্তোলন হতে সাধারনত ১০/২০ মিনিট সময় লাগতে পারে , অনুগ্রহ করে কিছুটা সময় দিন স্যার । আশা করি আপনার উত্তোলনের টাকা অ্যাড হয়ে যাবে।",
            2: 'যদি ২০ মিনিট হয়ে যাই তবে অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/15562614/" target="_blank">সরাসরি কথা বলুন</a>',
          },
        },
      },
    },

    4: ` অনুগ্রহ করে এফিলিয়েট এজেন্ট সম্পর্কিত সমস্ত তথ্য জানতে আমি একটা নিচের লিংক দিয়ে দিচ্ছি এই লিঙ্কে ক্লিক করে হোয়াটসঅ্যাপে ফোন করুন।
  ✔️ <a href="https://wa.link/q72mog" target="_blank">https://wa.link/q72mog</a>`,

    2: 'আপনাকে আমি একটা লিংক দিয়ে দিচ্ছি এই লিঙ্কে ঢুকে আপনি নতুন একাউন্ট খুলতে পারবেন আর আমাদের সাইটে খেলতে পারবেন। একাউন্ট খুলুন : <a href="https://shorturl.at/amnxY" target="_blank">https://shorturl.at/amnxY</a><br><br>✔️ভিডিও দেখুন কিভাবে অ্যাকাউন্ট খুলবেন : <a href="https://shorturl.at/tAOQS" target="_blank">https://shorturl.at/tAOQS</a>',

    5: {
      question: "নিচে থেকে সিলেক্ট করুন কোন বোনাস টা সম্পর্কে জানতে চান👇",
      options: {
        1: "ফ্রি বোনাস সম্পর্কে জানতে চাই",
        2: "১৫০ টাকা ফ্রি বোনাস ",
        3: "প্রথম ডিপোজিট ৩০০ টাকা স্বাগত্বম বোনাস ",
        4: "প্রতি ডিপোজিটে ১০০ টাকা বোনাস ",
        5: "১০০% স্বাগতম বোনাস ",
        6: "রেফার বোনাস ",
        7: "লস বোনাস ১০% ",
        8: "ভেরিফাই বোনাস ২০০ টাকা  ",
      },
      answers: {
        1: "আন্তরিকভাবে দুঃখিত স্যার আমাদের এখন আপাতত কোন ফ্রী বোনাস নাই।",

        2: 'আন্তরিকভাবে দুঃখিত স্যার আমাদের ৳১৫০ বা ওয়েলকাম সাইনাপ বোনাসের মেয়াদ শেষ হয়ে গেছে, এখন আপনি চাইলে অ্যাকাউন্ট ভেরিফাই করে ৳২০০ফ্রি অথবা আমাদের অন্যান্য ডিপোজিট এর ওপরে নতুন বোনাসগুলি নিতে পারেন যেমন প্রতিদিন ১০০ টাকা ।<br/><br/>⚡সকল বোনাস দেখতে ক্লিক করুন :  <a href="https://www.8mbets1.com/bn-bd/promotions" target="_blank">https://www.8mbets1.com/bn-bd/promotions</a><br/><br/>এছাড়া আপনি যদি আমাদের এখানে ফ্রি খেলতে চান তাহলে বন্ধুকে রেফার করে 500 টাকা ফ্রি ও আজীবন কমিশন পেতে পারেন এছাড়াও আপনি আমাদের এজেন্ট হতে চাইলে এজেন্ট হয়ে কমিশন পাবেন ।',

        3: '⚡️আপনি যদি আমাদের নতুন সদস্য হন তাহলে আপনি পাবেন ৫০০ টাকা ডিপোজিটে ৩০০ টাকা বোনাস । এই বোনাসটি নিলে আপনাকে ৫গুণ টান ওভার কমপ্লিট করতে হবে এবং এই বোনাসটিতে আপনি । এই বোনাস নিয়ে  শুধুমাত্র স্লট, স্পোর্ট, ক্রিকেট এবং ক্রাশ গেম খেলতে পারবেন। মনে রাখবেন এটি একটি ওয়েলকাম বোনাস এই বোনাস টি সর্বোচ্চ একবারই নেওয়া যায় এবং এটা নিতে প্রোফাইল ভেরিফাই করতে হয়।<br/><br/>✔️আরো জানতে :  <a href="https://shorturl.at/ahyZ0" target="_blank">https://shorturl.at/ahyZ0</a><br/>✔️ভিডিও দেখুন :  <a href="https://rb.gy/6p2nou" target="_blank">https://rb.gy/6p2nou</a>',

        4: '⚡️স্যার আপনি যদি  কমপক্ষে ৳300 ডিপোজিট করে থাকেন তবে আপনি ৳100 পর্যন্ত বোনাস নিতে পারবেন, প্রতিদিন একবার করে।<br/><br/>📣প্রতিদিন ৳100 বোনাসটি নেওয়ার জন্য প্রথমে আপনাকে কমপক্ষে ৳300 ডিপোজিট করতে হবে এবং তারপর চলে যেতে হবে বোনাস কেন্দ্রে এবং সেখানে আপনি দেখতে পাবেন প্রতিদিন ৳100 বোনাস কেলেম করার অপশন আসছে,  ওখান থেকে আপনি ৳100 কেলেম করে নিতে পারেন।<br/><br/>মনে রাখবেন ডিপোজিট করার পরেই বোনাস ক্লেম করে নেবেন কারণ আপনি যদি খেলা শুরু করেন এবং তারপর বোনাস নিতে যান তাহলে বোনাস থেকে বঞ্চিত হবেন । দয়া করে ডিপোজিট করার পরেই বোনাস ক্লেম করে নেবেন।<br/><br/>✔️আরো জানতে :  <a href=" https://shorturl.at/vSOqM" target="_blank"> https://shorturl.at/vSOqM</a><br/>✔️ভিডিও দেখুন :  <a href="https://rb.gy/6p2nou" target="_blank">https://rb.gy/6p2nou</a>',

        5: '⚡️আপনি যদি আমাদের নতুন সদস্য হন তাহলে আপনি পাবেন ১০০% বোনাস প্রথম ডিপোজিটে সর্বোচ্চ ২৫ হাজার টাকা পর্যন্ত। আপনি কমপক্ষে ৫০০ টাকা ডিপজিট করে বোনাস টি নিতে পারবেন।<br/><br/>📣 আপনি যদি বুঝতে না পারেন আপনি যে বোনাস টি খুঁজছেন সেটি কোনটা তাহলে বোনাসের নিচে বাম দিকে ধরন ক্লিক করবেন এবং বিস্তারিত দেখতে পাবেন । যদি কোনরকম সমস্যার সম্মুখীন হন অবশ্যই আমাদেরকে জানাবেন। মনে রাখবেন এটা নিতে প্রোফাইল ভেরিফাই করতে হয়।<br/><br/>✔️আরো জানতে :  <a href="https://shorturl.at/zB65E" target="_blank">https://shorturl.at/zB65E</a><br/>✔️ভিডিও দেখুন :  <a href="https://rb.gy/6p2nou" target="_blank">https://rb.gy/6p2nou</a>',

        6: '⚡রেফারের ৫০০ টাকা বোনাস পাওয়ার জন্য অবশ্যই যাকে রেফার করেছেন তাকে কমপক্ষে ৳২০০০ ডিপোজিট এবং কমপক্ষে ১২০০০ টান ওভার করতে হবে। সে যখন এই দুটি শর্ত পূরণ করবে তখন আপনি আপনার রেফার বোনাস ৫০০ টাকা অটোমেটিক পেয়ে যাবেন মেইন একাউন্ট এ । এছাড়াও আপনি যাকে রেফার করেছেন তার প্রত্যেকবার ডিপোজিট এর উপর কমিশন পাবেন।<br/><br/>⚾️মনে করুন আপনি হাসানকে রেফার করলেন তাহলে হাসানের ডিপোজিট এর উপর আপনি পাবেন ২.৫০% কমিশন।<br/>⚾️হাসান যদি আবার হারুনকে রেফার করে তাহলে হারুনের ডিপোজিট এর উপর আপনি পাবেন ১.০০% কমিশন।<br/>⚾️হারুন যদি আবার তামিমকে রেফার করে তাহলে তামিমের ডিপোজিট এর উপর আবার আপনি পাবেন ০.৪০% কমিশন।<br/><br/>আর এইসব রেফার করার পর আপনার কমিশন যদি ৩৮৮ টাকার উপরে হয়ে থাকে তাহলে আপনি আরো কমিশন পাবেন আমাদের তরফ থেকে। রেফার কমিশন প্রতি বুধবারে সন্ধ্যা ছটার ভেতরে দেওয়া হবে, আগের সপ্তাহের সোমবার থেকে হিসাব করে।<br/><br/>✔️আরো জানতে :  <a href="https://shorturl.at/qQS89" target="_blank">https://shorturl.at/qQS89</a><br/>✔️ভিডিও দেখুন :  <a href=" https://8mbets.social/#refer/" target="_blank"> https://8mbets.social/#refer/</a>',

        7: '⚡️ তথ্য প্রদানের জন্য ধন্যবাদ এবং সমস্যাটিতে দুখিত আমরা, আপনি এক সপ্তাহে যত টাকা লস করবেন তার উপরে আমরা % হিসেবে লস বোনাস দেব , প্রতি সোমবার সন্ধ্যা ছয়টায়।ভিআইপি লেভেলে কত লস বোনাস তার হিসাব নিচে দেওয়া হল ।<br/><br/>⚾️ 2% লস বোনাস পাবেন VIP 5 থেকে 10<br/>⚾️ 3% লস বোনাস পাবেন VIP 11 থেকে 20<br/>⚾️ 4% লস বোনাস পাবেন VIP 21 থেকে 30<br/>⚾️ 5% লস বোনাস পাবেন VIP 31 থেকে 40<br/>⚾️ 6% লস বোনাস পাবেন VIP 41 থেকে 49<br/>⚾️ 10% লস বোনাস পাবেন VIP 50 যারা<br/><br/>📣প্রতি সোমবার সন্ধ্যা ৬টায় (GMT+6) অটো একাউন্ট এ সাপ্তাহিক লস বোনাস দেওয়া হয় , কমপক্ষে ৳3০০০ লস থাকতে হবে। আরো জানতে : <a href="https://shorturl.at/eqyW1" target="_blank">https://shorturl.at/eqyW1</a>',

        8: '8Mbets এ আপনার নাম্বার, ইমেইল, ব্যাংক একাউন্ট, এবং প্রোফাইল ভেরিফাই করে ২০০ টাকা ফ্রি পেতে পারেন।<br/><br/>আরো জানতে : <a href="https://rb.gy/andaw6" target="_blank">https://rb.gy/andaw6</a>',
      },
    },

    5: {
      question: "নিচে থেকে সিলেক্ট করুন কোন বোনাস টা সম্পর্কে জানতে চান👇",
      options: {
        1: "ফ্রি বোনাস সম্পর্কে জানতে চাই",
        2: "১৫০ টাকা ফ্রি বোনাস ",
        3: "প্রথম ডিপোজিট ৩০০ টাকা স্বাগত্বম বোনাস ",
        4: "প্রতি ডিপোজিটে ১০০ টাকা বোনাস ",
        5: "১০০% স্বাগতম বোনাস ",
        6: "রেফার বোনাস ",
        7: "লস বোনাস ১০% ",
        8: "ভেরিফাই বোনাস ২০০ টাকা  ",
      },
      answers: {
        1: "আন্তরিকভাবে দুঃখিত স্যার আমাদের এখন আপাতত কোন ফ্রী বোনাস নাই।",

        2: 'আন্তরিকভাবে দুঃখিত স্যার আমাদের ৳১৫০ বা ওয়েলকাম সাইনাপ বোনাসের মেয়াদ শেষ হয়ে গেছে, এখন আপনি চাইলে অ্যাকাউন্ট ভেরিফাই করে ৳২০০ফ্রি অথবা আমাদের অন্যান্য ডিপোজিট এর ওপরে নতুন বোনাসগুলি নিতে পারেন যেমন প্রতিদিন ১০০ টাকা ।<br/><br/>⚡সকল বোনাস দেখতে ক্লিক করুন :  <a href="https://www.8mbets1.com/bn-bd/promotions" target="_blank">https://www.8mbets1.com/bn-bd/promotions</a><br/><br/>এছাড়া আপনি যদি আমাদের এখানে ফ্রি খেলতে চান তাহলে বন্ধুকে রেফার করে 500 টাকা ফ্রি ও আজীবন কমিশন পেতে পারেন এছাড়াও আপনি আমাদের এজেন্ট হতে চাইলে এজেন্ট হয়ে কমিশন পাবেন ।',

        3: '⚡️আপনি যদি আমাদের নতুন সদস্য হন তাহলে আপনি পাবেন ৫০০ টাকা ডিপোজিটে ৩০০ টাকা বোনাস । এই বোনাসটি নিলে আপনাকে ৫গুণ টান ওভার কমপ্লিট করতে হবে এবং এই বোনাসটিতে আপনি । এই বোনাস নিয়ে  শুধুমাত্র স্লট, স্পোর্ট, ক্রিকেট এবং ক্রাশ গেম খেলতে পারবেন। মনে রাখবেন এটি একটি ওয়েলকাম বোনাস এই বোনাস টি সর্বোচ্চ একবারই নেওয়া যায় এবং এটা নিতে প্রোফাইল ভেরিফাই করতে হয়।<br/><br/>✔️আরো জানতে :  <a href="https://shorturl.at/ahyZ0" target="_blank">https://shorturl.at/ahyZ0</a><br/>✔️ভিডিও দেখুন :  <a href="https://rb.gy/6p2nou" target="_blank">https://rb.gy/6p2nou</a>',

        4: '⚡️স্যার আপনি যদি  কমপক্ষে ৳300 ডিপোজিট করে থাকেন তবে আপনি ৳100 পর্যন্ত বোনাস নিতে পারবেন, প্রতিদিন একবার করে।<br/><br/>📣প্রতিদিন ৳100 বোনাসটি নেওয়ার জন্য প্রথমে আপনাকে কমপক্ষে ৳300 ডিপোজিট করতে হবে এবং তারপর চলে যেতে হবে বোনাস কেন্দ্রে এবং সেখানে আপনি দেখতে পাবেন প্রতিদিন ৳100 বোনাস কেলেম করার অপশন আসছে,  ওখান থেকে আপনি ৳100 কেলেম করে নিতে পারেন।<br/><br/>মনে রাখবেন ডিপোজিট করার পরেই বোনাস ক্লেম করে নেবেন কারণ আপনি যদি খেলা শুরু করেন এবং তারপর বোনাস নিতে যান তাহলে বোনাস থেকে বঞ্চিত হবেন । দয়া করে ডিপোজিট করার পরেই বোনাস ক্লেম করে নেবেন।<br/><br/>✔️আরো জানতে :  <a href=" https://shorturl.at/vSOqM" target="_blank"> https://shorturl.at/vSOqM</a><br/>✔️ভিডিও দেখুন :  <a href="https://rb.gy/6p2nou" target="_blank">https://rb.gy/6p2nou</a>',

        5: '⚡️আপনি যদি আমাদের নতুন সদস্য হন তাহলে আপনি পাবেন ১০০% বোনাস প্রথম ডিপোজিটে সর্বোচ্চ ২৫ হাজার টাকা পর্যন্ত। আপনি কমপক্ষে ৫০০ টাকা ডিপজিট করে বোনাস টি নিতে পারবেন।<br/><br/>📣 আপনি যদি বুঝতে না পারেন আপনি যে বোনাস টি খুঁজছেন সেটি কোনটা তাহলে বোনাসের নিচে বাম দিকে ধরন ক্লিক করবেন এবং বিস্তারিত দেখতে পাবেন । যদি কোনরকম সমস্যার সম্মুখীন হন অবশ্যই আমাদেরকে জানাবেন। মনে রাখবেন এটা নিতে প্রোফাইল ভেরিফাই করতে হয়।<br/><br/>✔️আরো জানতে :  <a href="https://shorturl.at/zB65E" target="_blank">https://shorturl.at/zB65E</a><br/>✔️ভিডিও দেখুন :  <a href="https://rb.gy/6p2nou" target="_blank">https://rb.gy/6p2nou</a>',

        6: '⚡রেফারের ৫০০ টাকা বোনাস পাওয়ার জন্য অবশ্যই যাকে রেফার করেছেন তাকে কমপক্ষে ৳২০০০ ডিপোজিট এবং কমপক্ষে ১২০০০ টান ওভার করতে হবে। সে যখন এই দুটি শর্ত পূরণ করবে তখন আপনি আপনার রেফার বোনাস ৫০০ টাকা অটোমেটিক পেয়ে যাবেন মেইন একাউন্ট এ । এছাড়াও আপনি যাকে রেফার করেছেন তার প্রত্যেকবার ডিপোজিট এর উপর কমিশন পাবেন।<br/><br/>⚾️মনে করুন আপনি হাসানকে রেফার করলেন তাহলে হাসানের ডিপোজিট এর উপর আপনি পাবেন ২.৫০% কমিশন।<br/>⚾️হাসান যদি আবার হারুনকে রেফার করে তাহলে হারুনের ডিপোজিট এর উপর আপনি পাবেন ১.০০% কমিশন।<br/>⚾️হারুন যদি আবার তামিমকে রেফার করে তাহলে তামিমের ডিপোজিট এর উপর আবার আপনি পাবেন ০.৪০% কমিশন।<br/><br/>আর এইসব রেফার করার পর আপনার কমিশন যদি ৩৮৮ টাকার উপরে হয়ে থাকে তাহলে আপনি আরো কমিশন পাবেন আমাদের তরফ থেকে। রেফার কমিশন প্রতি বুধবারে সন্ধ্যা ছটার ভেতরে দেওয়া হবে, আগের সপ্তাহের সোমবার থেকে হিসাব করে।<br/><br/>✔️আরো জানতে :  <a href="https://shorturl.at/qQS89" target="_blank">https://shorturl.at/qQS89</a><br/>✔️ভিডিও দেখুন :  <a href=" https://8mbets.social/#refer/" target="_blank"> https://8mbets.social/#refer/</a>',

        7: '⚡️ তথ্য প্রদানের জন্য ধন্যবাদ এবং সমস্যাটিতে দুখিত আমরা, আপনি এক সপ্তাহে যত টাকা লস করবেন তার উপরে আমরা % হিসেবে লস বোনাস দেব , প্রতি সোমবার সন্ধ্যা ছয়টায়।ভিআইপি লেভেলে কত লস বোনাস তার হিসাব নিচে দেওয়া হল ।<br/><br/>⚾️ 2% লস বোনাস পাবেন VIP 5 থেকে 10<br/>⚾️ 3% লস বোনাস পাবেন VIP 11 থেকে 20<br/>⚾️ 4% লস বোনাস পাবেন VIP 21 থেকে 30<br/>⚾️ 5% লস বোনাস পাবেন VIP 31 থেকে 40<br/>⚾️ 6% লস বোনাস পাবেন VIP 41 থেকে 49<br/>⚾️ 10% লস বোনাস পাবেন VIP 50 যারা<br/><br/>📣প্রতি সোমবার সন্ধ্যা ৬টায় (GMT+6) অটো একাউন্ট এ সাপ্তাহিক লস বোনাস দেওয়া হয় , কমপক্ষে ৳3০০০ লস থাকতে হবে। আরো জানতে : <a href="https://shorturl.at/eqyW1" target="_blank">https://shorturl.at/eqyW1</a>',

        8: '8Mbets এ আপনার নাম্বার, ইমেইল, ব্যাংক একাউন্ট, এবং প্রোফাইল ভেরিফাই করে ২০০ টাকা ফ্রি পেতে পারেন।<br/><br/>আরো জানতে : <a href="https://rb.gy/andaw6" target="_blank">https://rb.gy/andaw6</a>',
      },
    },

    6: {
      question: "নিচে থেকে সিলেক্ট করুন আপনি কি জানতে চান👇",
      options: {
        1: "আপনাদের অফিস কোথায় ?",
        2: "আমি কি এখানে send মানি করতে পারব ? ",
        3: "ডিপোজিট / উত্তোলনে কতক্ষণ সময় লাগে ? ",
        4: "আমি কি ডিপোজিট ছাড়া বোনাস নিতে পারব? ",
        5: "এজেন্ট অ্যাকাউন্ট নিতে কি টাকা লাগে?",
        6: "আমি ৩০০ টাকার নিচে ডিপোজিট করে ফেলেছি এখন কি করতে পারি?",
        7: "আমি একজনকে রেফার করেছি কিন্তু এখনো রেফার কমিশন পাইনি ",
        8: "আমার একাউন্ট এর পাসওয়ার্ড ভুলে গিয়েছি কি করতে পারি আমি এখন?",
      },
      answers: {
        1: "আমাদের অফিস ঢাকা গুলশান ২ তে অবস্থিত।",
        2: "না স্যার , আমাদের এখানে শুধু ক্যাশ আউট করতে পারবেন। ",
        3: "সাধারণত ক্যাশ আউট করার পরে আমাদের এখানে সাবমিট যদি করেন তাহলে সেই ডিপোজিট হতে ১০ থেকে ২০ সেকেন্ড সময় লাগে।  আর উত্তোলন হতে সাধারণত ১০ থেকে ২০ মিনিট লাগে।   তবে যদি নেটওয়ার্ক ইস্যু অথবা অনেক ডিপোজিট উত্তোলনের চাপ থাকে তাহলে সেই ক্ষেত্রে কিছুটা বেশি সবাই লেগে যায়।",
        4: "বোনাস নিতে গেলে আপনাকে অবশ্যই ডিপোজিট করতে হবে এবং তারপরে বোনাস কেন্দ্র থেকে বোনাস কেলেম করে নিতে হবে মনে রাখবেন ডিপোজিট করার পরে যদি বোনাস না ক্লেম করেন এবং তারপরে খেলা শুরু করে দেন তাহলে আর বোনাস পাবেন না",
        5: "আমাদের এখানে এজেন্ট বা এফিলিয়েট একাউন্ট সম্পন্ন বিনামূল্যে খুলতে পারবেন কোনরকম টাকা দিতে হবে না , আপনি এজেন্ট হয়ে আরো প্রতি সপ্তাহে সোমবারে কমিশন পাবেন। ",
        6: "যেহেতু আমাদের এখানে নিয়ম কমপক্ষে ৩০০ টাকার ডিপোজিট করতে হবে কিন্তু আপনি ৩০০ টাকার কম ডিপোজিট করে ফেলেছেন। এক্ষেত্রে আপনি আরও একটা ২৯০ টাকার ডিপোজিট করুন এবং বর্তমানে যে ক্যাশ আউট করেছেন এটার সাথে দুটো মিলে একসাথে জমা দেবেন। মনে রাখবেন দুটো ক্যাশ আউট স্ক্রিনশটই আপলোড করবেন আর সাথে দুটো ট্রানজেকশন আইডি ওখানে লিখে দেবেন এবং আরো মনে রাখবেন দুটো রশিদ মিলে যত টাকা হয় সেই দুটো টাকার পরিমাণ ওখানে লিখে দেবেন। ",
        7: "যাকে রেফার করেছেন তাকে কমপক্ষে 2000 টাকার ডিপোজিট এবং ১২০০০ টাকা টান ওভার কমপ্লিট করতে হবে। তারপরে আপনি আপনার রেফার বোনাস পাবেন ৫০০ টাকা।  এছাড়া যাকে আপনি রেফার করেছেন তার মোট ডিপোজিট এর উপরে প্রতি সপ্তাহে আপনি কমিশন পাবেন প্রতি বুধবারে সন্ধা ৬ টা তে ।",
        8: 'যেখান থেকে লগইন করতে হয় সেই লগইনের নিচেই দেখুন পাসওয়ার্ড ভুলে গেছেন লেখা আছে ওখানে ক্লিক করুন । তারপর আপনার নিবন্ধিত নাম্বার দিন। আপনার নিবন্ধিত মোবাইল নাম্বারে একটি আট ডিজিটের পিন নাম্বার যাবে। ওই পিন নাম্বারটি টাইপ করে বসিয়ে দিন । তারপর আপনি মনের মত একটি নতুন পাসওয়ার্ড বসিয়ে দিন তারপর সেভ করে দিন।আরো জানতে ভিডিও দেখুন :<a href="https://t.ly/ZakcN" target="_blank">https://t.ly/ZakcN</a> ',
      },
    },

    7: '⚡️ **Thank you for providing the information. We regret the issue. For all details related to affiliate agents, please call on WhatsApp using the link below:** <br><br> ✔️ <a href="https://wa.link/q72mog" target="_blank">Click here to contact us on WhatsApp</a> <br><br> 🎲 **%customer-name% Sir, can I assist you with anything else?**',
  };

  function appendMessage(content, type) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${type}`;
    messageDiv.innerHTML = `<p>${content}</p>`; // Make sure HTML is rendered
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }

  function displayOptions(options, callback) {
    const select = document.createElement("select");
    select.id = "dynamicSelect";
    select.innerHTML = '<option value="" disabled selected>জবাব বাছুন</option>';
    for (const [value, text] of Object.entries(options)) {
      select.innerHTML += `<option value="${value}">${text}</option>`;
    }
    userInput.innerHTML = "";
    userInput.appendChild(select);

    select.addEventListener("change", function () {
      const selectedValue = select.value;
      appendMessage(select.options[select.selectedIndex].text, "user"); // Display the user's choice
      callback(selectedValue);
    });
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "typing-indicator";
    typingDiv.innerHTML =
      '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    return typingDiv;
  }

  function hideTypingIndicator(typingDiv) {
    chatBox.removeChild(typingDiv);
  }

  function handleSelection(selection) {
    const response = responses[selection];
    if (typeof response === "string") {
      const typingDiv = showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator(typingDiv);
        appendMessage(response, "bot");
      }, 1000); // Simulate delay for bot response
    } else {
      const typingDiv = showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator(typingDiv);
        appendMessage(response.question, "bot");
        displayOptions(response.options, function (option) {
          const followUp = response.followUps
            ? response.followUps[option]
            : null;
          const answer = response.answers ? response.answers[option] : null;

          if (followUp) {
            const typingDivFollowUp = showTypingIndicator();
            setTimeout(() => {
              hideTypingIndicator(typingDivFollowUp);
              appendMessage(followUp.question, "bot");
              displayOptions(followUp.options, function (subOption) {
                const finalAnswer = followUp.answers[subOption];
                const typingDivFinal = showTypingIndicator();
                setTimeout(() => {
                  hideTypingIndicator(typingDivFinal);
                  appendMessage(
                    finalAnswer || "Sorry, I did not understand that.",
                    "bot"
                  );
                }, 1000); // Simulate delay for bot response
              });
            }, 1000); // Simulate delay for bot response
          } else {
            const typingDivAnswer = showTypingIndicator();
            setTimeout(() => {
              hideTypingIndicator(typingDivAnswer);
              appendMessage(
                answer || "Sorry, I did not understand that.",
                "bot"
              );
            }, 1000); // Simulate delay for bot response
          }
        });
      }, 1000); // Simulate delay for bot response
    }
  }

  problemSelect.addEventListener("change", function () {
    const selectedValue = problemSelect.value;
    if (selectedValue) {
      appendMessage(
        problemSelect.options[problemSelect.selectedIndex].text,
        "user"
      );
      setTimeout(() => {
        handleSelection(selectedValue);
      }, 1000); // Simulate delay for bot response
    }
  });
});

// Refresh the page
document.getElementById("refreshLink").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  var refreshLink = document.getElementById("refreshLink");

  // Add the rotate class
  refreshLink.classList.add("rotate");

  // Remove the class after the animation ends to allow it to play again
  setTimeout(function () {
    refreshLink.classList.remove("rotate");
    // Refresh the page after the animation ends
    location.reload();
  }, 500); // Match this duration with the CSS animation duration
});

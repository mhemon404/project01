// কাস্টমাইজ করার জন্য নিচের লিংকগুলো পরিবর্তন করুন
const videoID = "SGf1ZByL4Ec";  // ইউটিউব ভিডিও ID দিন
const downloadLink = "https://github.com/mhemon404/project01/releases/download/Panel/Sportzfy_TV_v5.0.apk"; // সফটওয়্যার ডাউনলোড লিংক দিন

// ভিডিও সেট করা
document.getElementById("videoFrame").src = `https://www.youtube.com/embed/${videoID}`;

// ডাউনলোড বাটনের লিংক সেট করা
document.getElementById("downloadButton").href = downloadLink;

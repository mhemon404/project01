// কাস্টমাইজ করার জন্য নিচের লিংকগুলো পরিবর্তন করুন
const videoID = "I2bvoO0CoDQ";  // ইউটিউব ভিডিও ID দিন
const downloadLink = "SOFTWARE_DOWNLOAD_LINK"; // সফটওয়্যার ডাউনলোড লিংক দিন

// ভিডিও সেট করা
document.getElementById("videoFrame").src = `https://www.youtube.com/embed/${videoID}`;

// ডাউনলোড বাটনের লিংক সেট করা
document.getElementById("downloadButton").href = downloadLink;
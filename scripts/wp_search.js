const https = require('https');

const keyword = process.argv[2] || 'マジック';
const encodedKeyword = encodeURIComponent(keyword);
const url = `https://comp-office.com/wp-json/wp/v2/posts?search=${encodedKeyword}&_fields=title,link,date&per_page=5`;

console.log(`Searching for: ${keyword}...`);
console.log(`URL: ${url}\n`);

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
};

https.get(url, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
                const posts = JSON.parse(data);
                if (posts.length === 0) {
                    console.log('No posts found.');
                } else {
                    posts.forEach(post => {
                        console.log(`Title: ${post.title.rendered}`);
                        console.log(`Link: ${post.link}`);
                        console.log(`Date: ${post.date.substring(0, 10)}`);
                        console.log('---');
                    });
                }
            } catch (e) {
                console.error('Error parsing JSON:', e.message);
            }
        } else {
            console.error(`Request failed with status code: ${res.statusCode}`);
        }
    });

}).on('error', (err) => {
    console.error('Error:', err.message);
});

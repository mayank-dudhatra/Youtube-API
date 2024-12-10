const express = require("express")
const app = express();
app.use(express.json());
const cors = require("cors")
app.use(cors());


const data = [
    {id: 1, title: 'Home', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true'},
    {id: 2, title: 'Explores', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true'},
    {id: 3, title: 'Shorts', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true'},
    {id: 4, title: 'Subscription', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true'}

];

const data2 = [
    {id: 1, title: 'Library', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true'},
    {id: 2, title: 'Histoy', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true'},
    {id: 3, title: 'Your Videos', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true'},
    {id: 4, title: 'Watch Later', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true'},
    {id: 3, title: 'Liked Videos', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true'},
    {id: 3, title: 'Show More', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true'}
];

const data3 =[
    {id: 1, title: 'Nadir on The Go', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true'},
    {id: 2, title: 'Coke Studio Bangla', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'},
    {id: 3, title: 'MKDHD', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true'},
    {id: 4, title: 'Figma', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true'},
    {id: 5, title: 'ATC Android', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'},
    {id: 6, title: 'Alux.com', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true'}
];

const feed =[
    {id: 1, name: 'Cook Studio'},
    {id: 2, name: 'UX'},
    {id: 3, name: 'Case Study'},
    {id: 4, name: 'Music'},
    {id: 5, name: 'Bangla Lofi'},
    {id: 6, name: 'Tour'},
    {id: 7, name: 'Saintmartin'},
    {id: 8, name: 'Tech'},
    {id: 9, name: 'iphone 13'},
    {id: 10, name: 'User Interface Design'},
    {id: 11, name: 'Computer'}

];

const video =[
    {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 2, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'ATC Andriod TOTO Company', feature:'1.5M views - 2 days ago'},
    {id: 3, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Saptarshi Prakash', feature:'1.5M views - 2 days ago'},
    {id: 4, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', img_c:'', detail: 'My Mix', channelname: 'Lopamundra Mitra,Anupam Roy', feature:'1.5M views - 2 days ago'},
    {id: 5, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'AJ&Smar', feature:'1.5M views - 2 days ago'},
    {id: 6, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', img_c:'', detail: 'Mix-Mombati | Mohon Sarif | Dhakaiya Dose | Mahib Ahsan ft Anika', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 7, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 8, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 9, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 10, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 11, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    {id: 12, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
   ];



app.get("/icon1", (req,res) => {
    res.json(data)
})

app.get("/icon-list2", (req,res) => {
    res.json(data2)
})

app.get("/icon-list3", (req,res) => {
    res.json(data3)
})

app.get("/feed", (req,res) => {
    res.json(feed);
})

app.get("/video", (req,res) => {
    res.json(video);
})






const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server in Running on ${PORT}`);
})
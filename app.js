const songs = [
    {
        id: "1",
        songName: 'Chúng Ta Không Thuộc Về Nhau<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms1.jpg",
    },
    {
        id: "2",
        songName: 'Hãy Trao Cho Anh<br><div class="subtitle">Sơn Tùng M-TP, Snoop Dogg</div>',
        poster: "./img/avt-ms2.jpg",
    },
    {
        id: "3",
        songName: 'Chúng Ta Của Hiện Tại<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms3.jpg",
    },
    {
        id: "4",
        songName: 'Chúng Ta Của Tương Lai<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms4.jpg",
    },
    {
        id: "5",
        songName: 'Chạy Ngay Đi<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms5.jpg",
    },
    {
        id: "6",
        songName: 'Nơi Này Có Anh<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms6.jpg",
    },
    {
        id: "7",
        songName: 'Em của ngày hôm qua<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms7.jpg",
    },
    {
        id: "8",
        songName: 'Âm Thầm Bên Em<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms8.jpg",
    },
    {
        id: "9",
        songName: 'Có Chắc Yêu Là Đây<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms9.jpg",
    },
    {
        id: "10",
        songName: 'Buông Đôi Tay Nhau Ra<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms10.jpg",
    },
    {
        id: "11",
        songName: 'Như Ngày Hôm Qua<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms11.jpg",
    },
    {
        id: "12",
        songName: 'Ấn Nút Nhớ... Thả Giấc Mơ<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms12.jpg",
    },
    {
        id: "13",
        songName: 'Cơn Mưa Ngang Qua<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms13.jpg",
    },
    {
        id: "14",
        songName: 'Nắng Ấm Xa Dần<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms14.jpg",
    },
    {
        id: "15",
        songName: 'Lạc Trôi<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms15.jpg",
    },
    {
        id: "16",
        songName: 'Chắc Ai Đó Sẽ Về<br<br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster: "./img/avt-ms16.jpg",
    },
    {
        id: "17",
        songName: 'Luôn Yêu Đời<br><div class="subtitle">Đen, Cheng</div>',
        poster: "./img/avt-ms17.jpg",
    },
    {
        id: "18",
        songName: 'Ngày Khác Lạ<br><div class="subtitle">Đen, Giang Phạm</div>',
        poster: "./img/avt-ms18.jpg",
    },
    {
        id: "19",
        songName: 'Cho Mình Em<br><div class="subtitle">Đen, Binz</div>',
        poster: "./img/avt-ms19.jpg",
    },
    {
        id: "20",
        songName: 'Nấu Cho Các Em<br><div class="subtitle">Đen, PiaLinh</div>',
        poster: "./img/avt-ms20.jpg",
    },
    {
        id: "21",
        songName: 'Vì Yêu Cứ Đâm Đầu<br><div class="subtitle">MIN, Đen, JustaTee</div>',
        poster: "./img/avt-ms21.jpg",
    },
    {
        id: "22",
        songName: '3 1 0 7 - 3<br><div class="subtitle">W/n, DuongG, Nâu</div>',
        poster: "./img/avt-ms22.jpg",
    },
    {
        id: "23",
        songName: '3 1 0 7 - 2<br><div class="subtitle">W/n, DuongG, Nâu</div>',
        poster: "./img/avt-ms23.jpg",
    },
    {
        id: "24",
        songName: '3 1 0 7 <br><div class="subtitle">W/n, DuongG, Nâu</div>',
        poster: "./img/avt-ms24.jpg",
    },
]

Array.from(document.getElementsByClassName('songItems')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
const artists_avt = [
    {
        id: "1",
        poster: "./img/avt-artists1.jpg",
    },
    {
        id: "2",
        poster: "./img/avt-artists2.jpg",
    },
    {
        id: "3",
        poster: "./img/avt-artists3.jpg",
    },
    {
        id: "4",
        poster: "./img/avt-artists4.jpg",
    },
    {
        id: "5",
        poster: "./img/avt-artists5.jpg",
    },
    {
        id: "6",
        poster: "./img/avt-artists6.jpg",
    },
    {
        id: "7",
        poster: "./img/avt-artists7.jpg",
    },
    {
        id: "8",
        poster: "./img/avt-artists8.jpg",
    },
    {
        id: "9",
        poster: "./img/avt-artists9.jpg",
    },
    {
        id: "10",
        poster: "./img/avt-artists10.jpg",
    },
    {
        id: "11",
        poster: "./img/avt-artists11.jpg",
    },
]

Array.from(document.getElementsByClassName('avt-ar')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = artists_avt[i].poster;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused||music.currentTime==0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1'); 
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.classList.add('bi-play-circle-fill');
    }
})


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
let playlist = document.querySelector('.menu_side');
document.querySelector('#play-list').onclick = () => {
    playlist.classList.add('active');
}
let exitplaylist = document.querySelector('.menu_side');
document.querySelector('#btn-close-playlist').onclick = () => {
    exitplaylist.classList.remove('active');
}
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 350;
})
pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 350;
})
let artists_l = document.getElementById('artists_l');
let artists_r = document.getElementById('artists_r');
let items = document.getElementsByClassName('items')[0];

artists_l.addEventListener('click', () => {
    items.scrollLeft -= 350;
})
artists_r.addEventListener('click', () => {
    items.scrollLeft += 350;
})


const music = new Audio();
let index = 1;
let poster_master_play=document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src= `audio/audio${index}.mp3`;
        poster_master_play.src=`img/avt-ms${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    })
})
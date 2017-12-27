const videos = [
    { titleLike: 'Episode 1 ', firstStart: '0', firstEnd: '18:33', secondStart: '20:07', secondEnd: '21:51', done: true },
    { titleLike: 'Episode 3 ', firstStart: '0', firstEnd: '18:07', secondStart: '20:23', secondEnd: '21:55', done: true },
    { titleLike: 'Episode 6 ', firstStart: '0', firstEnd: '18:05', secondStart: '19:42', secondEnd: '21:54', done: true },
    { titleLike: 'Episode 8 ', firstStart: '0', firstEnd: '18:26', secondStart: '20:02', secondEnd: '21:53', done: true },
    { titleLike: 'Episode 9 ', firstStart: '0', firstEnd: '18:12', secondStart: '19:36', secondEnd: '21:51', done: true },
    { titleLike: 'Episode 10 ', firstStart: '0', firstEnd: '17:00', secondStart: '18:25', secondEnd: '21:55', done: true },
    { titleLike: 'Episode 12 ', firstStart: '0', firstEnd: '18:23', secondStart: '19:52', secondEnd: '21:51', done: true },
    { titleLike: 'Episode 13 ', firstStart: '0', firstEnd: '17:58', secondStart: '19:22', secondEnd: '21:53', done: true },
    { titleLike: 'Episode 14 ', firstStart: '0', firstEnd: '18:17', secondStart: '19:41', secondEnd: '21:53', done: true },
    { titleLike: 'Episode 16 ', firstStart: '0', firstEnd: '17:47', secondStart: '19:12', secondEnd: '21:57', done: true },
    { titleLike: 'Episode 19 ', firstStart: '0', firstEnd: '17:36', secondStart: '19:01', secondEnd: '21:47', done: true },
];

const fs = require('fs');
const _exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout, error, stderr); }
function exec(cmd) {
    console.log('running ' + cmd);
    _exec(cmd, puts);
}
fs.readdir('.', function(err, files) {
    exec('pwd');
    videos.forEach(function(video) {
        if (video.done) return;
        files.forEach(function(file) {
            if (!file.includes(video.titleLike)) return;
            const rand = 50000 * Math.random();
            console.log('cutting ' + file);
            exec(`ffmpeg -ss ${video.firstStart} -i "${file}"  -t "${video.firstEnd}" -c copy "${rand}-part1.webm"`);
            exec(`ffmpeg -ss ${video.secondStart} -i "${file}"  -t "${video.secondEnd}" -c copy "${rand}-part2.webm"`);
            setTimeout(function() {
                console.log('joining for ' + file);
                exec(`mkvmerge -o "done/${file}" -w "${rand}-part1.webm" + "${rand}-part2.webm"`);
            }, 3e3);
        });
    });
});
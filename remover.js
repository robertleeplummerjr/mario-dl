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
  { titleLike: 'Episode 22 ', copy: true, done: true },
  { titleLike: 'Episode 23 ', firstStart: '0', firstEnd: '17:14', secondStart: '18:38', secondEnd: '21:47', done: true },
  { titleLike: 'Episode 25 ', firstStart: '0', firstEnd: '18:01', secondStart: '19:25', secondEnd: '21:53', done: true },
  { titleLike: 'Episode 26 ', firstStart: '0', firstEnd: '17:52', secondStart: '19:17', secondEnd: '21:47', done: true },
  { titleLike: 'Episode 27 ', firstStart: '0', firstEnd: '17:43', secondStart: '19:09', secondEnd: '21:47', done: true },
  { titleLike: 'Episode 28 ', firstStart: '0', firstEnd: '16:27', secondStart: '20:20', secondEnd: '21:48', done: true },
  { titleLike: 'Episode 30 ', firstStart: '0', firstEnd: '18:03', secondStart: '19:32', secondEnd: '21:48', done: true },
  { titleLike: 'Episode 31 ', copy: true, done: true },
  { titleLike: 'Episode 32 ', firstStart: '0', firstEnd: '17:58', secondStart: '19:23', secondEnd: '21:49', done: true },
  { titleLike: 'Episode 33 ', firstStart: '0', firstEnd: '18:38', secondStart: '20:03', secondEnd: '21:49', done: true },
  { titleLike: 'Episode 34 ', firstStart: '0', firstEnd: '17:24', secondStart: '18:48', secondEnd: '21:48', done: true },
  { titleLike: 'Episode 35 ', firstStart: '0', firstEnd: '17:07', secondStart: '21:02', secondEnd: '21:46', done: true },
  { titleLike: 'Episode 36 ', copy: true, done: true },
  { titleLike: 'Episode 37 ', firstStart: '0', firstEnd: '16:46', secondStart: '18:10', secondEnd: '21:49', done: true },
  { titleLike: 'Episode 38 ', firstStart: '0', firstEnd: '17:40', secondStart: '19:07', secondEnd: '21:50', done: true },
  { titleLike: 'Episode 39 ', firstStart: '0', firstEnd: '17:34', secondStart: '19:02', secondEnd: '21:50', done: true },
  { titleLike: 'Episode 40 ', firstStart: '0', firstEnd: '17:59', secondStart: '19:23', secondEnd: '21:47', done: true },
  { titleLike: 'Episode 42 ', firstStart: '0', firstEnd: '17:59', secondStart: '19:23', secondEnd: '21:48', done: true },
  { titleLike: 'Episode 43 ', firstStart: '0', firstEnd: '17:49', secondStart: '19:13', secondEnd: '21:46', done: true },
  { titleLike: 'Episode 44 ', firstStart: '0', firstEnd: '17:34', secondStart: '19:00', secondEnd: '21:49', done: true },
  { titleLike: 'Episode 45 ', firstStart: '0', firstEnd: '17:58', secondStart: '19:23', secondEnd: '21:49', done: true },
  { titleLike: 'Episode 46 ', firstStart: '0', firstEnd: '17:33', secondStart: '18:59', secondEnd: '21:50', done: true },
  { titleLike: 'Episode 47 ', firstStart: '0', firstEnd: '18:07', secondStart: '19:32', secondEnd: '21:49', done: true },
  { titleLike: 'Episode 48 ', firstStart: '0', firstEnd: '18:06', secondStart: '19:33', secondEnd: '21:50', done: true },
  { titleLike: 'Episode 49 ', firstStart: '0', firstEnd: '16:53', secondStart: '18:20', secondEnd: '21:48', done: true },
  { titleLike: 'Episode 50 ', firstStart: '0', firstEnd: '18:35', secondStart: '20:03', secondEnd: '21:48', done: true },
  { titleLike: 'Episode 51 ', firstStart: '0', firstEnd: '17:05', secondStart: '21:07', secondEnd: '21:51', done: true },
  { titleLike: 'Episode 52 ', firstStart: '0', firstEnd: '16:59', secondStart: '18:23', secondEnd: '21:49' },
];

const fs = require('fs');
const _exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout, error, stderr); }
function exec(cmd) {
  console.log('running ' + cmd);
  _exec(cmd, puts);
}
fs.readdir('.', (err, files) => {
  exec('pwd');
  videos.forEach((video) => {
    if (video.done) return;
    files.forEach((file) => {
      if (!file.includes(video.titleLike)) return;

      if (video.copy) {
        exec(`cp "${file}" ./done`);
        return;
      }
      const rand = 50000 * Math.random();
      console.log('cutting ' + file);
      exec(`ffmpeg -ss ${video.firstStart} -i "${file}"  -t "${video.firstEnd}" -c copy "${rand}-part1.webm"`);
      exec(`ffmpeg -ss ${video.secondStart} -i "${file}"  -t "${video.secondEnd}" -c copy "${rand}-part2.webm"`);
      setTimeout(() => {
        console.log('joining for ' + file);
        exec(`mkvmerge -o "done/${file}" -w "${rand}-part1.webm" + "${rand}-part2.webm"`);
        setTimeout(() => {
          exec(`rm "${rand}-part1.webm" "${rand}-part2.webm"`);
        }, 5e3);
      }, 3e3);
    });
  });
});
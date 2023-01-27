function solution(m, musicinfos) {
  let answer = "(None)";
  let musics = [];
  let result = [];

  m = m.replaceAll("C#", "c");
  m = m.replaceAll("D#", "d");
  m = m.replaceAll("F#", "f");
  m = m.replaceAll("G#", "g");
  m = m.replaceAll("A#", "a");

  for (let i = 0; i < musicinfos.length; i++) {
    musics = musicinfos[i].split(",");
    const start = musics[0].split(":");
    const end = musics[1].split(":");
    const time = (end[0] - start[0]) * 60 + (end[1] - start[1]);
    const title = musics[2];
    let melody = musics[3];

    melody = melody.replaceAll("C#", "c");
    melody = melody.replaceAll("D#", "d");
    melody = melody.replaceAll("F#", "f");
    melody = melody.replaceAll("G#", "g");
    melody = melody.replaceAll("A#", "a");

    if (melody.length <= time) {
      melody =
        melody.repeat(Math.floor(time / melody.length)) +
        melody.slice(0, time % melody.length);
    } else {
      melody = melody.slice(0, time);
    }

    if (melody.includes(m)) {
      result.push([title, time]);
    }
  }

  result.sort((a, b) => {
    return b[1] - a[1];
  });

  if (result.length >= 1) answer = result[0][0];

  return answer;
}

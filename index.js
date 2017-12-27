const youtubeIds = [
    '/watch?v=Q20ovbTOroE', //Super Mario Bros Super Show Episode 1 - The Bird! The Bird!TheMarioBros.net
    //'/watch?v=XVKjcGes7W0', //Super Mario Bros Super Show Episode 2 - King Mario of CramalotTheMarioBros.net
    '/watch?v=i-y4Scc_mEk', //Super Mario Bros Super Show Episode 3 - Butch Mario & the Luigi KidTheMarioBros.net
    //'/watch?v=DJnbfvhUKmM', //Super Mario Bros Super Show Episode 4 - Mario's Magic CarpetTheMarioBros.net
    //'/watch?v=D-wVoB43JhY', //Super Mario Bros Super Show Episode 5 - Rolling down the RiverTheMarioBros.net
    '/watch?v=kPV4n9ZtlgY', //Super Mario Bros Super Show Episode 6 - The Great Gladiator GigTheMarioBros.net
    //'/watch?v=Ehef1vY2J14', //Super Mario Bros Super Show Episode 7 - Mario & The BeanstalkTheMarioBros.net
    '/watch?v=9nM40AWUDIU', //Super Mario Bros Super Show Episode 8 - Love 'Em & Leave 'EmTheMarioBros.net
    '/watch?v=H7aLcbFzJvA', //Super Mario Bros Super Show Episode 9 - The Great BMX RaceTheMarioBros.net
    '/watch?v=DGKl-JhQIGY', //Super Mario Bros Super Show Episode 10 - Stars in Their EyesTheMarioBros.net
    //'/watch?v=ZQPFESRmF_s', //Super Mario Bros Super Show Episode 11 - Jungle FeverTheMarioBros.net
    '/watch?v=PmWyrhsLsWQ', //Super Mario Bros Super Show Episode 12 - Brooklyn BoundTheMarioBros.net
    '/watch?v=69-3-J8cq0s', //Super Mario Bros Super Show Episode 13 - Toad WarriorsTheMarioBros.net
    '/watch?v=C2M7ZSVf1uI', //Super Mario Bros Super Show Episode 14 - The Fire of HercufleasTheMarioBros.net
    //'/watch?v=WO5pyXd79Qg', //Super Mario Bros Super Show Episode 15 - Count KoopulaTheMarioBros.net
    '/watch?v=QxRnpX532zg', //Super Mario Bros Super Show Episode 16 - Pirates of KoopaTheMarioBros.net
    //'/watch?v=XnuTmK_EWKg', //Super Mario Bros Super Show Episode 17 - Two Plumbers and a BabyTheMarioBros.net
    //'/watch?v=yE94gT66TXQ', //Super Mario Bros Super Show Episode 18 - The Adventures of Sherlock MarioTheMarioBros.net
    '/watch?v=Ih2HFDo6y7I', //Super Mario Bros Super Show Episode 19 - Do you, Princess Toadstool take this Koopa?TheMarioBros.net
    //'/watch?v=R-iW2gaMEiU', //Super Mario Bros Super Show Episode 20 - The Pied KoopaTheMarioBros.net
    //'/watch?v=m9qoAhZ-D7g', //Super Mario Bros Super Show Episode 21 - KoopensteinTheMarioBros.net
    '/watch?v=0itA9MuZPNY', //Super Mario Bros Super Show Episode 22 - On Her Majesty's Sewer ServiceTheMarioBros.net
    '/watch?v=Kva9GdnfGnY', //Super Mario Bros Super Show Episode 23 - Mario & JoiletTheMarioBros.net
    //'/watch?v=-JZTwUi86SU', //Super Mario Bros Super Show Episode 24 - Too Hot to HandleTheMarioBros.net
    '/watch?v=7D7byXRrksE', //Super Mario Bros Super Show Episode 25 - Hooded Robin and his Mario menTheMarioBros.net
    '/watch?v=SSdpzQBNz2I', //Super Mario Bros Super Show Episode 26 - 20,000 Koopas under the SeaTheMarioBros.net
    '/watch?v=c3700-Kd3OM', //Super Mario Bros Super Show Episode 27 - Mighty McMario & The Pot of GoldTheMarioBros.net
    '/watch?v=PJxzgFV9rjM', //Super Mario Bros Super Show Episode 28 - Mario Meets KoopzillaTheMarioBros.net
    '/watch?v=wubNWddbtGg', //Super Mario Bros Super Show Episode 29 - Koopa KlausTheMarioBros.net
    '/watch?v=KjPdT6Kc6Xg', //Super Mario Bros Super Show Episode 30 - Mario & The Red Baron KoopaTheMarioBros.net
    '/watch?v=2BnQCU57vOU', //Super Mario Bros Super Show Episode 31 - The UnzappablesTheMarioBros.net
    '/watch?v=87cOz2aSEZ4', //Super Mario Bros Super Show Episode 32 - Bad RapTheMarioBros.net
    '/watch?v=Ncs2XPVtjd0', //Super Mario Bros Super Show Episode 33 - The Mark of ZeroTheMarioBros.net
    '/watch?v=eaDTFGTasNg', //Super Mario Bros Super Show Episode 34 - The Ten KoopmandmentsTheMarioBros.net
    '/watch?v=AyNt1XNYNWg', //Super Mario Bros Super Show Episode 35 - The Koopa's Are Coming! The Koopa's Are Coming!TheMarioBros.net
    '/watch?v=0klhbU5No8c', //Super Mario Bros Super Show Episode 36 - The Trojan KoopaTheMarioBros.net
    '/watch?v=nT_37VNz0R4', //Super Mario Bros Super Show Episode 37 - Quest for PizzaTheMarioBros.net
    '/watch?v=EYU6ymbEIxY', //Super Mario Bros Super Show Episode 38 - The Great Gold Coin RushTheMarioBros.net
    '/watch?v=wb5lizMrj-s', //Super Mario Bros Super Show Episode 39 - Elvin LivesTheMarioBros.net
    '/watch?v=7ISVKAbYcvc', //Super Mario Bros Super Show Episode 40 - Plumber's AcademyTheMarioBros.net
    //'/watch?v=dCPxQ_KBlOU', //Super Mario Bros Super Show Episode 41 - Karate KoopaTheMarioBros.net
    '/watch?v=sDzY1wgrH8E', //Super Mario Bros Super Show Episode 42 - Mario of the ApesTheMarioBros.net
    '/watch?v=JCNtIAF2qO0', //Super Mario Bros Super Show Episode 43 - Princess, I Shrunk the Mario BrosTheMarioBros.net
    '/watch?v=novy1d5y3ZY', //Super Mario Bros Super Show Episode 44 - Little Red Riding PrincessTheMarioBros.net
    '/watch?v=4Sl1n9xvYt0', //Super Mario Bros Super Show Episode 45 - The Provolone RangerTheMarioBros.net
    '/watch?v=1AdiKrvIa4w', //Super Mario Bros Super Show Episode 46 - Escape from KoopatrazTheMarioBros.net
    '/watch?v=Jw_VQkGCGIk', //Super Mario Bros Super Show Episode 47 - Mario of the DeepTheMarioBros.net
    '/watch?v=bAe65BOfVRM', //Super Mario Bros Super Show Episode 48 - Flatbush KoopaTheMarioBros.net
    '/watch?v=pcHHOyVRUak', //Super Mario Bros Super Show Episode 49 - Raiders of the Lost MushroomTheMarioBros.net
    '/watch?v=vNmJ8b8isrA', //Super Mario Bros Super Show Episode 50 - Crocodile MarioTheMarioBros.net
    '/watch?v=XJBAKiC_p3k', //Super Mario Bros Super Show Episode 51 - Star KoopaTheMarioBros.net
    '/watch?v=tezTMs44yzY' //Super Mario Bros Super Show Episode 52 - Robo KoopaTheMarioBros.net
];
const youtubedl = require('youtube-dl');
const fs = require('fs');
function dl() {
  if (youtubeIds.length < 1) {
      console.log('all done!');
      process.exit(1);
  }
  const id = youtubeIds.shift();
  const video = youtubedl('http://youtube.com' + id);
  video.on('info', (info) => {
    console.log('Download started');
    console.log('filename: ' + info.filename);
    console.log('size: ' + info.size);

    if (fs.existsSync(info.filename)) {
      dl();
      return;
    }

    video.pipe(fs.createWriteStream(info.filename));

    video.on('complete', (info) => {
      console.log('finished downloading!');
      dl();
    });

    video.on('complete', (info) => {
      console.log('finished downloading!');
      dl();
    });
  });
}

dl();